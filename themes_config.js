import { layers } from "./layers_config.js";
export let layerThemes = {
  visualization: {
    icon: "",
    // name: "Visualization",
    name: "Basic Visualization1212",
    description: "",
    backgroundImg: "./assets/img/background/visualization.jpg",
    subtheme: {
      optical: {
        id: "optical",
        displayName: "Optical121",
        icon: "",
        isShowSubtheme: false,
        layers: {
          // awifs_fcc: layers["awifs_fcc"],
          awifs_ncc: layers["awifs_ncc"],
          awifs_fcc_ridam: layers["awifs_fcc_ridam"],
          insat_visible_1km: layers["insat_visible_1km"],
          insat_thermal_4km: layers["insat_thermal_4km"],
          // sentinel_2_fcc_10m: layers["sentinel_2_fcc_10m"],
          modis_tcc_250m: layers["modis_tcc_250m"],
          // sentinel: layers["sentinel"],
          // sentinel_rgb: layers["sentinel_rgb"],
          sentinel_2_fcc_ridam: layers["sentinel_2_fcc_ridam"],
          sentinel_2_tcc_ridam: layers["sentinel_2_tcc_ridam"],
        },
      },
      microwave: {
        id: "microwave",
        isShowSubtheme: false,
        displayName: "Microwave",
        icon: "",
        layers: {
          sentinel_1_10m: layers["sentinel_1_10m"],
        },
      },

      customlayer:{
        id:"vedas_gawg",
        isShowSubtheme:false,
        displayName:"vedas_gawg",
        icon:"",
        layers:{
          xyxyxyxL: layers["sentinel_2_fcc_ridam"],
        },
      }
    },


    
  },
  general_indices: {
    icon: "",
    name: "General Indices",
    description: "",
    backgroundImg: "./assets/img/background/visualization.jpg",

    subtheme: {
      nd: {
        id: "",
        displayName: "Normalized Difference",
        icon: "",
        isShowSubtheme: false,
        layers: {
          awifs_normalized_difference: layers["awifs_normalized_difference"],
          sentinel_2_normalized_difference:
          layers["sentinel_2_normalized_difference"],
        },
      },
    },
  },
  vegetation: {
    icon: "",
    name: "Vegetation",
    description: "",
    backgroundImg: "./assets/img/background/visualization.jpg",

    subtheme: {
      vegetation_indices: {
        id: "vegetation_indices",
        displayName: "Vegetation Indices",
        icon: "",
        isShowSubtheme: false,
        layers: {
          ndvi: layers["ndvi"],
          ndvi_5d: layers["ndvi_5d"],
        },
      },
    },
  },

  oceanography: {
    icon: "",
    name: "Oceanography",
    description: "",
    backgroundImg: "./assets/img/background/visualization.jpg",

    subtheme: {
      environment: {
        id: "environment",
        displayName: "Environment",
        icon: "",
        isShowSubtheme: false,
        layers: {
          s2_fdi: layers["s2_fdi"],
        },
      },
    },
  },

  cryosphere: {
    icon: "",
    name: "Cryosphere",
    description: "",
    backgroundImg: "./assets/img/background/visualization.jpg",

    subtheme: {
      ndsi: {
        id: "ndsi",
        displayName: "NDSI",
        icon: "",
        isShowSubtheme: false,
        layers: {
          awifs_ndsi: layers["awifs_ndsi"],
          sentinel_2_ndsi: layers["sentinel_2_ndsi"],
        },
      },
    },
  },

  referenceLayers: {
    icon: "",
    name: "Reference Layers",
    description: "",
    backgroundImg: "./assets/img/background/reference.jpg",

    subtheme: {
      administrative: {
        id: "administrative",
        displayName: "Administrative",
        icon: "",
        isShowSubtheme: false,
        layers: {
          cities_town: layers["cities_town"],
          village_boundary: layers["village_boundary"],
          taluka_boundary: layers["taluka_boundary"],
          district_boundary: layers["district_boundary"],
          indian_state_boundary: layers["indian_state_boundary"],
          base_map_map_my_india_hybrid: layers["base_map_map_my_india_hybrid"],
          base_map_map_my_india_hybrid_label:
          layers["base_map_map_my_india_hybrid_label"],
          administrative_boundary_bhuvan:
          layers["administrative_boundary_bhuvan"],
          administrative_boundary_soi: layers["administrative_boundary_soi"],
          countries: layers["countries"],
        },
      },
      infrastructure: {
        id: "infrastructure",
        displayName: "Infrastructure",
        icon: "",
        isShowSubtheme: false,
        layers: {
          national_highway: layers["national_highway"],
          railway_tracks: layers["railway_tracks"],
          railway_stations: layers["railway_stations"],
          airports: layers["airports"],
        },
      },
      imagery: {
        id: "imagery",
        displayName: "Imagery",
        icon: "",
        isShowSubtheme: false,
        layers: {
          high_resolution_imagery_bhuvan:
          layers["high_resolution_imagery_bhuvan"],
        },
      },
    },
  },
};
