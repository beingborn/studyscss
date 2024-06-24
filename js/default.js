let gnb = $(".slide__menu .wrap");

$(document).ready(function () {
  gnb.addClass("height--disabled");
});

$("a").click(function (e) {
  e.preventDefault();
});

$(".header__ul li").hover(
  function () {
    gnb.toggleClass("height--disabled height--active");
  },
  function () {
    gnb.toggleClass("height--active height--disabled");
  }
);

let tradeTab = $(".trade__market .rank__tab li a");
let userLankTab = $(".user__rank .rank__tab li a");
let leagueTab = $(".league__rank .rank__tab li a");

leagueTab.on("click", function () {
  $(this).addClass("active");
  leagueTab.not($(this)).removeClass("active");
});

tradeTab.on("click", function () {
  $(this).addClass("active");
  tradeTab.not($(this)).removeClass("active");
});

userLankTab.on("click", function () {
  $(this).addClass("active");
  userLankTab.not($(this)).removeClass("active");
});
