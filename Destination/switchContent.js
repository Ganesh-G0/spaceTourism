$(document).ready(() => {
  $("button").click((e) => {
    const value = e.target.value;
    if (value == 0) { 
      $("#moon").addClass("active"); 
      $("#mars").removeClass("active");
      $("#europa").removeClass("active");
      $("#titan").removeClass("active");
      getData("Moon");
    }
    if (value == 1) { 
      $("#mars").addClass("active"); 
      $("#moon").removeClass("active");
      $("#europa").removeClass("active");
      $("#titan").removeClass("active");
      getData("Mars");
    }
    if (value == 2) { 
      $("#europa").addClass("active"); 
      $("#mars").removeClass("active");
      $("#moon").removeClass("active");
      $("#titan").removeClass("active");
      getData("Europa");
    }
    if (value == 3) { 
      $("#titan").addClass("active"); 
      $("#mars").removeClass("active");
      $("#europa").removeClass("active");
      $("#moon").removeClass("active");
      getData("Titan");
    }
  });

  async function getData(planet) {
    try {
      const response = await axios.get("../data.json");
      if (planet == "Moon") { planet = response.data.destinations[0]; }
      else if (planet == "Mars") { planet = response.data.destinations[1]; }
      else if (planet == "Europa") { planet = response.data.destinations[2]; }
      else if (planet == "Titan") { planet = response.data.destinations[3]; }
      $("#Img").attr("src", planet.images.webp);
      $("#name").text(planet.name);
      $("#description").text(planet.description);
      $("#distance").text(planet.distance);
      $("#travel").text(planet.travel); 
      
    } catch (error) {
      console.error(error);
    }
  }
});
