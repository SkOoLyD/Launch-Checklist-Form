// Write your JavaScript code here!
let fuelReady = false;
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
   
   document.getElementById('launchStatus').innerText = 'Awaiting Information Before Launch';
   document.getElementById('launchStatus').style.color = "black";
   document.getElementById("pilotStatus").innerText = `Pilot ${pilotNameInput.value} Ready`;
   document.getElementById("copilotStatus").innerText = `Co-Pilot ${coPilotNameInput.value} Ready`;
   document.getElementById("fuelStatus").innerText = "Fuel Level High Enough For Launch";
   document.getElementById("cargoStatus").innerText = "Cargo Mass Low Enough For";

   fieldCheck = false;
   cargoReady = false;
   fuelReady = false;

   if (pilotNameInput.value.trim() === "" || 
      coPilotNameInput.value.trim() === "" ||
      fuelLevelInput.value.trim() === "" ||
      cargoMassInput.value.trim() === "" || ) 
      { 
         alert("All fields are required!");  
         event.preventDefault();
         fieldCheck = false;
         document.getElementById("faultyItems").style.visibility = "hidden";

      } else if (typeof String(copilotNameInput.value)
      !== "string" || cocpilotNameInput.value.trim().length === 0) {  
         
         alert("Pilot Name Is Required");

         event.preventDefault();
         fieldCheck = false; 
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (!isNaN(Number(pilotNameInput.value)) && pilotNameInput.value.trim().length > 0) {
         
         alert("Invalid Input: No Numbers Can Be Used In Pilot Names Field");

         event.preventDefault();
         fieldCheck = false;
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (typeof String(coPilotNameInput.value) !== "string" || coPilotNameInput.value.trim().length === 0) {

         alert("Co-Pilot Field Is Required");

         event.preventDefault();
         fieldCheck = false;
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (!isNaN(Number(coPilotNameInput.value)) && coPilotNameInput.value.trim().length > 0) {

         alert("Invalid Input : No Numbers Can Be Used In CoPilot Name Field");

         event.preventDefault();
         feildCheck = false;
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (typeof Number(fuelLevelInput.value) !== "number" || isNaN(Number(fuelLevelInput.value))) {

         alert("Invalid Input: Only Numbers Can Be Used In Fuel Level Input");
      }

      }
      }

      }
}
