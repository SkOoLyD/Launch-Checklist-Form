// Write your JavaScript code here!
let fuelready = false;
let cargoReady = false;
let feildCheck;
window.addEventListener("load",function() {
   this.fetch("https://handlers.education.launchcode.org/static/planets.json")
   .then(function(response)
   {
      response.json().then(function(json) {
         let index = Math.floor
         (Math.random() * json.length);
         console.log(json[index].name);
         document.getElementById("missionTarget").innerHTML =`<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index.name]}</li>
            <li>Diameter: ${json[index.diameter]}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].images}">
         `; 

      });
   });

//make misson submit form 
   let form = document.querySelector("form");
form.addEventListener("submit", function(event){
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let coPilotNameInput = doucument.querySelector("input[name=coPilotName");
   let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]");
}
