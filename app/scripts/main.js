var breakpoint = {
    // Small screen / phone
    sm: 576,
    // Medium screen / tablet
    md: 768,
    // Large screen / desktop
    lg: 992,
    // Extra large screen / wide desktop
    xl: 1400
  };
  
  // page slider
  $('#slick').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    draggable: true,
    infinite: true,
    centerMode: true,
    centerPadding: '37px',
    dots: false,
    arrows: false,
    speed: 1000,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: breakpoint.sm,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: breakpoint.md,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: breakpoint.lg,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint: breakpoint.xl,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: '0px',
         
        }
      }
    ]
  });
  