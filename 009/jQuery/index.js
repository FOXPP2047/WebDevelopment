$("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title");
// console.log($("img").attr("src"));
$("a").attr("href", "https://www.bing.com");
$("button").click(function() {
  $("h1").css("color", "purple");
});

let numBtn = $("button").length;

// $("input").keypress(function(event) {
//   $("h1").text(event.key);
// });

// $("h1").on("mouseover", function() {
//   $("h1").css("color", "purple");
// });

// $("h1").before("<button>New</button");
// $("h1").after("<button>New</button");
// $("h1").prepend("<button>New</button");
// $("h1").append("<button>New</button");
// $("button").remove();

$("button").on("click", function() {
  // $("h1").toggle();
  // $("h1").fadeToggle();
  // $("h1").slideToggle();
  // $("h1").animate({margin: "20%"});
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
