// @ts-nocheck
const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const minRangeValue = document.getElementById("range-min-value");
const maxRangeValue = document.getElementById("range-max-value");
const range = document.querySelector(".range")


const minGap = 300;
const maxValue = 10000;

function updateRange() {
  let minVal = parseInt(minRange.value);
  let maxVal = parseInt(maxRange.value);

  if (maxVal - minVal < minGap) {
    minRange.value = maxVal - minGap;
    minVal = minRange.value;
  }

  minRangeValue.innerText = "$" + minVal;
  maxRangeValue.innerText = "$" + maxVal;

  const minPercent = (minVal / maxValue) * 100;
  const maxPercent = (maxVal / maxValue) * 100;

  range.style.left = minPercent + "%";
  range.style.width = (maxPercent - minPercent) + "%";
}

minRange.addEventListener("input", updateRange)
maxRange.addEventListener("input", updateRange)

updateRange();
