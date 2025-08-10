const bulb = document.querySelector('.light-bulb');
const powerBtn = document.getElementById('togglePower');
const brightnessSlider = document.getElementById('brightness');
const saturationSlider = document.getElementById('saturation');

let isOn = true;


function updateBulb() {
  if (isOn) {
    bulb.style.opacity = '1';
    bulb.style.filter = `brightness(${brightnessSlider.value}%) saturate(${saturationSlider.value}%)`;
    powerBtn.textContent = 'Turn Off';
  } else {
    bulb.style.opacity = '0.3';
    bulb.style.filter = 'brightness(0) saturate(0)';
    powerBtn.textContent = 'Turn On';
  }
}

powerBtn.addEventListener('click', () => {
  isOn = !isOn;
  updateBulb();
});

brightnessSlider.addEventListener('input', () => {
  if (isOn) updateBulb();
});

saturationSlider.addEventListener('input', () => {
  if (isOn) updateBulb();
});

// Initialize the bulb on page load
updateBulb();
