$("#btn1").on("click", function() {
  $(".red, .green, .blue")
    .animate()
    .css(
      {
        backgroundColor: "red"
      },
      2500
    );
});

$("#btn2").on("click", function() {
  $(".red, .green, .blue")
    .animate()
    .css(
      {
        backgroundColor: "green"
      },
      2500
    );
});

$("#btn3").on("click", function() {
  $(".red, .green, .blue")
    .animate()
    .css(
      {
        backgroundColor: "blue"
      },
      2500
    );
});

$("#btn4").on("click", function() {
  $(".red").css(
    {
      backgroundColor: "red"
    },
    1500
  );
  $(".green").css(
    {
      backgroundColor: "green"
    },
    1500
  );
  $(".blue").css(
    {
      backgroundColor: "blue"
    },
    1500
  );
});
