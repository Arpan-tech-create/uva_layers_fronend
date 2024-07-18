function getCompositeDate(dateString, toVal) {
  let year = dateString.substring(0, 4);
  let month = dateString.substring(4, 6);
  let day = dateString.substring(6, 8);
  let date = new Date(year, month - 1, day);

  let compositeDateVal1 = date.getTime() - toVal * 86400000;

  let compositeDate = new Date(compositeDateVal1);

  let toYear = String(compositeDate.getFullYear());
  let toMonth = String(compositeDate.getMonth() + 1);
  toMonth = toMonth.length == 1 ? "0" + toMonth : toMonth;
  let toDay = String(compositeDate.getDate());
  toDay = toDay.length == 1 ? "0" + toDay : toDay;

  let compositeDateVal = toYear + toMonth + toDay;

  return compositeDateVal;
}

function removeDupliactesFromArrayOfObject(arr) {
  //Removing duplicate dates from array
  const uniqueArray = Array.from(
    new Set(arr.map((el) => JSON.stringify(el)))
  ).map((el) => JSON.parse(el));
  return uniqueArray;
}

//Sort array in descending order
async function sortDateArray(arr) {
  return arr.sort((a, b) => {
    return parseInt(b.val) - parseInt(a.val);
  });
}

//Sort array in descending order
async function sortStringDateArray(arr) {
  return arr.sort((a, b) => {
    return b.val.localeCompare(a.val);
  });
}

async function formatDates(data, splitOn, dateAtIndex) {
  let processedData = data.map((dtTime) => {
    //Spliting date to get only yyyymmdd format date
    splittedDt = dtTime.split(splitOn);
    //at 0 index date in yyyymmdd and at 1 index time

    let requiredData = splittedDt[parseInt(dateAtIndex)];

    //get Year, month, date from required data
    let year = requiredData.substring(0, 4);
    let month = requiredData.substring(4, 6);
    let dt = requiredData.substring(6, 8);

    requiredData = year + month + dt;
    let label = year + "-" + month + "-" + dt;

    return { lbl: label, val: requiredData };
  });

  let sortedData = await sortDateArray(processedData);
  return sortedData;
}

function replaceParamsPlaceHolders(layerParams, replaceDictionary) {
  let obj = {};
  //Get UI to Factory params
  if (layerParams) {
    let params = layerParams;

    if (replaceDictionary.pol) {
      let selectedPol = replaceDictionary.pol;
      params = layerParams[selectedPol];
    }

    Object.keys(params).forEach((key) => {
      let val = "";
      if (params[key].includes("{{{")) {
        val = replaceUrlAndParamPlaceholders(params[key], replaceDictionary);
      } else {
        val = params[key];
      }
      obj[key] = val;
    });
  }

  return obj;
}

//Function to replace parameters in url with value.
function replaceUrlAndParamPlaceholders(obj, replacements) {
  console.log("Objects and replacements", obj, replacements);
  return obj.replace(/\{\{\{([^}]+)\}\}\}/g, function (match, key) {
    return replacements[key]; // Replace with value from replacements object, or empty string if not found
  });
}

function getURLAndParams(layerConfig) {
  let url = layerConfig.layerFactoryParams.urlTemplate;
  let replaceDictionary = "";

  if (layerConfig.uiToFactoryParamsConvertor) {
    replaceDictionary = layerConfig.uiToFactoryParamsConvertor(
      layerConfig.parameters
    );
  }

  url = url.includes("{{{")
    ? replaceUrlAndParamPlaceholders(url, replaceDictionary)
    : url;

  let params = replaceParamsPlaceHolders(
    layerConfig.layerFactoryParams.layerParams,
    replaceDictionary
  );
  return {
    url: url,
    params: params,
  };
}
