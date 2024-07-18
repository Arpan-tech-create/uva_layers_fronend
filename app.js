import { layers, getLayerConfig } from "./layers_config.js";

import { layerThemes } from "./themes_config.js";
import { createWMTSLayerObj } from "./factory/WMTS_layer_factory.js";
import { createTileWMSLayerObj } from "./factory/tileWMS_layer_factory.js";
import { createImageWMSLayerObj } from "./factory/imageWMS_layer_factory.js";
import { createXYZLayerObj } from "./factory/xyz_layer_factory.js";
import { createOSMLayerObj } from "./factory/osm_layer_factory.js";
let map = "";
let app = null;
let swipeAttachedLayer = null;
let storyURL = "https://vedas.sac.gov.in/vone_t0/story/";
let initialExtent = [
  67.1766451354, 2.96553477623, 97.4025614766, 39.4940095078,
];
let swipePrerenderFuntion = function (event) {
  const swipe = document.getElementById("swipeInput");

  if (!swipe) {
    return;
  }
  const ctx = event.context;
  const mapSize = map.getSize();
  const width = mapSize[0] * (swipe.value / 100);
  const tl = ol.render.getRenderPixel(event, [width, 0]);
  const tr = ol.render.getRenderPixel(event, [mapSize[0], 0]);
  const bl = ol.render.getRenderPixel(event, [width, mapSize[1]]);
  const br = ol.render.getRenderPixel(event, mapSize);

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(tl[0], tl[1]);
  ctx.lineTo(bl[0], bl[1]);
  ctx.lineTo(br[0], br[1]);
  ctx.lineTo(tr[0], tr[1]);
  ctx.closePath();
  ctx.clip();
};

let swipePostrenderFunction = function (event) {
  const ctx = event.context;
  ctx.restore();
};

function customStringify(obj, blacklist) {
  return JSON.stringify(obj, function (key, value) {
    if (blacklist.includes(key)) {
      return undefined; // Exclude blacklisted properties
    }
    if (typeof value === "object" && value !== null) {
      // Recursively apply customStringify for nested objects
      const filteredObj = {};
      for (const prop in value) {
        if (!blacklist.includes(prop)) {
          filteredObj[prop] = value[prop];
        }
      }
      return filteredObj;
    }
    return value;
  });
}

function mergeParameters(obj1, obj2) {
  // Loop through all properties of obj2
  for (let prop in obj2) {
    // Check if the property exists in obj1 and is an object (recursively merge)
    if (
      obj1.hasOwnProperty(prop) &&
      typeof obj1[prop] === "object" &&
      obj2[prop] !== null
    ) {
      obj1[prop] = mergeParameters(obj1[prop], obj2[prop]);
    } else {
      // Otherwise, simply assign the property from obj2 to obj1
      obj1[prop] = obj2[prop];
    }
  }
  return obj1;
}

function initMap() {
  map = new ol.Map({
    controls: ol.control
      .defaults({
        attributionOptions: {
          collapsible: false,
        },
      })
      .extend([
        new ol.control.MousePosition({
          coordinateFormat: ol.coordinate.createStringXY(4),
          projection: "EPSG:4326",
          target: document.getElementById("mouse-position"),
        }),
      ]),
    target: "map",
    // layers: [indian_admin_soi],
    layers: [],
    view: new ol.View({
      projection: projection,
    }),
  });
  map.addControl(new ol.control.ScaleLine());
  map.getView().fit(initialExtent);
}
app = new Vue({
  el: "#app",
  data: {
    layers: layers,
    showSwipePanel: false,
    layerThemes: layerThemes,
    showThemeCatalogue: false,
    searchContent: "",
    leftLayerConfig: null,
    swipeLayerConfig: null,
    swipeLayerConfigId: null,
    isShowThemes: true,
    filteredLayers: "",
    selectedSubTheme: layerThemes.visualization.subtheme.optical,
    selectedLayerConfigToShow: {},
    refreshCounter: 0,
    isShowStoryModal: false,
    storyLink: "",
    isShowLayersPanel: true,
    appTitle: "",
  },
  async mounted() {
    initMap();

    for (let [key, layerConfig] of Object.entries(
      this.selectedLayerConfigToShow
    )) {
      await this.updateLayerHelper(layerConfig.id);
    }
    //on window width less than 570px, default layer panel set to off for mobile view. Sir's requirement
    this.isShowLayersPanel =
      window.innerWidth <= 570 ? false : this.isShowLayersPanel;

    // get application_id
    let appId = getHashValue("appId");

    let storyId = getHashValue("storyId");

    let response = "";
    let configFile = appId ? appId : "uva";

    response = await (
      await fetch("app_configs/" + configFile + ".json")
    ).json();
    this.appTitle = response.appTitle;

    //if story id present then fetch layers of share story
    if (storyId) {
      let urlToFetchData = storyURL + storyId;

      let jsonData = await fetch(urlToFetchData).then((response) =>
        response.json()
      );

      let kvarray = Object.entries(jsonData.layersConfigs);
      let kvArrayLength = kvarray.length;
      for (let kvi = 0; kvi < kvArrayLength; kvi++) {
        let key = kvarray[kvi][0];
        let value = kvarray[kvi][1];

        await this.pushLayer(value.id, value.parameters, key, value.isShow);
      }

      map
        .getView()
        .fit(
          [
            jsonData.extent[0],
            jsonData.extent[1],
            jsonData.extent[2],
            jsonData.extent[3],
          ],
          { duration: 1000 }
        );

      // Now you can access the parsed JSON data
      if (jsonData.swipe) {
        this.showSwipePanel = true;
        this.swipeLayerConfigId = jsonData.swipe;
        this.swipeLayerConfig = this.selectedLayerConfigToShow[jsonData.swipe];
        this.openSwipe();
      }
    } else {
      response.initialLayerIds.forEach(function (item) {
        app.pushLayer(item);
      });

      if (response.extent) {
        //left ,bottom,right,top
        // map.getView().fit(extent, map.getSize());
        map
          .getView()
          .fit(
            [
              response.extent[0],
              response.extent[1],
              response.extent[2],
              response.extent[3],
            ],
            { duration: 1000 }
          );
      }
    }
  },
  methods: {
    changeDate(param, op) {
      let time = new Date(param.selectedOption.val).getTime();

      let newDate =
        op == "next" ? new Date(time + 86400000) : new Date(time - 86400000);
      newDate = newDate.toISOString().slice(0, 10);
      param.selectedOption = {
        lbl: newDate,
        val: newDate,
      };
      this.$forceUpdate();
    },

    swapLayers(val, id) {
      let arrayOfKeys = Object.keys(this.selectedLayerConfigToShow).map((x) =>
        parseInt(x)
      );
      let index = 0;
      if (val == "increase") {
        index = arrayOfKeys.findIndex((cur) => cur > id);
      } else if (val == "decrease") {
        index = arrayOfKeys.findIndex((cur) => cur == id) - 1;
      }

      if (index >= 0) {
        let swap_key = arrayOfKeys[index];
        let cur_key = id;
        let curLayerConfig = this.selectedLayerConfigToShow[cur_key];
        let swapLayerConfig = this.selectedLayerConfigToShow[swap_key];

        //set the z-index first
        curLayerConfig.zIndex = swap_key;
        swapLayerConfig.zIndex = cur_key;
        //set map z-index
        curLayerConfig.layer.setZIndex(swap_key);
        swapLayerConfig.layer.setZIndex(cur_key);
        this.selectedLayerConfigToShow[cur_key] = swapLayerConfig;
        this.selectedLayerConfigToShow[swap_key] = curLayerConfig;
      }

      this.$forceUpdate();
    },
    matches(obj) {
      const term = this.searchContent.toLowerCase();
      return obj.displayName.toLowerCase().includes(term);
    },
    renderMap() {
      map.render();
    },
    openSwipe() {
      let numberOfLayers = Object.keys(this.selectedLayerConfigToShow);

      if (window.innerWidth < 600) {
        this.isShowLayersPanel = false;
      }

      if (numberOfLayers.length < 1) {
        alert(
          "There should be atleast 1 layer for swipe. Please add more layers. If you want to compare the same dataset, please add 1 layers of same dataset."
        );
        return;
      }

      if (!this.swipeLayerConfigId) {
        let layerArr = Object.entries(this.selectedLayerConfigToShow);
        this.swipeLayerConfig = layerArr[1][1];
        this.swipeLayerConfigId = layerArr[1][0];
      } else {
        this.swipeLayerConfig =
          this.selectedLayerConfigToShow[this.swipeLayerConfigId];
      }

      if (swipeAttachedLayer) {
        swipeAttachedLayer.un("prerender", swipePrerenderFuntion);
        swipeAttachedLayer.un("postrender", swipePostrenderFunction);
        swipeAttachedLayer = null;
        map.render();
      }
      if (this.swipeLayerConfig.type != "imageWMS") {
        this.swipeLayerConfig = this.swapRasterLayers(this.swipeLayerConfig);
        this.swipeLayerConfigId = this.swipeLayerConfig.zIndex;
      }

      let layer = this.swipeLayerConfig.layer;

      layer.on("prerender", swipePrerenderFuntion);

      layer.on("postrender", swipePostrenderFunction);

      swipeAttachedLayer = layer;

      map.render();
      this.showSwipePanel = true;
    },
    swapRasterLayers(curLayerConfig) {
      let highestZIndex = this.findRasterHighestZIndex();
      let curZIndex = curLayerConfig.zIndex;

      let layerConfigToSwap = this.selectedLayerConfigToShow[highestZIndex];
      layerConfigToSwap.zIndex = curZIndex;

      curLayerConfig.zIndex = highestZIndex;

      this.selectedLayerConfigToShow[curZIndex] = layerConfigToSwap;
      this.selectedLayerConfigToShow[highestZIndex] = curLayerConfig;
      this.selectedLayerConfigToShow[curZIndex].layer.setZIndex(curZIndex);
      this.selectedLayerConfigToShow[highestZIndex].layer.setZIndex(
        highestZIndex
      );

      return this.selectedLayerConfigToShow[highestZIndex];
    },

    findRasterHighestZIndex() {
      let highestZIndex = 0;
      let keys = Object.keys(this.selectedLayerConfigToShow);
      highestZIndex = Math.max(...keys);
      return highestZIndex;
    },
    closeSwipe() {
      swipeAttachedLayer.un("prerender", swipePrerenderFuntion);
      swipeAttachedLayer.un("postrender", swipePostrenderFunction);
      swipeAttachedLayer = null;
      map.render();
      this.showSwipePanel = false;
    },
    toggleLayer(id) {
      let curObj = this.selectedLayerConfigToShow[id];

      let layer = curObj.layer;
      if (curObj.isShow && layer) {
        map.addLayer(layer);
      } else if (layer) {
        map.removeLayer(layer);
        //set swipe layer config if selected is not visible
        if (this.showSwipePanel) {
          let keys = Object.keys(this.selectedLayerConfigToShow);
          let keysLength = keys.length;
          for (let i = 0; i < keysLength; i++) {
            if (this.selectedLayerConfigToShow[keys[i]].isShow) {
              this.swipeLayerConfig = this.selectedLayerConfigToShow[keys[i]];
              this.swipeLayerConfigId = keys[i];
              this.openSwipe();
              break;
            }
          }
        }
      }

      this.$forceUpdate();
    },
    prepareStoryId() {
      //Generating story id
      let storyId = Math.round(new Date() / 1000);
      //Preapring custome string to share
      let customStringObj = this.prepareShareLink();
      let urlToPost = storyURL + storyId;

      fetch(urlToPost, {
        method: "POST",
        body: customStringObj,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => {
        this.isShowStoryModal = response.status == 200 ? true : false;
        let appId = getHashValue("appId");
        let curURL = window.location.href.split("#")[0];
        this.storyLink = `${curURL}#appId=${
          appId ? appId : ""
        }&storyId=${storyId}`;
      });
    },
    prepareShareLink() {
      let currentExtent = map.getView().calculateExtent(map.getSize());
      let customString = customStringify(
        {
          extent: currentExtent,
          layersConfigs: this.selectedLayerConfigToShow,
        },
        ["options", "layer", "styles"]
      );

      let customStringObj = "";
      if (this.showSwipePanel) {
        //Convert string to object
        customStringObj = JSON.parse(customString);

        customStringObj["swipe"] = this.swipeLayerConfigId;
        customString = JSON.stringify(customStringObj);
      }

      return customString;
    },
    removeLayer(id) {
      let layerToRemove = this.selectedLayerConfigToShow[id].layer;
      map.removeLayer(layerToRemove);
      delete this.selectedLayerConfigToShow[id];
      this.$forceUpdate();
    },
    async pushLayer(id, initialParameters, key, initialShow) {
      //New id for each layer
      let newId = "";
      let curLayerConfigObj = await getLayerConfig(id);

      ///z-index

      let noOfLayers = Object.keys(this.selectedLayerConfigToShow).length;

      let highestZIndex = 0;
      let layerConfigArray = Object.entries(this.selectedLayerConfigToShow);

      if (key) {
        //when share a story
        newId = key;
      } else {
        if (noOfLayers == 0) {
          newId = curLayerConfigObj.baseIndex || 0;
        } else {
          if (curLayerConfigObj.baseIndex) {
            for (let [key, layerConfig] of layerConfigArray) {
              if (layerConfig.baseIndex == curLayerConfigObj.baseIndex) {
                if (layerConfig.zIndex > highestZIndex) {
                  highestZIndex = layerConfig.zIndex;
                }
              }
            }
          } else {
            for (let [key, layerConfig] of layerConfigArray) {
              if (
                !layerConfig.baseIndex &&
                layerConfig.zIndex > highestZIndex
              ) {
                highestZIndex = layerConfig.zIndex;
              }
            }
          }
          newId = ++highestZIndex;
        }
      }

      let newLayerConfig = this.updateDisplayName(curLayerConfigObj);

      this.selectedLayerConfigToShow[newId] = newLayerConfig;

      const sortable = Object.fromEntries(
        Object.entries(this.selectedLayerConfigToShow).sort(
          ([, a], [, b]) => b - a
        )
      );
      if (initialParameters) {
        newLayerConfig.parameters = mergeParameters(
          newLayerConfig.parameters,
          initialParameters
        );
        newLayerConfig.isShow = initialShow;
      }

      await this.updateLayerHelper(newId);
      this.$forceUpdate();
    },
    updateDisplayName(curLayerConfig) {
      let objValues = Object.values(this.selectedLayerConfigToShow);
      let nameCounter = 1;
      let mainString = curLayerConfig.displayName;
      let j = 0;
      let objValuesLength = objValues.length;
      for (let i = 0; i < objValuesLength; i++) {
        if (objValues[i].displayName.includes(mainString)) {
          objValues[i].displayName = mainString + "[" + nameCounter + "]";
          nameCounter++;
        }
      }
      if (nameCounter != 1)
        curLayerConfig.displayName = mainString + "[" + nameCounter + "]";
      return curLayerConfig;
    },
    async updateLayerHelper(id, param_key) {
      let curLayerConfig = this.selectedLayerConfigToShow[id];
      let parameters = curLayerConfig.parameters
        ? curLayerConfig.parameters
        : "";
      let curParam = parameters[param_key];

      //Get dependent val key

      if (curParam && curParam.dependentKey) {
        curParam.dependentKey.forEach((key) => {
          parameters[key].selectedOption = curParam.selectedOption.saturation;
        });
      }

      if (curLayerConfig.layer) {
        map.removeLayer(curLayerConfig.layer);
      }
      let layerInstance = "";

      switch (curLayerConfig.type) {
        case "WMTS":
          layerInstance = createWMTSLayerObj(curLayerConfig);
          break;
        case "XYZ":
          layerInstance = createXYZLayerObj(curLayerConfig);
          break;
        case "imageWMS":
          layerInstance = createImageWMSLayerObj(curLayerConfig);
          break;
        case "osm":
          layerInstance = createOSMLayerObj(curLayerConfig);
          break;
        default:
          layerInstance = createTileWMSLayerObj(curLayerConfig);
          break;
      }

      if (layerInstance) {
        curLayerConfig.zIndex = id;
        layerInstance.setZIndex(id);
        curLayerConfig.layer = layerInstance;
        if (curLayerConfig.isShow) await map.addLayer(layerInstance);
      }

      if (this.showSwipePanel) {
        this.openSwipe();
      }

      this.$forceUpdate();
    },
  },
  computed: {
    listValues() {
      return Object.values(this.layers);
    },
    filteredList() {
      if (!this.searchContent) {
        return "";
      }
      return this.listValues
        .map((v) => {
          if (this.matches(v)) {
            return v;
          }
        })
        .filter((v) => v);
    },
  },
});

setInterval(function () {
  let element = document.getElementById("auto_resize");
  if (element) {
    element.style.height = "18px";
    element.style.height = element.scrollHeight + "px";
  }
}, 1000);

function getHashValue(paramName) {
  // Get the URL hash
  let hash = window.location.hash.substring(1);

  // Split the hash into an array of key-value pairs
  let params = hash.split("&");
  let paramsLength = params.length;
  // Iterate through the key-value pairs to find the parameter value
  for (let i = 0; i < paramsLength; i++) {
    let pair = params[i].split("=");
    if (pair[0] === paramName) {
      // Return the value if the parameter name matches
      return pair[1];
    }
  }

  // Return null if the parameter name is not found
  return null;
}

async function fetchPost() {
  let res = await fetch("https://vedas.sac.gov.in/ridam_server/info/", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      layer: "T1S1I1",
      args: {
        dataset_id: "T0S1P0",
        filter_nodata: "no",
        lon: 79.7222900390625,
        lat: 33.61610412597656,
        indexes: [1],
        from_time: null,
        to_time: "20240506",
      },
    }),

    method: "POST",
  });
  console.log("Response is", await res.json());
}

fetchPost().then((data) => {
  console.log("data is ", data);
});
