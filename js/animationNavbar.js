$(".nav-header .close-icon").click(function (e) {
  $(".nav-meals").animate({ left: -234 }, 500);
  $(".nav-meals .links li").animate({ top: "300px" }, 300);
  $(".nav-header .close-icon").toggleClass("d-none");
  $(".nav-header .open-icon").toggleClass("d-none");
});
$(".nav-header .open-icon").click(function (e) {
  $(".nav-meals").animate({ left: 0 }, 500);
  $(".nav-meals .links  .search").animate({ top: 0 }, 100, function () {
    $(".nav-meals .links  .cato").animate({ top: 0 }, 101, function () {
      $(".nav-meals .links  .area").animate({ top: 0 }, 102, function () {
        $(".nav-meals .links  .ingr").animate({ top: 0 }, 103, function () {
          $(".nav-meals .links  .contact").animate({ top: 0 },104,function () {}
          );
        });
      });
    });
  });
  $(".nav-header .open-icon").toggleClass("d-none");
  $(".nav-header .close-icon").toggleClass("d-none");
});

function closeNavAnimation() {
  $(".nav-meals").animate({ left: -234 }, 1000);
  $(".nav-meals .links li").animate({ top: "300px" }, 1000);
  $(".nav-header .close-icon").toggleClass("d-none");
  $(".nav-header .open-icon").toggleClass("d-none");
} 
export{
  closeNavAnimation,
}
