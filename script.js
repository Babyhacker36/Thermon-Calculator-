// Define variables
let dlt, codfpg, hoopn, doopw, nomiu, tledlt, noltop;
let baserentaltotal, dieselFulingCostTotal, oilChangeCostTotal, airFilterChangeCostTotal, each4CostTotal;
let elecUtilCostTotal, totalyearlyCost, rentalCostTotal, netCostOfDeiseltot, costSavings1ledLighttower;
let netCostofLedRightTotal, costSavingsOfAllled;

// General function to update costs
const updateCost = (value) => {
  if (isNaN(value)) {
    return "--";
  }
  return "$" + value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

// Update field values based on input
const setFieldValue = (elementId, value) => {
  document.getElementById(elementId).value = value;
  deiselCostCal();
};

// Event listeners for inputs
const fields = ["dlt", "codfpg", "hoopn", "doopw", "nomiu", "noltop", "tledlt"];
fields.forEach(fieldId => {
  document.getElementById(fieldId).onkeyup = function() {
    const value = parseFloat(document.getElementById(fieldId).value);
    if (fieldId === "hoopn") {
      document.getElementById("ledhoopn").value = value;
    } else if (fieldId === "doopw") {
      document.getElementById("leddoopw").value = value;
    } else if (fieldId === "nomiu") {
      document.getElementById("lednomiu").value = value;
      document.getElementById("tledlt").removeAttribute("disabled");
    } else if (fieldId === "noltop") {
      document.getElementById("lednoltop").value = value;
    }
    eval(`${fieldId} = ${value}`);
    deiselCostCal();
  };
});

// Calculate diesel cost and other costs
const deiselCostCal = () => {
  dieselFulingCostTotal = hoopn * doopw * 4 * nomiu * 0.5 * codfpg +
    ((hoopn * doopw * 4 * nomiu) / 60) * 0.2 * 30 +
    doopw * 4 * nomiu * 0.2 * 30;
  
  // Update UI with calculated cost values
  document.getElementById("DeisalFuelingCost").innerHTML = updateCost(dieselFulingCostTotal);
  
  // Call other calculations
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

// Calculate oil change cost
const oilChangeCostCal = () => {
  oilChangeCostTotal = ((hoopn * doopw * nomiu) / 200) * 40;
  document.getElementById("oilChangeCost").innerHTML = updateCost(oilChangeCostTotal);
};

// Calculate air filter change cost
const airFilterChangeCostCal = () => {
  airFilterChangeCostTotal = ((hoopn * doopw * nomiu) / 300) * 40;
  document.getElementById("airFilterChangeCost").innerHTML = updateCost(airFilterChangeCostTotal);
};

// Calculate each 4 cost
const each4CostCal = () => {
  each4CostTotal = ((hoopn * doopw * nomiu) / 3000) * 400;
  document.getElementById("each4Cost").innerHTML = updateCost(each4CostTotal);
};

// Calculate total yearly operating cost
const totalYearlyOperatingCost = () => {
  totalyearlyCost = dieselFulingCostTotal + oilChangeCostTotal + airFilterChangeCostTotal + each4CostTotal + 100;
  document.getElementById("totalYearlyOperatingCost").innerHTML = updateCost(totalyearlyCost);
};

// Calculate base rental cost
const baseRentalCost = () => {
  baserentaltotal = dlt * nomiu;
  document.getElementById("baseRentalCost").innerHTML = updateCost(baserentaltotal);
};

// Calculate net cost of diesel
const netCostOfDeisel = () => {
  netCostOfDeiseltot = totalyearlyCost + baserentaltotal;
  document.getElementById("netdeiselCost").innerHTML = updateCost(netCostOfDeiseltot);
};

// Electric utility cost for LED light tower
const electricUtilityCost = () => {
  elecUtilCostTotal = hoopn * 0.08 * (doopw * 4) * nomiu;
  document.getElementById("ledeucllt").innerHTML = updateCost(elecUtilCostTotal);
  document.getElementById("totalyearlyTPS").innerHTML = updateCost(elecUtilCostTotal);
};

// Rental cost for LED light tower
const rentalCost = () => {
  rentalCostTotal = tledlt * nomiu;
  document.getElementById("rentalCostLed").innerHTML = updateCost(rentalCostTotal);
};

// Calculate net cost of LED light tower
const netCostOfLedLightTower = () => {
  netCostofLedRightTotal = elecUtilCostTotal + rentalCostTotal;
  document.getElementById("netCostLed").innerHTML = updateCost(netCostofLedRightTotal);
  document.getElementById("modalCostSavingsNet").innerHTML = updateCost(netCostofLedRightTotal);
};

// Calculate cost savings from LED light tower
const costofSavings1Led = () => {
  costSavings1ledLighttower = netCostOfDeiseltot - netCostofLedRightTotal;
  document.getElementById("costsavings1led").innerHTML = updateCost(costSavings1ledLighttower);
  document.getElementById("modalCostSavings1led").innerHTML = updateCost(costSavings1ledLighttower);
};

// Calculate total savings from all LED lights
const costsavingsAllLed = () => {
  costSavingsOfAllled = noltop * costSavings1ledLighttower;
  document.getElementById("costsavingsallled").innerHTML = updateCost(costSavingsOfAllled);
};

// Calculate project duration savings
const costSavingsProjectDuration = () => {
  const costSavingsProjectTotal = costSavingsOfAllled;
  document.getElementById("costsavingsallledProject").innerHTML = updateCost(costSavingsProjectTotal);
  document.getElementById("modalCostSavingsAllledPD").innerHTML = updateCost(costSavingsProjectTotal);
};

// Helper function to restrict input to numbers
function isNumberKey(evt) {
  const charCode = evt.which ? evt.which : evt.keyCode;
  return !(charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57));
}

// Event listener for contact dropdown
document.getElementById("cory").style.display = "none";
document.getElementById("cliff").style.display = "none";
document.getElementById("bothReps").style.display = "none";
