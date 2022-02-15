// $(".animation__btn").click(function() {
  
//   var lable = $(".animation__btn").text().trim();

//   if(lable == "Hide") {
//     $(".animation__btn").text("Submit");
//     $(".animation__move").show();
//   }
//   else {
//     $(".animation__btn").text("Hide");
//     // $(".animation__move").hide();
//   }
//  });


 function show_anime() {
  var x = document.getElementById("animation__move");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 