$(document).ready(() => {
  $("button").click((e) => {
    const value = e.target.value;
    if (value == 0) {       
      $("#one").addClass("active"); 
      $("#two").removeClass("active");
      $("#three").removeClass("active");
      getData("One");
    }
    else if (value == 1) { 
      $("#one").removeClass("active"); 
      $("#two").addClass("active");
      $("#three").removeClass("active");
      getData("Two");
    }
    else if (value == 2) { 
      $("#one").removeClass("active"); 
      $("#two").removeClass("active");
      $("#three").addClass("active");
      getData("Three");
    }
  });
  async function getData(tech) {
    try {
      const response = await axios.get("../data.json");
      // console.log(response.data.technology[0]);
      console.log(tech)

      if (tech === "One") {  tech = response.data.technology[0]; }
      else if (tech === "Two") { tech = response.data.technology[1]; }
      else if (tech === "Three") { tech = response.data.technology[2]; }
      $(".mobile-img").attr("src", tech.images.landscape);
      $(".desktop-img").attr("src", tech.images.portrait);
      $(".name").text(tech.name);
      $(".description").text(tech.description);
    } catch (error) {
      console.error(error);
    }
  }
});
