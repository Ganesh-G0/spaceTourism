$(document).ready(() => {
  $("button").click((e) => {
    const value = e.target.value;
    if (value == 0) {       
      $("#commander").addClass("active"); 
      $("#specialist").removeClass("active");
      $("#pilot").removeClass("active");
      $("#engineer").removeClass("active");
      getData("Commander");
    }
    if (value == 1) { 
      $("#specialist").addClass("active");
      $("#commander").removeClass("active"); 
      $("#pilot").removeClass("active");
      $("#engineer").removeClass("active");
      getData("Specialist");
    }
    if (value == 2) { 
      $("#pilot").addClass("active");
      $("#commander").removeClass("active"); 
      $("#specialist").removeClass("active");
      $("#engineer").removeClass("active");
      getData("Pilot");
    }
    if (value == 3) { 
      $("#engineer").addClass("active");
      $("#commander").removeClass("active"); 
      $("#specialist").removeClass("active");
      $("#pilot").removeClass("active");
      getData("Engineer");
    }
  });

  async function getData(crew) {
    try {
      const response = await axios.get("../data.json");
      if (crew === "Commander") { crew = response.data.crew[0]; }
      else if (crew === "Specialist") { crew = response.data.crew[1]; }
      else if (crew === "Pilot") { crew = response.data.crew[2]; }
      else if (crew === "Engineer") { crew = response.data.crew[3]; }
      console.log(crew.images.webp);
      $("#img").attr("src", crew.images.webp);
      $(".role").text(crew.role);
      $(".name").text(crew.name);
      $(".bio").text(crew.bio);

    } catch (error) {
      console.error(error);
    }
  }
});
