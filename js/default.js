let gnb = $(".slide__menu .wrap");
let gnbArea = $(".nav__wrap");

$(document).ready(function () {
  gnb.addClass("height--disabled");
});

$("a").click(function (e) {
  e.preventDefault();
});

$(".header__ul li").mouseover(function () {
  gnb.removeClass("height--disabled");
  gnb.addClass("height--active");
});

gnb.addClass("height--disabled");
gnb.removeClass("height--active");

// gnb 닫기는 mouseleave를 이용해 부모 태그를 기준으로 실행합니다.
$(".nav__wrap").mouseleave(function () {
  gnb.addClass("height--disabled");
  gnb.removeClass("height--active");
});

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
