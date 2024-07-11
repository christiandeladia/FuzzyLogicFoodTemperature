const units = {
	Celcius: "°C",
};

const config = {
	minTemp: -20,
	maxTemp: 100,
	unit: "Celcius"
};

const range = document.querySelector("input[type='range']");
const temperature = document.getElementById("temperature");

function setTemperature() {
	temperature.style.height = ((range.value - config.minTemp) / (config.maxTemp - config.minTemp)) * 100 + "%";
	temperature.dataset.value = range.value + units[config.unit];
}

range.addEventListener("input", setTemperature);
setTimeout(setTemperature, 1000);

temperature.innerHTML = range.value;
range.oninput = function() {
    temperature.innerHTML = this.value;


const  x = temperature.innerHTML;
document.getElementById("temp").innerHTML = "x = " + x  + "°C";


const fuzzy=[
  foodtemp = {
  "frozen_zone" : -10,
  "chilled_zone" : 0,
  "danger_zone" : 5,
  "hot_zone" : 60,
  "boiling_zone" : 100
    },
  target = {
  "frozen_zone" : 10,
  "chilled_zone" : 0,
  "danger_zone" : -5,
  "hot_zone" : -60,
  "boiling_zone" : -100
    }
]
const  a = foodtemp.frozen_zone
const  b = foodtemp.chilled_zone
const  c = foodtemp.danger_zone
const  d = foodtemp.hot_zone
const  e = foodtemp.boiling_zone


if (x > -11 && 0 > x){
  var fz = (b - x) / (b - a)
  var cz = (x - a) / (b - a)
  
  var fzm = target.frozen_zone
  var czm = target.chilled_zone
  defuzzification = (fz * fzm) + (cz * czm);
  document.getElementById("change").innerHTML = "CRISP OUTPUT = " + defuzzification.toFixed(2) + "°C";
  if (cz == 0){
    document.getElementById("fuzzy").innerHTML = "FZ = " + fz.toFixed(2) + "°C";
    document.getElementById("def").innerHTML = "<p>Frozen Zone- the bacteria will not grow.</p>"
  }
  else{
  document.getElementById("fuzzy").innerHTML = "FZ = " + fz.toFixed(2) + "°C" + " &nbsp &nbsp &nbsp &nbspCZ = " + cz.toFixed(2) + "°C";
  document.getElementById("def").innerHTML = "<p>Frozen Zone- the bacteria will not grow.<p> Chilled Zone- bacteria are destroyed. "
}}
else if (x > -1 && 5 > x){
  var cz = (c - x) / (c - b)
  var dz = (x - b) / (c - b)
  
  var dzm = target.danger_zone
  var czm = target.chilled_zone
  var defuzzification = (dz * dzm) + (cz * czm)
  document.getElementById("change").innerHTML = "CRISP OUTPUT = " + defuzzification.toFixed(2) + "°C";
  if (dz == 0){
    document.getElementById("fuzzy").innerHTML = "CZ = " + cz.toFixed(2) + "°C";
    document.getElementById("def").innerHTML = "<p>Chilled Zone- bacteria are destroyed.</p>"
  }
  else{
  document.getElementById("fuzzy").innerHTML = "DZ = " + dz.toFixed(2) + "°C" + " &nbsp &nbsp &nbsp &nbsp CZ = " + cz.toFixed(2) + "°C";
  document.getElementById("def").innerHTML = "<p>Chilled Zone- bacteria are destroyed.</p> <p>Danger Zone- bacteria grow quickly.</p>"
}}
else if (x > 4 && 60 > x){
  var dz = (d - x) / (d - c)
  var hz = (x - c) / (d - c)
  
  var dzm = target.danger_zone
  var hzm = target.hot_zone
  var defuzzification = (dz * dzm) + (hz * hzm)
  document.getElementById("change").innerHTML = "CRISP OUTPUT = " + defuzzification.toFixed(2) + "°C";
  if (hz == 0){
    document.getElementById("fuzzy").innerHTML = "DZ = " + dz.toFixed(2) + "°C";
    document.getElementById("def").innerHTML = "<p>Hot Zone- bacteria are destroyed.</p>"
  }
  // else if (dz == 0){
  //   document.getElementById("fuzzy").innerHTML = "HZ = " + hz.toFixed(2) + "°C";
  //   document.getElementById("def").innerHTML = "<p>Danger Zone- bacteria grow quickly.</p>"
  // }
  else{
    document.getElementById("fuzzy").innerHTML = "DZ = " + dz.toFixed(2) + "°C" + " &nbsp &nbsp &nbsp &nbsp HZ = " + hz.toFixed(2) + "°C";
    document.getElementById("def").innerHTML = "<p>Danger Zone- bacteria grow quickly.</p> <p>Hot Zone- bacteria are destroyed.</p>"
}

}
else if (x > 59 && 101 > x){
  var hz = (e - x) / (e - d)
  var bz = (x - d) / (e - d)
  
  var hzm = target.hot_zone
  var bzm = target.boiling_zone
  var defuzzification = (hz * hzm) + (bz * bzm)  
  document.getElementById("change").innerHTML = "CRISP OUTPUT = " + defuzzification.toFixed(2) + "°C";
  if (bz == 0){
    document.getElementById("fuzzy").innerHTML = "HZ = " + hz.toFixed(2) + "°C";
    document.getElementById("def").innerHTML = "<p>Hot Zone- bacteria are destroyed.</p>"
  }
  else if (hz == 0){
    document.getElementById("fuzzy").innerHTML = "BZ = " + bz.toFixed(2) + "°C";
    document.getElementById("def").innerHTML = "<p>Boiling Zone- Water boiling point.</p>"
  }
  else{
  document.getElementById("fuzzy").innerHTML = "HZ = " + hz.toFixed(2) + "°C"   + " &nbsp &nbsp &nbsp &nbsp BZ = " + bz.toFixed(2) + "°C";
  document.getElementById("def").innerHTML = "<p>Hot Zone- bacteria are destroyed.</p> <p>Boiling Zone- Water boiling point.</p>"
}
}
}