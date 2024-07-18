//Global letiable declaration
const compositeDateOptions = [
  { lbl: "1 Day", val: 1 },
  { lbl: "3 Days", val: 3 },
  { lbl: "5 Days", val: 5 },
  { lbl: "10 Days", val: 10 },
  { lbl: "15 Days", val: 15 },
];

const sentinel1DataOptions = [
  { lbl: "VV", val: "VV" },
  { lbl: "VH", val: "VH" },
  // { lbl: "R,G,B::VV,VH,VV-VH", val: "R,G,B::VV,VH,VV-VH" },
  { lbl: "RGB", val: "RGB" },
];

const monthToNum = {
  JAN: "01",
  FEB: "02",
  MAR: "03",
  APR: "04",
  MAY: "05",
  JUN: "06",
  JUL: "07",
  AUG: "08",
  SEP: "09",
  OCT: "10",
  NOV: "11",
  DEC: "12",
};

const operationOptions = [
  { lbl: "Max", val: "max" },
  { lbl: "Min", val: "min" },
  { lbl: "Mean", val: "mean" },
  { lbl: "Median", val: "median" },
];

const colorOptions = [
  {
    lbl: "Red",
    val: "FF0000FF",
  },
  {
    lbl: "Green",
    val: "00FF00FF",
  },
  {
    lbl: "Blue",
    val: "0000FFFF",
  },
];
//Saturation Options -each val is 10000 multiple of lable value
const saturationOptions = [
  { lbl: 0.05, val: 500 },
  { lbl: 0.1, val: 1000 },
  { lbl: 0.15, val: 1500 },
  { lbl: 0.2, val: 2000 },
  { lbl: 0.25, val: 2500 },
  { lbl: 0.3, val: 3000 },
  { lbl: 0.35, val: 3500 },
  { lbl: 0.4, val: 4000 },
  { lbl: 0.45, val: 4500 },
  { lbl: 0.5, val: 5000 },
  { lbl: 0.55, val: 5500 },
  { lbl: 0.6, val: 6000 },
  { lbl: 0.65, val: 6500 },
  { lbl: 0.7, val: 7000 },
  { lbl: 0.75, val: 7500 },
  { lbl: 0.8, val: 8000 },
  { lbl: 0.85, val: 8500 },
  { lbl: 0.9, val: 9000 },
  { lbl: 0.95, val: 9500 },
  { lbl: 1.0, val: 10000 },
];

//Saturation Options -each val is 10000 multiple of lable value
const awifsSaturationOptions = [
  { lbl: 0.05, val: 0.05 },
  { lbl: 0.1, val: 0.1 },
  { lbl: 0.15, val: 0.15 },
  { lbl: 0.2, val: 0.2 },
  { lbl: 0.25, val: 0.25 },
  { lbl: 0.3, val: 0.3 },
  { lbl: 0.35, val: 0.35 },
  { lbl: 0.4, val: 0.4 },
  { lbl: 0.45, val: 0.45 },
  { lbl: 0.5, val: 0.5 },
  { lbl: 0.55, val: 0.55 },
  { lbl: 0.6, val: 0.6 },
  { lbl: 0.65, val: 0.65 },
  { lbl: 0.7, val: 0.7 },
  { lbl: 0.75, val: 0.75 },
  { lbl: 0.8, val: 0.8 },
  { lbl: 0.85, val: 0.85 },
  { lbl: 0.9, val: 0.9 },
  { lbl: 0.95, val: 0.95 },
  { lbl: 1.0, val: 1.0 },
];

//bandOptions for FCC Ridam dropdowns.
// const bandOptions = [
//   { lbl: "B1 [443]", val: 1, saturation: saturationOptions[5] },
//   { lbl: "B2 [490]", val: 2, saturation: saturationOptions[7] },
//   { lbl: "B3 [560]", val: 3, saturation: saturationOptions[7] },
//   { lbl: "B4 [665]", val: 4, saturation: saturationOptions[7] },
//   { lbl: "B5 [705]", val: 5, saturation: saturationOptions[11] },
//   { lbl: "B6 [740]", val: 6, saturation: saturationOptions[11] },
//   { lbl: "B7 [783]", val: 7, saturation: saturationOptions[11] },
//   { lbl: "B8 [842]", val: 8, saturation: saturationOptions[11] },
//   { lbl: "B8A [865]", val: 9, saturation: saturationOptions[11] },
//   { lbl: "B9 [945]", val: 10, saturation: saturationOptions[11] },
//   { lbl: "B11 [1610]", val: 11, saturation: saturationOptions[5] },
//   { lbl: "B12 [2190]", val: 12, saturation: saturationOptions[5] },
// ];

const bandOptions = [
  {
    title: "B1",
    lbl: "Aerosol [443]",
    val: 1,
    saturation: saturationOptions[5],
  },
  { title: "B2", lbl: "Blue [490]", val: 2, saturation: saturationOptions[7] },
  { title: "B3", lbl: "Green [560]", val: 3, saturation: saturationOptions[7] },
  { title: "B4", lbl: "Red [665]", val: 4, saturation: saturationOptions[7] },
  {
    title: "B5",
    lbl: "Red-Edge [705]",
    val: 5,
    saturation: saturationOptions[11],
  },
  {
    title: "B6",
    lbl: "Red-Edge [740]",
    val: 6,
    saturation: saturationOptions[11],
  },
  {
    title: "B7",
    lbl: "Red-Edge [783]",
    val: 7,
    saturation: saturationOptions[11],
  },
  { title: "B8", lbl: "NIR [842]", val: 8, saturation: saturationOptions[11] },
  { title: "B8A", lbl: "NIR [865]", val: 9, saturation: saturationOptions[11] },
  {
    title: "B9",
    lbl: "SWIR [945]",
    val: 10,
    saturation: saturationOptions[11],
  },
  {
    title: "B11",
    lbl: "SWIR [1610]",
    val: 11,
    saturation: saturationOptions[5],
  },
  {
    title: "B12",
    lbl: "SWIR [2190]",
    val: 12,
    saturation: saturationOptions[5],
  },
];

const awifsBandOptions = [
  { lbl: "Green", val: 1 },
  { lbl: "Red", val: 2 },
  { lbl: "NIR", val: 3 },
  { lbl: "SWIR", val: 4 },
];

export const layers = {
  cities_town: {
    id: "cities_town",
    displayName: "Cities/Towns",
    isShow: true,
    type: "imageWMS",
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/geoserver/vedas/wms",
      layerParams: {
        LAYERS: "vedas:INDIA_CITYTOWN",
        VERSION: version,
      },
      format: "png",
    },
    layer: "",
    zIndex: 0,
    baseIndex: 150,
  },
  village_boundary: {
    id: "village_boundary",
    displayName: "Village Boundary",
    isShow: true,
    type: "imageWMS",
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/geoserver/vedas81/wms",
      layerParams: {
        LAYERS: "vedas81:gujarat_village_boundary",
        VERSION: version,
      },
      format: "png",
    },
    layer: "",
    zIndex: 0,
    baseIndex: 150,
  },
  taluka_boundary: {
    id: "taluka_boundary",
    displayName: "Taluka Boundary",
    isShow: true,
    type: "imageWMS",
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/geoserver/vedas/wms",
      layerParams: {
        LAYERS: "vedas:INDIA_TALUK_BOUNDARY",
        VERSION: version,
      },
      format: "png",
    },
    layer: "",
    zIndex: 0,
    baseIndex: 150,
  },
  district_boundary: {
    displayName: "District Boundary",
    id: "district_boundary",
    isShow: true,
    type: "imageWMS",
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/geoserver/vedas/wms",
      layerParams: {
        LAYERS: "vedas:INDIA_DISTRICT_BOUNDARY",
        VERSION: version,
      },
      format: "png",
    },
    layer: "",
    zIndex: 0,
    baseIndex: 150,
  },
  indian_state_boundary: {
    displayName: "India State Boundary",
    id: "indian_state_boundary",
    isShow: true,
    type: "imageWMS",
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/drought_monitoring_wms/wms",
      layerParams: {
        LAYERS: "cite:india_state",
        VERSION: version,
      },
      format: "png",
    },
    layer: "",
    zIndex: 0,
    baseIndex: 150,
  },
  base_map_map_my_india_hybrid: {
    displayName: "Base Map (MapMyIndia)",
    id: "base_map_map_my_india_hybrid",
    isShow: true,
    type: "osm",
    layerFactoryParams: {
      urlTemplate:
      "https://mt{0-5}.mapmyindia.com/advancedmaps/v1/nwsgvbqbbw5ejwj112vvisgoggiq4ov3/base_hybrid/{z}/{x}/{y}.png",

      transiotion: 0,
      layerParams: {
        LAYERS: "",
        VERSION: version,
      },
      format: "png",
    },
    layer: "",
    zIndex: 0,
    baseIndex: 150,
  },

  base_map_map_my_india_hybrid_label: {
    displayName: "Base Map (MapMyIndia-Label)",
    id: "base_map_map_my_india_hybrid_label",
    isShow: true,
    type: "osm",
    layerFactoryParams: {
      urlTemplate:
      "https://mt{0-5}.mapmyindia.com/advancedmaps/v1/nwsgvbqbbw5ejwj112vvisgoggiq4ov3/hybrid_label/{z}/{x}/{y}.png",

      transiotion: 0,
      layerParams: {
        LAYERS: "",
        VERSION: version,
      },
      format: "png",
    },
    layer: "",
    zIndex: 0,
    baseIndex: 150,
  },

  countries: {
    displayName: "Countries",
    id: "countries",
    isShow: true,
    type: "imageWMS",
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/geoserver/vedas/wms",
      layerParams: {
        LAYERS: "vedas:country",
        VERSION: version,
      },
      format: "png",
    },
    layer: "",
    zIndex: 0,
    baseIndex: 150,
  },
  national_highway: {
    displayName: "National Highway",
    id: "national_highway",
    isShow: true,
    type: "imageWMS",
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/geoserver/vedas/wms",
      layerParams: {
        LAYERS: "vedas:INDIA_NHROADS",
        VERSION: version,
      },
      format: "png",
    },
    layer: "",
    zIndex: 0,
    baseIndex: 150,
  },
  railway_tracks: {
    displayName: "Railway Tracks",
    id: "railway_tracks",
    isShow: true,
    type: "imageWMS",
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/geoserver/vedas/wms",
      layerParams: {
        LAYERS: "vedas:INDIA_RLWY_TRACKS",
        VERSION: version,
      },
      format: "png",
    },
    layer: "",
    zIndex: 0,
    baseIndex: 150,
  },
  railway_stations: {
    displayName: "Railway Stations",
    id: "railway_stations",
    isShow: true,
    type: "imageWMS",
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/geoserver/vedas/wms",
      layerParams: {
        LAYERS: "vedas:INDIA_RLWY_STATIONS",
        VERSION: version,
      },
      format: "png",
    },
    layer: "",
    zIndex: 0,
    baseIndex: 150,
  },
  airports: {
    displayName: "Airports",
    id: "airports",
    isShow: true,
    type: "imageWMS",
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/geoserver/vedas/wms",
      layerParams: {
        LAYERS: "vedas:INDIA_AIRPORTS",
        VERSION: version,
      },
      format: "png",
    },
    layer: "",
    zIndex: 0,
    baseIndex: 150,
  },
  administrative_boundary_bhuvan: {
    displayName: "Administrative Boundary from Bhuvan",
    id: "administrative_boundary_bhuvan",
    isShow: true,
    type: "tile",
    layerFactoryParams: {
      urlTemplate: "https://bhuvan-vec1.nrsc.gov.in/bhuvan/gwc/service/wms",
      layerParams: {
        LAYERS: "basemap:admin_group",
        VERSION: version,
      },
      format: "png",
    },
    layer: "",
    zIndex: 0,
    baseIndex: 150,
  },
  administrative_boundary_soi: {
    displayName: "Administrative Boundary SOI",
    id: "administrative_boundary_soi",
    isShow: true,
    type: "WMTS",
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/geoserver/admin_gwc/service/wmts",
      layerParams: {
        LAYERS: "vedas_gis:india_admin_boundary_new_grp",
        VERSION: version,
        tileSize: [256, 256],
        extent: [-180.0, -90.0, 180.0, 90.0],
        origin: [-180.0, 90.0],
        resolutions: resolutions,
        matrixIds: matrixIds,
        format: "image/png",
        units: "degrees",
        axisOrientation: "neu",
      },
    },
    layer: "",
    zIndex: 0,
    baseIndex: 150,
    is_admin_boundary: true,
  },
  high_resolution_imagery_bhuvan: {
    displayName: "High Resolution Imagery (Bhuvan)",
    id: "high_resolution_imagery_bhuvan",
    isShow: true,
    type: "tile",
    layerFactoryParams: {
      urlTemplate: "https://tile1.nrsc.gov.in/tilecache/tilecache.py?",
      layerParams: {
        LAYERS: "bhuvan_imagery",
        VERSION: version,
      },
      format: "jpeg",
    },
    layer: "",
    zIndex: 0,
  },
  insat_visible_1km: {
    id: "insat_visible_1km",
    displayName: "INSAT - Visible [1km]",
    isShow: true,
    type: "legacy",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url) {
          return getInsatAvlDates(url);
        },
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertorInsat,
    dateURL:
    "https://mosdac.gov.in/live/backend/satellite_data_initial.php?file_prefix=3DIMG&file_extension=L1B_STD_V01R00&param=startlayer&timezone=local&timezone_formal=-19800",

    layerFactoryParams: {
      projection: insatProjection,
      urlTemplate:
      "https://mosdac.gov.in/live_data/wms/live3DL1BSTD1km/products/Insat3d/3D_IMG/{{{year}}}/{{{curDate}}}/3DIMG_{{{selectedDateVal}}}_L1B_STD_V01R00.h5",
      layerParams: {
        LAYERS: "IMG_VIS",
        FORMAT: "image/png",
        VERSION: "1.3.0",
        STYLES: "boxfill/greyscale",
        COLORSCALERANGE: "0,407",
        BELOWMINCLOR: "extend",
        ABOVEMAXCOLOR: "extend",
        CRS: insatProjection,
      },
    },
    layer: "",
    zIndex: 0,
  },
  insat_thermal_4km: {
    id: "insat_thermal_4km",
    displayName: "INSAT - Thermal [4km]",
    isShow: true,
    type: "insat",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url) {
          return getInsatAvlDates(url);
        },
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertorInsat,
    dateURL:
    "https://mosdac.gov.in/live/backend/satellite_data_initial.php?file_prefix=3DIMG&file_extension=L1B_STD_V01R00&param=startlayer&timezone=local&timezone_formal=-19800",
    layerFactoryParams: {
      urlTemplate:
      "https://mosdac.gov.in/live_data/wms/live3DL1BSTD4km/products/Insat3d/3D_IMG/{{{year}}}/{{{curDate}}}/3DIMG_{{{selectedDateVal}}}_L1B_STD_V01R00.h5",
      layerParams: {
        LAYERS: "IMG_TIR1",
        FORMAT: "image/png",
        VERSION: "1.3.0",
        STYLES: "boxfill/greyscale",
        COLORSCALERANGE: "260,921",
        BELOWMINCLOR: "extend",
        ABOVEMAXCOLOR: "extend",
        CRS: insatProjection,
      },
    },
    layer: "",
    zIndex: 0,
  },
  modis_tcc_250m: {
    id: "modis_tcc_250m",
    displayName: "MODIS TCC [250m]",
    isShow: true,
    type: "XYZ",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "calendar",
        // options: [],
        selectedOption: {
          // val: new Date().toISOString().slice(0, 10),
          // lbl: new Date().toISOString().slice(0, 10),
          val: new Date(Date.now() - 86400000).toISOString().slice(0, 10),
          lbl: new Date(Date.now() - 86400000).toISOString().slice(0, 10),
        },
      },
    },
    dateURL:
    "https://mosdac.gov.in/live/backend/satellite_data_initial.php?file_prefix=3DIMG&file_extension=L1B_STD_V01R00&param=startlayer&timezone=local&timezone_formal=-19800",

    layerFactoryParams: {
      urlTemplate:
      "https://gibs-{a-c}.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Terra_CorrectedReflectance_TrueColor/default/{{{toDate}}}/GoogleMapsCompatible_Level9/{z}/{y}/{x}.jpg",
    },

    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    layer: "",
    zIndex: 0,
  },
  awifs_fcc: {
    id: "awifs_fcc",
    displayName: "AWiFS FCC [56m]",
    isShow: true,
    type: "legacy",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getLegacyAvlDates(url, datasetId, splitDateAt);
        },
      },
      compositeDateOptions: {
        displayName: "Composite",
        type: "choice",
        options: compositeDateOptions,
        selectedOption: compositeDateOptions[2],
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    dateURL: "https://vedas.sac.gov.in/vone_t2/list_data_ids?dataset_ids=",
    datasetId: "FCC_AWIFS_IND",
    splitDateAt: 3,
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/vone_t2/vone_wms",
      projection: projection,
      layerParams: {
        display_mode: "rgb",
        expr_r:
        "{FCC_AWIFS_IND$agg_range$_3$0$7${{{fromDate}}}${{{toDate}}}$lat,1,0}",
        expr_g:
        "{FCC_AWIFS_IND$agg_range$_3$0$7${{{fromDate}}}${{{toDate}}}$lat,2,0}",
        expr_b:
        "{FCC_AWIFS_IND$agg_range$_3$0$7${{{fromDate}}}${{{toDate}}}$lat,3,0}",
        stretch_ip_r: "20,160",
        stretch_op_r: "50,230",
        stretch_ip_g: "20,140",
        stretch_op_g: "60,230",
        stretch_ip_b: "20,160",
        stretch_op_b: "50,230",
        no_data_val: "0",
        display_nodata_arr: "0,0,0",
        display_min_arr: "1,1,1",
        display_max_arr: "255,255,255",
      },
    },
    layer: "",
    zIndex: 0,
  },
  awifs_ncc: {
    id: "awifs_ncc",
    displayName: "AWiFS NCC [56m]",
    isShow: true,
    type: "legacy",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getLegacyAvlDates(url, datasetId, splitDateAt);
        },
      },
      compositeDateOptions: {
        displayName: "Composite",
        type: "choice",
        options: compositeDateOptions,
        selectedOption: compositeDateOptions[2],
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    dateURL: "https://vedas.sac.gov.in/vone_t0/list_data_ids?dataset_ids=",
    datasetId: "AWIFS_NCC",
    splitDateAt: 3,

    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/vone_t0/vone_wms",
      projection: projection,
      layerParams: {
        display_mode: "rgb",
        expr_r:
        "{AWIFS_NCC$agg_range$_3$0$7${{{fromDate}}}${{{toDate}}}$lat,1,0}",
        expr_g:
        "{AWIFS_NCC$agg_range$_3$0$7${{{fromDate}}}${{{toDate}}}$lat,2,0}",
        expr_b:
        "{AWIFS_NCC$agg_range$_3$0$7${{{fromDate}}}${{{toDate}}}$lat,3,0}",
        stretch_ip_r: "10,60",
        stretch_op_r: "20,250",
        stretch_ip_g: "10,60",
        stretch_op_g: "20,250",
        stretch_ip_b: "10,60",
        stretch_op_b: "10,250",
        no_data_val: "0",
        display_nodata_arr: "0,0,0",
        display_min_arr: "1,1,1",
        display_max_arr: "255,255,255",
      },
    },
    layer: "",
    zIndex: 0,
  },
  // sentinel_2_fcc_10m: {
  //   id: "sentinel_2_fcc_10m",
  //   displayName: "Sentinel-2 FCC [10m]",
  //   isShow: true,
  //   type: "legacy",
  //   parameters: {
  //     toDate: {
  //       displayName: "Date",
  //       type: "choice",
  //       options: [],
  //       selectedOption: "",
  //       optionGenerator: async function (url, datasetId, splitDateAt) {
  //         return getLegacyAvlDates(url, datasetId, splitDateAt);
  //       },
  //     },
  //     compositeDateOptions: {
  //       displayName: "Composite",
  //       type: "choice",
  //       options: compositeDateOptions,
  //       selectedOption: compositeDateOptions[2],
  //     },
  //   },
  //   uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
  //   dateURL: "https://vedas.sac.gov.in/vone_t2/list_data_ids?dataset_ids=",
  //   datasetId: "S2_FCC",
  //   splitDateAt: 2,
  //   layerFactoryParams: {
  //     urlTemplate: "https://vedas.sac.gov.in/vone_t2/vone_wms",
  //     projection: projection,
  //     layerParams: {
  //       display_mode: "rgb",
  //       expr_r:
  //         "{S2_FCC$agg_range$_2$0$7${{{fromDate}}}${{{toDate}}}$lat,1,255}",
  //       expr_g:
  //         "{S2_FCC$agg_range$_2$0$7${{{fromDate}}}${{{toDate}}}$lat,2,255}",
  //       expr_b:
  //         "{S2_FCC$agg_range$_2$0$7${{{fromDate}}}${{{toDate}}}$lat,3,255}",
  //       stretch_ip_r: "20,90",
  //       stretch_op_r: "20,250",
  //       stretch_ip_g: "20,60",
  //       stretch_op_g: "20,250",
  //       stretch_ip_b: "10,50",
  //       stretch_op_b: "10,250",
  //       no_data_val: "0",
  //       display_nodata_arr: "255,255,255",
  //       display_min_arr: "0,0,0",
  //       display_max_arr: "254,254,254",
  //     },
  //   },
  //   layer: "",
  //   zIndex: 0,
  // },
  sentinel_1_10m: {
    id: "sentinel_1_10m",
    displayName: "Sentinel-1 [10m]",
    isShow: true,
    type: "legacy",
    datasetId: "VV_SENT1_IND_INT",
    dateURL: "https://vedas.sac.gov.in/vone_t2/list_data_ids?dataset_ids=",
    splitDateAt: 4,
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getLegacyAvlDates(url, datasetId, splitDateAt);
        },
      },
      compositeDateOptions: {
        displayName: "Composite",
        type: "choice",
        options: compositeDateOptions,
        selectedOption: compositeDateOptions[2],
      },
      pol: {
        displayName: "Pol.",
        type: "choice",
        options: sentinel1DataOptions,
        selectedOption: sentinel1DataOptions[0],
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/vone_t2/vone_wms",
      layerParams: {
        VV: {
          display_mode: "single",
          expr: "{VV_SENT1_IND_INT$agg_range$_4$0$7${{{fromDate}}}${{{toDate}}}$lat,1,0}",
          val_arr: "0,63,245,248,250",
          color_arr: "0x00000000,0x000000FF,0xFFFFFFFF,0xFFFFFFFF,0x00000000",
        },
        VH: {
          display_mode: "single",
          expr: "{VH_SENT1_IND_INT$agg_range$_4$0$7${{{fromDate}}}${{{toDate}}}$lat,1,0}",
          val_arr: "0,63,245,248,250",
          color_arr: "0x00000000,0x000000FF,0xFFFFFFFF,0xFFFFFFFF,0x00000000",
        },
        RGB: {
          display_mode: "rgb",
          expr_r:
          "{VV_SENT1_IND_INT$agg_range$_4$0$7${{{fromDate}}}${{{toDate}}}$lat,1,250}",
          expr_g:
          "{VH_SENT1_IND_INT$agg_range$_4$0$7${{{fromDate}}}${{{toDate}}}$lat,1,250}",
          expr_b:
          "{VV_SENT1_IND_INT$agg_range$_4$0$7${{{fromDate}}}${{{toDate}}}$lat,1,250}- {VH_SENT1_IND_INT$agg_range$_4$0$7${{{fromDate}}}${{{toDate}}}$lat,1,250}",
          display_nodata_arr: "250,250,250",
          display_min_arr: "87,63,0",
          display_max_arr: "250,250,140",
        },
      },
    },
    layer: "",
    zIndex: 0,
  },
  sentinel: {
    id: "sentinel",
    displayName: "Sentinel",
    isShow: true,
    type: "tile",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getAvlDates(url, datasetId, splitDateAt);
        },
      },
      compositeDateOptions: {
        displayName: "Composite",
        type: "choice",
        options: compositeDateOptions,
        selectedOption: compositeDateOptions[2],
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    dateURL:
    "https://vedas.sac.gov.in/ridam_server2/meta/dataset_timestamp?prefix=",
    datasetId: "T5S1P6",
    splitDateAt: 0,
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/ridam_server2/wms",
      projection: "EPSG:4326",
      layerParams: {
        name: "RIDAM_AER",
        layers: "T0S0M0",
        PROJECTION: "EPSG:4326",
        ARGS: "merge_method:mean;dataset_id:T5S1P6;from_time:{{{fromDate}}};to_time:{{{toDate}}};indexes:1",
        styles:
        "[0:CDFADBFF:700:F6FDC3FF:1400:597E52FF:2100:416D19FF:2800:FBA834FF:3500:FF0000FF:4200:561C24FF]",
        LEGEND_OPTIONS: "columnHeight:400;height:100",
      },
    },
    layer: "",
    zIndex: 0,
  },
  sentinel_rgb: {
    id: "sentinel_rgb",
    displayName: "Sentinel RGB",
    isShow: true,
    type: "tile",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getAvlDates(url, datasetId, splitDateAt);
        },
      },
      compositeDateOptions: {
        displayName: "Composite",
        type: "choice",
        options: compositeDateOptions,
        selectedOption: compositeDateOptions[2],
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    dateURL:
    "https://vedas.sac.gov.in/ridam_server2/meta/dataset_timestamp?prefix=",
    datasetId: "T0S1P0",
    splitDateAt: 2,
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/ridam_server2/wms",
      projection: "EPSG:4326",
      layerParams: {
        name: "RIDAM_RGB",
        layers: "T0S0M1",
        PROJECTION: projection,
        ARGS: "r_dataset_id:T0S1P0;g_dataset_id:T0S1P0;b_dataset_id:T0S1P0;r_from_time:20210110;r_to_time:20210120;g_from_time:20210110;g_to_time:20210120;b_from_time:20210110;b_to_time:20210120;r_max:8000;g_max:8000;b_max:8000",
        LAYERS: "RIDAM_RGB",
        STYLES: "RIDAM_RGB",
      },
    },
    layer: "",
    zIndex: 0,
  },
  sentinel_2_fcc_ridam: {
    id: "sentinel_2_fcc_ridam",
    displayName: "Sentinel-2 FCC",
    isShow: true,
    type: "tile",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getAvlDates(url, datasetId, splitDateAt);
        },
      },
      compositeDateOptions: {
        displayName: "Composite",
        type: "choice",
        options: compositeDateOptions,
        selectedOption: compositeDateOptions[2],
      },
      rIndex: {
        displayName: "R   ",
        type: "choice",
        options: bandOptions,
        selectedOption: bandOptions[7],
        dependentKey: ["rMax"],
        displayNameStyle: {
          color: "red",
        },
        style: {
          width: "90px",
          fontSize: "11px",
        },
      },
      gIndex: {
        displayName: "G",
        type: "choice",
        options: bandOptions,
        selectedOption: bandOptions[3],
        dependentKey: ["gMax"],
        displayNameStyle: {
          color: "green",
        },
        style: {
          width: "90px",
          fontSize: "11px",
        },
      },
      bIndex: {
        displayName: "B",
        type: "choice",
        options: bandOptions,
        selectedOption: bandOptions[2],
        dependentKey: ["bMax"],
        displayNameStyle: {
          color: "blue",
        },
        style: {
          width: "90px",
          fontSize: "11px",
        },
      },
      rMax: {
        displayName: "Rmax",
        type: "choice",
        options: saturationOptions,
        selectedOption: saturationOptions[11],
        displayNameStyle: {
          color: "red",
        },
      },
      gMax: {
        displayName: "Gmax",
        type: "choice",
        options: saturationOptions,
        selectedOption: saturationOptions[7],
        displayNameStyle: {
          color: "green",
        },
      },
      bMax: {
        displayName: "Bmax",
        type: "choice",
        options: saturationOptions,
        selectedOption: saturationOptions[7],
        displayNameStyle: {
          color: "blue",
        },
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    dateURL:
    "https://vedas.sac.gov.in/ridam_server2/meta/dataset_timestamp?prefix=",
    datasetId: "T0S1P0",
    splitDateAt: 0,
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/ridam_server2/wms",
      projection: "EPSG:4326",
      layerParams: {
        name: "RIDAM_RGB",
        layers: "T0S0M1",
        PROJECTION: projection,
        ARGS: "r_dataset_id:T0S1P0;g_dataset_id:T0S1P0;b_dataset_id:T0S1P0;r_from_time:{{{fromDate}}};r_to_time:{{{toDate}}};g_from_time:{{{fromDate}}};g_to_time:{{{toDate}}};b_from_time:{{{fromDate}}};b_to_time:{{{toDate}}};r_index:{{{rIndex}}};g_index:{{{gIndex}}};b_index:{{{bIndex}}};r_max:{{{rMax}}};g_max:{{{gMax}}};b_max:{{{bMax}}}",
        LAYERS: "RIDAM_RGB",
        STYLES: "RIDAM_RGB",
      },
    },
    layer: "",
    zIndex: 0,
  },
  sentinel_2_tcc_ridam: {
    id: "sentinel_2_tcc_ridam",
    displayName: "Sentinel-2 TCC",
    isShow: true,
    type: "tile",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getAvlDates(url, datasetId, splitDateAt);
        },
      },
      compositeDateOptions: {
        displayName: "Composite",
        type: "choice",
        options: compositeDateOptions,
        selectedOption: compositeDateOptions[2],
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    dateURL:
    "https://vedas.sac.gov.in/ridam_server2/meta/dataset_timestamp?prefix=",
    datasetId: "T0S1P0",
    splitDateAt: 2,
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/ridam_server2/wms",
      projection: "EPSG:4326",
      layerParams: {
        name: "RIDAM_RGB",
        layers: "T0S0M1",
        PROJECTION: projection,
        ARGS: "r_dataset_id:T0S1P0;g_dataset_id:T0S1P0;b_dataset_id:T0S1P0;r_from_time:{{{fromDate}}};r_to_time:{{{toDate}}};g_from_time:{{{fromDate}}};g_to_time:{{{toDate}}};b_from_time:{{{fromDate}}};b_to_time:{{{toDate}}};r_index:4;g_index:3;b_index:2;r_max:4000;g_max:4000;b_max:4000",
        LAYERS: "RIDAM_RGB",
        STYLES: "RIDAM_RGB",
      },
    },
    layer: "",
    zIndex: 0,
  },

  awifs_fcc_ridam: {
    id: "awifs_fcc_ridam",
    displayName: "AWiFS FCC [56m]",
    isShow: true,
    type: "tile",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getAvlDates(url, datasetId, splitDateAt);
        },
      },
      compositeDateOptions: {
        displayName: "Composite",
        type: "choice",
        options: compositeDateOptions,
        selectedOption: compositeDateOptions[2],
      },
      rIndex: {
        displayName: "R   ",
        type: "choice",
        options: awifsBandOptions,
        selectedOption: awifsBandOptions[2],
        // dependentKey: ["rMax"],
        displayNameStyle: {
          color: "red",
        },
        style: {
          width: "87px",
          fontSize: "11px",
        },
      },
      gIndex: {
        displayName: "G",
        type: "choice",
        options: awifsBandOptions,
        selectedOption: awifsBandOptions[1],
        // dependentKey: ["gMax"],
        displayNameStyle: {
          color: "green",
        },
        style: {
          width: "87px",
          fontSize: "11px",
        },
      },
      bIndex: {
        displayName: "B",
        type: "choice",
        options: awifsBandOptions,
        selectedOption: awifsBandOptions[0],
        // dependentKey: ["bMax"],
        displayNameStyle: {
          color: "blue",
        },
        style: {
          width: "87px",
          fontSize: "11px",
        },
      },
      rMax: {
        displayName: "Rmax",
        type: "choice",
        options: awifsSaturationOptions,
        selectedOption: awifsSaturationOptions[5],
        displayNameStyle: {
          color: "red",
        },
      },
      gMax: {
        displayName: "Gmax",
        type: "choice",
        options: awifsSaturationOptions,
        selectedOption: awifsSaturationOptions[5],
        displayNameStyle: {
          color: "green",
        },
      },
      bMax: {
        displayName: "Bmax",
        type: "choice",
        options: awifsSaturationOptions,
        selectedOption: awifsSaturationOptions[5],
        displayNameStyle: {
          color: "blue",
        },
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    dateURL:
    "https://vedas.sac.gov.in/ridam_server2/meta/dataset_timestamp?prefix=",
    datasetId: "T0S1P1",
    splitDateAt: 0,
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/ridam_server2/wms",
      projection: "EPSG:4326",
      layerParams: {
        name: "RIDAM_RGB",
        layers: "T0S0M1",
        PROJECTION: projection,
        ARGS: "r_dataset_id:T0S1P1;g_dataset_id:T0S1P1;b_dataset_id:T0S1P1;r_from_time:{{{fromDate}}};r_to_time:{{{toDate}}};g_from_time:{{{fromDate}}};g_to_time:{{{toDate}}};b_from_time:{{{fromDate}}};b_to_time:{{{toDate}}};r_index:{{{rIndex}}};g_index:{{{gIndex}}};b_index:{{{bIndex}}};r_max:{{{rMax}}};g_max:{{{gMax}}};b_max:{{{bMax}}};r_min:0.001;g_min:0.001;b_min:0.001",
        LAYERS: "RIDAM_RGB",
        STYLES: "RIDAM_RGB",
      },
    },
    layer: "",
    zIndex: 0,
  },

  ndvi: {
    id: "ndvi",
    displayName: "Sentinel-2 NDVI",
    isShow: true,
    type: "tile",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getAvlDates(url, datasetId, splitDateAt);
        },
      },
      compositeDateOptions: {
        displayName: "Composite",
        type: "choice",
        options: compositeDateOptions,
        selectedOption: compositeDateOptions[2],
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    dateURL:
    "https://vedas.sac.gov.in/ridam_server2/meta/dataset_timestamp?prefix=",
    datasetId: "T0S1P0",
    splitDateAt: 2,
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/ridam_server2/wms",
      projection: "EPSG:4326",
      layerParams: {
        name: "RDSGrdient",
        layers: "T1S1M1",
        PROJECTION: "EPSG:4326",
        ARGS: "from_time:{{{fromDate}}};to_time:{{{toDate}}}",
        styles:
        "[0:f0ebecFF:10:d8c4b6FF:20:ab8a75FF:30:917732FF:40:70ab06FF:50:459200FF:60:267b01FF:70:0a6701FF:80:004800FF:100:001901FF;nodata:FFFFFF00]",
        LEGEND_OPTIONS: "columnHeight:400;height:100",
      },
      layer: "",
      zIndex: 0,
    },
  },

  s2_fdi: {
    id: "s2_fdi",
    displayName: "Sentinel-2 FDI",
    isShow: true,
    type: "tile",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getAvlDates(url, datasetId, splitDateAt);
        },
      },
      minColor: {
        displayName: "Min Color",
        type: "color",
        // options: colorOptions,
        selectedOption: { val: "#cccccc" },
      },
      maxColor: {
        displayName: "Max Color",
        type: "color",
        // options: colorOptions,
        selectedOption: { val: "#ff0000" },
      },
      min: {
        displayName: "Min",
        type: "number",
        minVal: -10,
        maxVal: 10,
        boundaryStep: -1,
        selectedOption: { lbl: -1, val: -1 },
        step: 0.05,
        multiplyBy: 100,
        style: {
          borderRadius: "10px",
          borderColor: "rgba(51, 51, 51, .18)",
        },
      },
      max: {
        displayName: "Max",
        boundaryStep: 1,
        type: "number",
        minVal: -10,
        maxVal: 1,
        step: 0.05,
        multiplyBy: 100,
        selectedOption: { lbl: 3, val: 3 },
        style: {
          borderRadius: "10px",
          borderColor: "rgba(51, 51, 51, .18)",
        },
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    dateURL:
    "https://vedas.sac.gov.in/ridam_server2/meta/dataset_timestamp?prefix=",
    datasetId: "T0S1P0",
    splitDateAt: 2,
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/ridam_server2/wms",
      projection: "EPSG:4326",
      layerParams: {
        name: "RDSGrdient",
        layers: "T3S1M1",
        PROJECTION: "EPSG:4326",
        ARGS: "merge_method:max;from_time:{{{toDate}}};to_time:{{{toDate}}}",
        styles: "[-9000:{{{minColor}}}:{{{min}}}:{{{minColor}}}:{{{max}}}:{{{maxColor}}}:9000:{{{maxColor}}};nodata:FFFFFF00]",
        LEGEND_OPTIONS: "columnHeight:400;height:100",
      },
      layer: "",
      zIndex: 0,
    },
  },

  ndvi_5d: {
    id: "ndvi_5d",
    displayName: "S2 NDVI (5-day comp.)",
    isShow: true,
    type: "tile",
    parameters: {
      fromDate: {
        displayName: "From",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getAvlDates(url, datasetId, splitDateAt);
        },
      },
      toDate: {
        displayName: "To",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getAvlDates(url, datasetId, splitDateAt);
        },
      },
      operation: {
        displayName: "Op.",
        type: "choice",
        options: operationOptions,
        selectedOption: operationOptions[0],
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    dateURL:
    "https://vedas.sac.gov.in/ridam_server3/meta/dataset_timestamp?prefix=",
    datasetId: "T3S1P1",
    splitDateAt: 2,
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/ridam_server3/wms",
      projection: "EPSG:4326",

      layerParams: {
        name: "RDSGrdient",
        layers: "T0S0M0",
        PROJECTION: "EPSG:4326",
        ARGS: "merge_method:{{{operation}}};dataset_id:T3S1P1;from_time:{{{fromDate}}};to_time:{{{toDate}}};indexes:1",
        styles:
        "[0:f0ebecFF:25:d8c4b6FF:50:ab8a75FF:75:917732FF:100:70ab06FF:125:459200FF:150:267b01FF:175:0a6701FF:200:004800FF:251:001901FF;nodata:FFFFFF00]",
        LEGEND_OPTIONS: "columnHeight:400;height:100",
      },
      layer: "",
      zIndex: 0,
    },
  },

  sentinel_2_normalized_difference: {
    id: "sentinel_2_normalized_difference",
    displayName: "Sentinel-2 Normalized Diff. (A-B)/(A+B)",
    isShow: true,
    type: "tile",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getAvlDates(url, datasetId, splitDateAt);
        },
      },
      compositeDateOptions: {
        displayName: "Composite",
        type: "choice",
        options: compositeDateOptions,
        selectedOption: compositeDateOptions[2],
      },
      nIndex: {
        displayName: "A",
        type: "choice",
        options: bandOptions,
        selectedOption: bandOptions[7],
        // displayNameStyle: {
        //   color: "red",
        // },
        style: {
          width: "87px",
          fontSize: "11px",
        },
      },
      dIndex: {
        displayName: "B",
        type: "choice",
        options: bandOptions,
        selectedOption: bandOptions[3],
        // dependentKey: ["gMax"],
        // displayNameStyle: {
        //   color: "green",
        // },
        style: {
          width: "87px",
          fontSize: "11px",
        },
      },
      operation: {
        displayName: "Op.",
        type: "choice",
        options: operationOptions,
        selectedOption: operationOptions[0],
      },
      minColor: {
        displayName: "Min Color",
        type: "color",
        // options: colorOptions,
        selectedOption: { val: "#8cda8b" },
      },
      maxColor: {
        displayName: "Max Color",
        type: "color",
        // options: colorOptions,
        selectedOption: { val: "#067f08" },
      },
      min: {
        displayName: "Min",
        type: "number",
        minVal: -1,
        maxVal: 1,
        boundaryStep: -1,
        selectedOption: { lbl: 0, val: 0 },
        step: 0.05,
        multiplyBy: -100,
        style: {
          borderRadius: "10px",
          borderColor: "rgba(51, 51, 51, .18)",
        },
      },
      max: {
        displayName: "Max",
        boundaryStep: 1,
        type: "number",
        minVal: -1,
        maxVal: 1,
        step: 0.05,
        multiplyBy: 100,
        selectedOption: { lbl: 1, val: 1 },
        style: {
          borderRadius: "10px",
          borderColor: "rgba(51, 51, 51, .18)",
        },
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    dateURL:
    "https://vedas.sac.gov.in/ridam_server2/meta/dataset_timestamp?prefix=",
    datasetId: "T0S1P0",
    splitDateAt: 0,
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/ridam_server2/wms",
      projection: "EPSG:4326",
      layerParams: {
        name: "RDSGrdient",
        layers: "T0S0M3",
        PROJECTION: projection,
        ARGS: "dataset_id:T0S1P0;from_time:{{{fromDate}}};to_time:{{{toDate}}};n_index:{{{nIndex}}};d_index:{{{dIndex}}};operation:{{{operation}}}",
        // styles: "[-100:d2efbcFF:100:001901FF;nodata:FFFFFF00]",
        styles:
        "[{{{minColorB}}}:FFFFFF00:{{{min}}}:{{{minColor}}}:{{{max}}}:{{{maxColor}}}:{{{maxColorB}}}:FFFFFF00;nodata:FFFFFF00]",

        LEGEND_OPTIONS: "columnHeight:400;height:100",
        LAYERS: "RIDAM_RGB",
        STYLES: "RIDAM_RGB",
      },
    },
    layer: "",
    zIndex: 0,
  },
  sentinel_2_ndsi: {
    id: "sentinel_2_ndsi",
    displayName: "Sentinel-2 NDSI",
    isShow: true,
    type: "tile",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getAvlDates(url, datasetId, splitDateAt);
        },
      },
      compositeDateOptions: {
        displayName: "Composite",
        type: "choice",
        options: compositeDateOptions,
        selectedOption: compositeDateOptions[2],
      },
      // nIndex: {
      //   displayName: "A",
      //   type: "choice",
      //   options: bandOptions,
      //   selectedOption: bandOptions[2],
      //   // displayNameStyle: {
      //   //   color: "red",
      //   // },
      //   style: {
      //     width: "87px",
      //     fontSize: "11px",
      //   },
      // },
      // dIndex: {
      //   displayName: "B",
      //   type: "choice",
      //   options: bandOptions,
      //   selectedOption: bandOptions[10],
      //   // dependentKey: ["gMax"],
      //   // displayNameStyle: {
      //   //   color: "green",
      //   // },
      //   style: {
      //     width: "87px",
      //     fontSize: "11px",
      //   },
      // },
      // operation: {
      //   displayName: "Op.",
      //   type: "choice",
      //   options: operationOptions,
      //   selectedOption: operationOptions[0],
      // },
      minColor: {
        displayName: "Min Color",
        type: "color",
        // options: colorOptions,
        selectedOption: { val: "#ff0000" },
      },
      maxColor: {
        displayName: "Max Color",
        type: "color",
        // options: colorOptions,
        selectedOption: { val: "#0000ff" },
      },
      min: {
        displayName: "Min",
        type: "number",
        minVal: -1,
        maxVal: 1,
        boundaryStep: -1,
        selectedOption: { lbl: 0.42, val: 0.42 },
        step: 0.05,
        multiplyBy: -100,
        style: {
          borderRadius: "10px",
          borderColor: "rgba(51, 51, 51, .18)",
        },
      },
      max: {
        displayName: "Max",
        boundaryStep: 1,
        type: "number",
        minVal: -1,
        maxVal: 1,
        step: 0.05,
        multiplyBy: 100,
        selectedOption: { lbl: 1, val: 1 },
        style: {
          borderRadius: "10px",
          borderColor: "rgba(51, 51, 51, .18)",
        },
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    dateURL:
    "https://vedas.sac.gov.in/ridam_server2/meta/dataset_timestamp?prefix=",
    datasetId: "T0S1P0",
    splitDateAt: 0,
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/ridam_server2/wms",
      projection: "EPSG:4326",
      layerParams: {
        name: "RDSGrdient",
        layers: "T0S0M3",
        PROJECTION: projection,
        ARGS: "dataset_id:T0S1P0;from_time:{{{fromDate}}};to_time:{{{toDate}}};n_index:3;d_index:11;operation:max",
        // styles: "[-100:d2efbcFF:100:001901FF;nodata:FFFFFF00]",
        styles:
        "[{{{minColorB}}}:FFFFFF00:{{{min}}}:{{{minColor}}}:{{{max}}}:{{{maxColor}}}:{{{maxColorB}}}:FFFFFF00;nodata:FFFFFF00]",

        LEGEND_OPTIONS: "columnHeight:400;height:100",
        LAYERS: "RIDAM_RGB",
        STYLES: "RIDAM_RGB",
      },
    },
    layer: "",
    zIndex: 0,
  },
  awifs_normalized_difference: {
    id: "awifs_normalized_difference",
    displayName: "AWiFS Normalized Diff. (A-B)/(A+B)",
    isShow: true,
    type: "tile",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getAvlDates(url, datasetId, splitDateAt);
        },
      },
      compositeDateOptions: {
        displayName: "Composite",
        type: "choice",
        options: compositeDateOptions,
        selectedOption: compositeDateOptions[2],
      },
      nIndex: {
        displayName: "A",
        type: "choice",
        options: awifsBandOptions,
        selectedOption: awifsBandOptions[2],
        // displayNameStyle: {
        //   color: "red",
        // },
        style: {
          width: "87px",
          fontSize: "11px",
        },
      },
      dIndex: {
        displayName: "B",
        type: "choice",
        options: awifsBandOptions,
        selectedOption: awifsBandOptions[1],
        // dependentKey: ["gMax"],
        // displayNameStyle: {
        //   color: "green",
        // },
        style: {
          width: "87px",
          fontSize: "11px",
        },
      },
      operation: {
        displayName: "Op.",
        type: "choice",
        options: operationOptions,
        selectedOption: operationOptions[0],
      },
      minColor: {
        displayName: "Min Color",
        type: "color",
        // options: colorOptions,
        selectedOption: { val: "#ffffff" },
      },
      maxColor: {
        displayName: "Max Color",
        type: "color",
        // options: colorOptions,
        selectedOption: { val: "#008000" },
      },
      min: {
        displayName: "Min",
        type: "number",
        minVal: -1,
        maxVal: 1,
        boundaryStep: -1,
        selectedOption: { lbl: 0, val: 0 },
        step: 0.05,
        multiplyBy: -100,
        style: {
          borderRadius: "10px",
          borderColor: "rgba(51, 51, 51, .18)",
        },
      },
      max: {
        displayName: "Max",
        boundaryStep: 1,
        type: "number",
        minVal: -1,
        maxVal: 1,
        step: 0.05,
        multiplyBy: 100,
        selectedOption: { lbl: 1, val: 1 },
        style: {
          borderRadius: "10px",
          borderColor: "rgba(51, 51, 51, .18)",
        },
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    dateURL:
    "https://vedas.sac.gov.in/ridam_server2/meta/dataset_timestamp?prefix=",
    datasetId: "T0S1P1",
    splitDateAt: 0,
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/ridam_server2/wms",
      projection: "EPSG:4326",
      layerParams: {
        name: "RDSGrdient",
        layers: "T0S0M3",
        PROJECTION: projection,
        ARGS: "dataset_id:T0S1P1;from_time:{{{fromDate}}};to_time:{{{toDate}}};n_index:{{{nIndex}}};d_index:{{{dIndex}}};operation:{{{operation}}}",
        // styles: "[-100:d2efbcFF:100:001901FF;nodata:FFFFFF00]",
        styles:
        "[{{{minColorB}}}:FFFFFF00:{{{min}}}:{{{minColor}}}:{{{max}}}:{{{maxColor}}}:{{{maxColorB}}}:FFFFFF00;nodata:FFFFFF00]",

        LEGEND_OPTIONS: "columnHeight:400;height:100",
        LAYERS: "RIDAM_RGB",
        STYLES: "RIDAM_RGB",
      },
    },
    layer: "",
    zIndex: 0,
  },
  awifs_ndsi: {
    id: "awifs_ndsi",
    displayName: "AWiFS NDSI",
    isShow: true,
    type: "tile",
    parameters: {
      toDate: {
        displayName: "Date",
        type: "choice",
        options: [],
        selectedOption: "",
        optionGenerator: async function (url, datasetId, splitDateAt) {
          return getAvlDates(url, datasetId, splitDateAt);
        },
      },
      compositeDateOptions: {
        displayName: "Composite",
        type: "choice",
        options: compositeDateOptions,
        selectedOption: compositeDateOptions[2],
      },

      minColor: {
        displayName: "Min Color",
        type: "color",
        // options: colorOptions,
        selectedOption: { val: "#ff0000" },
      },
      maxColor: {
        displayName: "Max Color",
        type: "color",
        // options: colorOptions,
        selectedOption: { val: "#0000ff" },
      },
      min: {
        displayName: "Min",
        type: "number",
        minVal: -1,
        maxVal: 1,
        boundaryStep: -1,
        selectedOption: { lbl: 0.42, val: 0.42 },
        step: 0.05,
        multiplyBy: -100,
        style: {
          borderRadius: "10px",
          borderColor: "rgba(51, 51, 51, .18)",
        },
      },
      max: {
        displayName: "Max",
        boundaryStep: 1,
        type: "number",
        minVal: -1,
        maxVal: 1,
        step: 0.05,
        multiplyBy: 100,
        selectedOption: { lbl: 1, val: 1 },
        style: {
          borderRadius: "10px",
          borderColor: "rgba(51, 51, 51, .18)",
        },
      },
    },
    uiToFactoryParamsConvertor: uiToFactoryParamsConvertor,
    dateURL:
    "https://vedas.sac.gov.in/ridam_server2/meta/dataset_timestamp?prefix=",
    datasetId: "T0S1P1",
    splitDateAt: 0,
    layerFactoryParams: {
      urlTemplate: "https://vedas.sac.gov.in/ridam_server2/wms",
      projection: "EPSG:4326",
      layerParams: {
        name: "RDSGrdient",
        layers: "T0S0M3",
        PROJECTION: projection,
        ARGS: "dataset_id:T0S1P1;from_time:{{{fromDate}}};to_time:{{{toDate}}};n_index:1;d_index:4;operation:max",
        // styles: "[-100:d2efbcFF:100:001901FF;nodata:FFFFFF00]",
        styles:
        "[{{{minColorB}}}:FFFFFF00:{{{min}}}:{{{minColor}}}:{{{max}}}:{{{maxColor}}}:{{{maxColorB}}}:FFFFFF00;nodata:FFFFFF00]",

        LEGEND_OPTIONS: "columnHeight:400;height:100",
        LAYERS: "RIDAM_RGB",
        STYLES: "RIDAM_RGB",
      },
    },
    layer: "",
    zIndex: 0,
  },
};

function deepCopyObj(obj) {
  // Declare object which will store the output
  const result = {};

  // If the object isnt of type object or
  // object is null, undefined, is an Array
  // or a function then no need to iterate
  // over it and simply return it
  if (
    typeof obj !== "object" ||
    typeof obj === undefined ||
    obj === null ||
    Array.isArray(obj) ||
    typeof obj == "function"
  ) {
    return obj;
  }

  // Store the keys of the object
  const keys = Object.keys(obj);

  // Iterate through the keys of the
  // object retrieved above
  for (let key in keys) {
    // Recursively iterate through each of the key.
    result[keys[key]] = deepCopyObj(obj[keys[key]]);
  }
  return result;
}

const createLayerConfigObj = (layer_id) => {
  let new_layer = deepCopyObj(layers[layer_id]);
  return new_layer;
};

export async function getLayerConfig(layer_id) {
  let layerConfigObj = createLayerConfigObj(layer_id);

  if (layerConfigObj.parameters) {
    for (let [param_key, param] of Object.entries(layerConfigObj.parameters)) {
      if (param.optionGenerator) {
        param.options = await param.optionGenerator(
          layerConfigObj.dateURL,
          layerConfigObj.datasetId,
          layerConfigObj.splitDateAt
        );

        param.selectedOption = param.options[0];
      }
    }
  }

  return layerConfigObj;
}

//Fetch dates
export async function getAvlDates(url, datasetId, splitDateAt) {
  let date_url = datasetTimestampUrl + datasetId;
  let res = await getAsyncData(date_url);
  //Get date array from response dictionary
  res = res["result"][datasetId];
  let processedData = await formatDates(res, " ", 0);
  return processedData;
}

export async function getAsyncData(url, isText = false) {
  let response = await fetch(url);

  let res = isText ? await response.text() : await response.json();

  return res;
}

async function getLegacyAvlDates(url, exprId, splitDateAt) {
  let dateURL = url + exprId;
  let res = await getAsyncData(dateURL);
  let data = res[exprId];
  //
  let processedDateArray = await formatDates(data, "_", splitDateAt);

  let uniqueArray = removeDupliactesFromArrayOfObject(processedDateArray);
  let sortdDateArray = await sortDateArray(uniqueArray);

  return sortdDateArray;
}

async function getInsatAvlDates(url) {
  let res = await getAsyncData(url, true);

  let splitFileraw = [];
  let data = [];
  splitFileraw = res.split("*");
  splitFileraw = splitFileraw.filter(function (x) {
    return x.indexOf("3DIMG") >= 0 && x.indexOf("h5") >= 0;
  });
  let splitFilerawLength = splitFileraw.length;
  for (let i = 0; i <= splitFilerawLength - 1; i++) {
    if (i == 0) {
      data[i] = splitFileraw[i].substring(7, 38);
    } else {
      data[i] = splitFileraw[i].substring(24, 55);
    }
  }

  let insatvisOptions = data.map(function (obj) {
    let splitdata = obj.split("_");

    //Date Spliting
    let sdataf = splitdata[1];
    let sdatafinal = sdataf.substring(0, 9);
    let year = sdatafinal.substring(5, 9);
    let month = sdatafinal.substring(2, 5);
    let date1 = sdatafinal.substring(0, 2);

    //Time Spliting
    let stime = splitdata[2];
    let sHrs = stime.substring(0, 2);
    let sMnt = stime.substring(2, 4);
    let myMonthNum = monthToNum[month];
    let dt_str =
      year + "-" + myMonthNum + "-" + date1 + " " + sHrs + ":" + sMnt;

    let dt = new Date(dt_str);
    dt.setHours(dt.getHours() + 5);
    dt.setMinutes(dt.getMinutes() + 30);

    let dtInsat = moment(dt).format("DD-MM-YYYY HH:mm "); //24Hours Time
    return { lbl: dtInsat, val: date1 + month + year + "_" + stime };
  });

  //Remove invalid date from date of array
  let result = insatvisOptions.filter(
    (x) => x.lbl.toLowerCase() != "invalid date"
  );

  let sortdDateArray = await sortStringDateArray(result);
  return sortdDateArray;
}

function uiToFactoryParamsConvertor(params) {
  // declare empty dictionary
  let replaceDictionary = {};

  Object.keys(params).forEach((key) => {
    switch (key) {
      case "compositeDateOptions":
        let from_val = parseInt(params.compositeDateOptions.selectedOption.val);
        replaceDictionary["fromDate"] = getCompositeDate(
          replaceDictionary["toDate"],
          from_val - 1
        );
        break;
      case "min":
        replaceDictionary[key] =
          parseFloat(params.min.selectedOption.val) * 100;
        console.log(
          "Replace dictionary is",
          replaceDictionary,
          parseFloat(params.min.selectedOption.val),
          parseFloat(params.min.selectedOption.val) * 100
        );
        if (params.min.boundaryStep) {
          replaceDictionary["minColorB"] =
            parseFloat(params.min.selectedOption.val) * 100 +
            params.min.boundaryStep;
        }
        break;
      case "max":
        replaceDictionary[key] =
          parseFloat(params.max.selectedOption.val) * 100;
        if (params.max.boundaryStep) {
          replaceDictionary["maxColorB"] =
            parseFloat(params.max.selectedOption.val) * 100 +
            params.max.boundaryStep;
        }
        break;
      case "minColor":
        let splitArr = params.minColor.selectedOption.val.split("#");
        replaceDictionary[key] = splitArr[1] + "ff";
        break;
      case "maxColor":
        let splitArrMax = params.maxColor.selectedOption.val.split("#");
        replaceDictionary[key] = splitArrMax[1] + "ff";
        break;
      default:
        replaceDictionary[key] = params[key].selectedOption.val;
        break;
    }
  });

  return replaceDictionary;
}

function uiToFactoryParamsConvertorInsat(params) {
  let replaceDictionary = {};
  let selectedDateVal = params.toDate.selectedOption.val;
  replaceDictionary["selectedDateVal"] = selectedDateVal;
  replaceDictionary["year"] = selectedDateVal.substring(5, 9);
  replaceDictionary["curDate"] = selectedDateVal.substring(0, 5);

  return replaceDictionary;
}
