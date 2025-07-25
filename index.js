let searchedLocation = document.getElementById("search-bar");
let searchBtn = document.getElementById("search-btn");
let results = document.getElementById("results");
let suggestions = {
  beaches: ["miami", "bondi"],
  temples: ["golden temple", "wat arun"],
  usa: ["new york", "los santos"],
  canada: ["toronto", "ontario"],
  australia: ["sydney", "melbourne"],
  england: ["london", "manchester"]

}
const timeZoneMap = {
  // Beaches
  "miami": "America/New_York",
  "bondi": "Australia/Sydney",
  "myrtle": "America/New_York",

  // Temples
  "golden temple": "Asia/Kolkata",
  "wat arun": "Asia/Bangkok",
  "angkor wat": "Asia/Phnom_Penh",

  // USA Cities
  "new york": "America/New_York",
  "los santos": "America/Los_Angeles", // Fictional; use LA

  // Canada
  "toronto": "America/Toronto",
  "ontario": "America/Toronto",

  // Australia
  "sydney": "Australia/Sydney",
  "melbourne": "Australia/Melbourne",

  // England
  "london": "Europe/London",
  "manchester": "Europe/London"
};
function getTimeForZone(timezone) {
  let date = new Date();
  return new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    timeStyle: 'short'
  }).format(date);
}
function getTime(output){
    for (let i = 0; i < output.length; i++) {
      setTimeout(() => {
        let location = output[i];
        let timezone = timeZoneMap[location];
        let time = getTimeForZone(timezone);
        results.innerHTML += `
      <div class="card">
        <img src="Media/${location}.jpg" alt="${location}" />
        <div class="card-info">
          <h3>${location.charAt(0).toUpperCase() + location.slice(1)}</h3>
          <p><strong>Timezone:</strong> ${timezone}</p>
          <p><strong>Current Time:</strong> ${time}</p>
        </div>
      </div>
    `;
      }, 1000 * i);
    }
}
function getSuggestion() {
  let input = searchedLocation.value.trim().toLowerCase();
  if (input === "beaches" || input === "beach") {
    let output = suggestions.beaches;
    getTime(output);
  }
  else if (input === "temple" || input === "temples") {
    let output = suggestions.temples;
    getTime(output);
  }
  else if(input === "usa" || input === "new york" || input === "los santos"){
    let output = suggestions.usa;
    getTime(output);
  }
  else if(input === "england" || input === "manchester" || input === "london"){
    let output = suggestions.england;
    getTime(output);
  }
  else if(input === "australia" || input === "melbourne" || input === "sydney"){
    let output = suggestions.australia;
    getTime(output);
  }
  else if(input === "canada" || input === "toronto" || input === "ontario"){
    let output = suggestions.canada;
    getTime(output);
  }
}

searchBtn.addEventListener("click", getSuggestion)