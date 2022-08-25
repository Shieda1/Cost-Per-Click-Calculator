// https://calculator.swiftutors.com/cost-per-click-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const costPerClickRadio = document.getElementById('costPerClickRadio');
const costtoAdvertiserRadio = document.getElementById('costtoAdvertiserRadio');
const numberofClicksRadio = document.getElementById('numberofClicksRadio');

let costPerClick;
let costtoAdvertiser = v1;
let numberofClicks = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

costPerClickRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost to Advertiser ($)';
  variable2.textContent = 'Number of Clicks';
  costtoAdvertiser = v1;
  numberofClicks = v2;
  result.textContent = '';
});

costtoAdvertiserRadio.addEventListener('click', function() {
  variable1.textContent = '(CPC) Cost Per Click ($)';
  variable2.textContent = 'Number of Clicks';
  costPerClick = v1;
  numberofClicks = v2;
  result.textContent = '';
});

numberofClicksRadio.addEventListener('click', function() {
  variable1.textContent = '(CPC) Cost Per Click ($)';
  variable2.textContent = 'Cost to Advertiser ($)';
  costPerClick = v1;
  costtoAdvertiser = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(costPerClickRadio.checked)
    result.textContent = `Cost Per Click = ${computeCostPerClick().toFixed(2)} $`;

  else if(costtoAdvertiserRadio.checked)
    result.textContent = `Cost to Advertiser = ${computeCosttoAdvertiser().toFixed(2)} $`;

  else if(numberofClicksRadio.checked)
    result.textContent = `Number of Clicks = ${computeNumberofClicks().toFixed(2)}`;
})

// calculation

function computeCostPerClick() {
  return Number(costtoAdvertiser.value) / Number(numberofClicks.value);
}

function computeCosttoAdvertiser() {
  return Number(costPerClick.value) * Number(numberofClicks.value);
}

function computeNumberofClicks() {
  return Number(costtoAdvertiser.value) / Number(costPerClick.value);
}