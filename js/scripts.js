$(document).ready(function() {
  $("form#sides").submit(function(event) {
    var sideA = parseInt($("input#side-a").val());
    var sideB = parseInt($("input#side-b").val());
    var sideC = parseInt($("input#side-c").val());

    if (sideA + sideB <= sideC)
      {
      $("p").hide();
      alert("Not a Triangle!");
      }
    if (sideA + sideC <= sideB)
      {
      $("p").hide();
      alert("Not a Triangle!");
      }
    if (sideC + sideB <= sideA)
      {
      $("p").hide();
      alert("Not a Triangle!");
      }
    if (sideA === sideB && sideA == sideC){
      $("p").hide();
      $("#equal").show();
    }

    if (sideA == sideB && sideA != sideC && sideA + sideB > sideC){
      $("p").hide();
      $("#iso").show();
    }

    if (sideA != sideB && sideA != sideC && sideB != sideC){
      $("p").hide();
      $("#scale").show();
    }


  event.preventDefault();
  });
});
