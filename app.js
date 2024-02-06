document.getElementById("btn").addEventListener("click", () => {
  let input = document.getElementById("inp").value;

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=fa7e6e9d66b843a3ab8125723242901&q=${input}&aqi=no`
  )
    .then((response) => response.json())
    .then((data) => {
      const box = document.getElementById("box");
      box.innerHTML = `<br>
        <p>${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather Icon">
        <p id="temp"> ${data.current.temp_c} °C</p>
        <p id="loc">${data.location.name},  ${data.location.country}</p>
        <p>Wind: ${data.current.wind_kph} km/h</p>
                `;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      const box = document.getElementById("box");
      box.innerHTML = "<p>Weather information not available.</p>";
    });
});
