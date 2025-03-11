var dlt;
var codfpg;
var hoopn;
var doopw;
var nomiu;
var tledlt;
var noltop;
var baserentaltotal;
var dieselFulingCostTotal;
var oilChangeCostTotal;
var airFilterChangeCostTotal;
var each4CostTotal;
var elecUtilCostTotal;
var totalyearlyCost;
var rentalCostTotal;
var netCostOfDeisel;
var costSavings1ledLighttower;
var netCostofLedRightTotal;
var costSavingsOfAllled;

document.getElementById("dlt").onkeyup = function () {
  dlt = document.getElementById("dlt").value;
  deiselCostCal();
};

document.getElementById("codfpg").onkeyup = function () {
  codfpg = document.getElementById("codfpg").value;
  deiselCostCal();
};

document.getElementById("hoopn").onkeyup = function () {
  hoopn = document.getElementById("hoopn").value;
  ledhoopn = document.getElementById("ledhoopn").value = hoopn;
  deiselCostCal();
};

document.getElementById("doopw").onkeyup = function () {
  doopw = document.getElementById("doopw").value;
  document.getElementById("leddoopw").value = doopw;
  deiselCostCal();
};

document.getElementById("nomiu").onkeyup = function () {
  nomiu = document.getElementById("nomiu").value;
  document.getElementById("lednomiu").value = nomiu;
  deiselCostCal();
  document.getElementById("tledlt").removeAttribute("disabled");
};

document.getElementById("noltop").onkeyup = function () {
  noltop = document.getElementById("noltop").value;
  document.getElementById("lednoltop").value = noltop;
  deiselCostCal();
};

// Right Column input

document.getElementById("tledlt").onkeyup = function () {
  tledlt = document.getElementById("tledlt").value;

  const test = document.getElementById("price");
  if (tledlt === "List Price") {
    tledlt = document.getElementById("tledlt").value = 800;
  }

  deiselCostCal();
  // COMPARE BUTTON CHANGE
  var CompareBtn = document.getElementById("CompareBtn");
  CompareBtn.style.cursor = "pointer";
  CompareBtn.innerHTML = "Comparison";
  CompareBtn.style.color = "#da291c";
  // CompareBtn.style.fontSize = "1.3rem";
  var arrow = document.createElement("a");
  arrow.style.display = "block";
  arrow.classList.add("arrow");
  arrow.classList.add("down");
  var arrowText = document.createTextNode("down");
  arrow.appendChild(arrowText);
  document.getElementById("CompareBtn").appendChild(arrow);
  var csdiv = document.getElementById("costSavingsDiv");
  csdiv.classList.remove("csdHide");
  csdiv.classList.add("fadeIn");
  CompareBtn.onclick = function () {
    scrollView();
  };

  scrollView = () => {
    var CompareTable = document.getElementById("ContainerThirdOuter");
    CompareTable.scrollIntoView(true);
  };
};

deiselCostCal = () => {
  // dieselFulingCostTotal = codfpg * 1.89 * hoopn * (doopw * 4) * nomiu;
  dieselFulingCostTotal =
    hoopn * doopw * 4 * nomiu * 0.5 * codfpg +
    ((hoopn * doopw * 4 * nomiu) / 60) * 0.2 * 30 +
    doopw * 4 * nomiu * 0.2 * 30;
  var tdDeisalFuelingCost = document.getElementById("DeisalFuelingCost");
  if (isNaN(dieselFulingCostTotal)) {
    tdDeisalFuelingCost.innerHTML = "--";
  } else {
    tdDeisalFuelingCost.innerHTML =
      "$" +
      dieselFulingCostTotal.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }
  oilChangeCostCal();
  airFilterChangeCostCal();
  each4CostCal();
  totalYearlyOperatingCost();
  baseRentalCost();
  netCostOfDeisel();
  electricUtilityCost();
  rentalCost();
  netCostOfLedLightTower();
  costofSavings1Led();
  costsavingsAllLed();
  costSavingsProjectDuration();
};

oilChangeCostCal = () => {
  oilChangeCostTotal = ((hoopn * doopw * nomiu) / 200) * 40;
  var tdoilChangeCost = document.getElementById("oilChangeCost");
  if (isNaN(oilChangeCostTotal)) {
    tdoilChangeCost.innerHTML = "--";
  } else {
    tdoilChangeCost.innerHTML =
      "$" +
      oilChangeCostTotal.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }
};

airFilterChangeCostCal = () => {
  airFilterChangeCostTotal = ((hoopn * doopw * nomiu) / 300) * 40;
  var tdairFilterChangeCost = document.getElementById("airFilterChangeCost");
  if (isNaN(airFilterChangeCostTotal)) {
    tdairFilterChangeCost.innerHTML = "--";
  } else {
    tdairFilterChangeCost.innerHTML =
      "$" +
      airFilterChangeCostTotal.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }
};

// var eachFourTotalSum;

each4CostCal = () => {
  each4CostTotal = ((hoopn * doopw * nomiu) / 3000) * 400;
  var tdeach4Cost = document.getElementById("each4Cost");
  if (isNaN(each4CostTotal)) {
    tdeach4Cost.innerHTML = "--";
  } else {
    tdeach4Cost.innerHTML = "$" + each4CostTotal.toFixed(2);
  }
};

totalYearlyOperatingCost = () => {
  totalyearlyCost =
    dieselFulingCostTotal +
    oilChangeCostTotal +
    airFilterChangeCostTotal +
    each4CostTotal +
    100;
  var tdtotalYearlyOperatingCost = document.getElementById(
    "totalYearlyOperatingCost"
  );
  tdtotalYearlyOperatingCost.innerHTML = totalyearlyCost;
  if (isNaN(totalyearlyCost)) {
    tdtotalYearlyOperatingCost.innerHTML = "--";
  } else {
    tdtotalYearlyOperatingCost.innerHTML =
      "$" +
      totalyearlyCost.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }
};

baseRentalCost = () => {
  baserentaltotal = dlt * nomiu;
  var tdbaseRentalCost = document.getElementById("baseRentalCost");
  if (isNaN(baserentaltotal)) {
    tdbaseRentalCost.innerHTML = "--";
  } else {
    tdbaseRentalCost.innerHTML =
      "$" +
      baserentaltotal.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }
};

netCostOfDeisel = () => {
  netCostOfDeiseltot = totalyearlyCost + baserentaltotal;
  var tdnetdeiselCost = document.getElementById("netdeiselCost");
  if (isNaN(netCostOfDeiseltot)) {
    tdnetdeiselCost.innerHTML = "--";
  } else {
    tdnetdeiselCost.innerHTML =
      "$" +
      netCostOfDeiseltot.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }
};

// Thermon Led Light Tower section

electricUtilityCost = () => {
  elecUtilCostTotal = hoopn * 0.08 * (doopw * 4) * nomiu;
  var tdEletricDeiselLightTower = document.getElementById("ledeucllt");
  var tdtotalyearlyTPS = document.getElementById("totalyearlyTPS");
  tdEletricDeiselLightTower.innerHTML = elecUtilCostTotal;
  if (isNaN(elecUtilCostTotal)) {
    tdEletricDeiselLightTower.innerHTML = "--";
  } else {
    tdEletricDeiselLightTower.innerHTML =
      "$" +
      elecUtilCostTotal.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    tdtotalyearlyTPS.innerHTML =
      "$" +
      elecUtilCostTotal.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }
};

rentalCost = () => {
  rentalCostTotal = tledlt * nomiu;
  var tdrentalCostLed = document.getElementById("rentalCostLed");
  if (isNaN(rentalCostTotal)) {
    tdrentalCostLed.innerHTML = "--";
  } else {
    tdrentalCostLed.innerHTML =
      "$" +
      rentalCostTotal.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }
};

netCostOfLedLightTower = () => {
  netCostofLedRightTotal = elecUtilCostTotal + rentalCostTotal;
  var tdnetCostLed = document.getElementById("netCostLed");
  var modalCostSavingsNet = document.getElementById("modalCostSavingsNet");

  if (isNaN(netCostofLedRightTotal)) {
    tdnetCostLed.innerHTML = "--";
  } else {
    tdnetCostLed.innerHTML =
      "$" +
      netCostofLedRightTotal.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    modalCostSavingsNet.innerHTML =
      "$" +
      netCostofLedRightTotal.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }
};

costofSavings1Led = () => {
  costSavings1ledLighttower = netCostOfDeiseltot - netCostofLedRightTotal;
  var tdcostsavings1led = document.getElementById("costsavings1led");
  var modalCostSavings1led = document.getElementById("modalCostSavings1led");
  if (isNaN(costSavings1ledLighttower)) {
    tdcostsavings1led.innerHTML = "--";
  } else {
    tdcostsavings1led.innerHTML =
      "$" +
      costSavings1ledLighttower.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    modalCostSavings1led.innerHTML =
      "$" +
      costSavings1ledLighttower.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }
};

costsavingsAllLed = () => {
  costSavingsOfAllled = noltop * costSavings1ledLighttower;
  var tdcostsavingsallled = document.getElementById("costsavingsallled");
  if (isNaN(costSavingsOfAllled)) {
    tdcostsavingsallled.innerHTML = "--";
  } else {
    tdcostsavingsallled.innerHTML =
      "$" +
      costSavingsOfAllled.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }
};

costSavingsProjectDuration = () => {
  var costSavingsProjectTotal = costSavingsOfAllled;
  var tdcostsavingsallledProject = document.getElementById(
    "costsavingsallledProject"
  );
  var modalCostSavingsAllledPD = document.getElementById(
    "modalCostSavingsAllledPD"
  );
  if (isNaN(costSavingsProjectTotal)) {
    tdcostsavingsallledProject.innerHTML = "--";
  } else {
    tdcostsavingsallledProject.innerHTML =
      "$" +
      costSavingsProjectTotal.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    modalCostSavingsAllledPD.innerHTML =
      "$" +
      costSavingsProjectTotal.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }
};

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
    return false;

  return true;
}

// script to contact drop down

var cory = document.getElementById("cory");
var cliff = document.getElementById("cliff");
var bothReps = document.getElementById("bothReps");

cory.style.display = "none";
cliff.style.display = "none";
bothReps.style.display = "none";

var states = document.getElementById("states");

states.onchange = function () {
  console.log("there was a change");
  var result = states.options[states.selectedIndex].value;
  console.log(result);
  if (
    result === "AZ" ||
    result === "CA" ||
    result === "CO" ||
    result === "HI" ||
    result === "ID" ||
    result === "MT" ||
    result === "NV" ||
    result === "NM" ||
    result === "ND" ||
    result === "OR" ||
    result === "UT" ||
    result === "WA" ||
    result === "WY" ||
    result === "AL" ||
    result === "AR" ||
    result === "CT" ||
    result === "DE" ||
    result === "DC" ||
    result === "FL" ||
    result === "GA" ||
    result === "IL" ||
    result === "IN" ||
    result === "IA" ||
    result === "KS" ||
    result === "KY" ||
    result === "LA" ||
    result === "ME" ||
    result === "MD" ||
    result === "MI" ||
    result === "MN" ||
    result === "MS" ||
    result === "MO" ||
    result === "NE" ||
    result === "NH" ||
    result === "NJ" ||
    result === "NY" ||
    result === "NC" ||
    result === "OH" ||
    result === "OK" ||
    result === "PA" ||
    result === "RI" ||
    result === "SC" ||
    result === "TN" ||
    result === "UT" ||
    result === "VT" ||
    result === "VA" ||
    result === "WV" ||
    result === "WY" ||
    result === "SD" || 
    result === "TX"
  ) {
    console.log("Cory Selected");
    cory.style.display = "flex";
    cliff.style.display = "none";
    bothReps.style.display = "none";
    window.scrollBy(0, 200);
  };

// Use commented code below to add a new rep if a new rep is added to thermon

  // } else if (
  //   result === "AL" ||
  //   result === "AR" ||
  //   result === "CT" ||
  //   result === "DE" ||
  //   result === "DC" ||
  //   result === "FL" ||
  //   result === "GA" ||
  //   result === "IL" ||
  //   result === "IN" ||
  //   result === "IA" ||
  //   result === "KS" ||
  //   result === "KY" ||
  //   result === "LA" ||
  //   result === "ME" ||
  //   result === "MD" ||
  //   result === "MI" ||
  //   result === "MN" ||
  //   result === "MS" ||
  //   result === "MO" ||
  //   result === "NE" ||
  //   result === "NH" ||
  //   result === "NJ" ||
  //   result === "NY" ||
  //   result === "NC" ||
  //   result === "OH" ||
  //   result === "OK" ||
  //   result === "PA" ||
  //   result === "RI" ||
  //   result === "SC" ||
  //   result === "TN" ||
  //   result === "UT" ||
  //   result === "VT" ||
  //   result === "VA" ||
  //   result === "WV" ||
  //   result === "WY"
  // ) {
  //   console.log("Cliff selected");
  //   cliff.style.display = "flex";
  //   cory.style.display = "none";
  //   bothReps.style.display = "none";
  //   window.scrollBy(0, 200);


// coded need only if reps are sharing states

  // } else if (result === "SD" || result === "TX") {
  //   bothReps.style.display = "flex";
  //   cliff.style.display = "none";
  //   cory.style.display = "none";
  //   window.scrollBy(0, 200);
  // }
};
