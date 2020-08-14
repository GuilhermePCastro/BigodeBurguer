$( document ).ready(function() {
  $('.container-lanches').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    infinite: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
});

