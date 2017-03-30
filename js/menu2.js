$(".product-image").click(function() {
  $(".description").addClass("hidden");
  $(this).siblings().removeClass("hidden");
});
