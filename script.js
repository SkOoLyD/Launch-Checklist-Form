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
            <li>Name: ${}</li>
            <li>Diameter: ${}</li>
            <li>Star: ${}</li>
            <li>Distance from Earth: ${}</li>
            <li>Number of Moons: ${}</li>
         </ol>
         <img src="${}">
         `; 

      });
   });
}
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
