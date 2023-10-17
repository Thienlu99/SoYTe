$(document).ready(function () {
  //   slick slider
  $(".filtering").slick({
    slidesToShow: 3,
    slidesToScroll: 4,
    draggable: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
  });

  $(".filtering5").slick({
    slidesToShow: 5, //hiện thị
    slidesToScroll: 4,
    draggable: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
  });
  $(".filtering4").slick({
    slidesToShow: 4, //hiện thị
    slidesToScroll: 2, //sẽ chạy 2 cái khi click
    draggable: true,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: false, // chạy vô tận hay ko?
    arrows: true, //có dùng mũi tên ko để thay đổi icon
    //  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    //  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
  });
  var filtered = false;

  $(".js-filter").on("click", function () {
    if (filtered === false) {
      $(".filtering").slick("slickFilter", ":even");
      $(this).text("Unfilter Slides");
      filtered = true;
    } else {
      $(".filtering").slick("slickUnfilter");
      $(this).text("Filter Slides");
      filtered = false;
    }
  });
  // ------------vertical slider-----------
  var tabs = $("#ul--dichvu .nav-item a");
  var currentIndex = 0;
  var isTransitioning = false; // Biến cờ để kiểm tra xem việc chuyển đổi tab đang diễn ra hay không

  $("#up-slider").click(function () {
    if (!isTransitioning) {
      isTransitioning = true; // Bắt đầu chuyển đổi tab

      var activeTab = $("#ul--dichvu .nav-item a.active");

      if (activeTab.length) {
        activeTab.removeClass("active");

        currentIndex = (currentIndex - 1 + tabs.length) % tabs.length;

        tabs.eq(currentIndex).tab("show");
      }

      setTimeout(function () {
        isTransitioning = false; // Kết thúc chuyển đổi tab
      }, 500); // Thời gian trễ giữa các lần chuyển đổi (miligiây)
    }
  });

  $("#down-slider").click(function () {
    if (!isTransitioning) {
      isTransitioning = true;

      var activeTab = $("#ul--dichvu .nav-item a.active");

      if (activeTab.length) {
        activeTab.removeClass("active");

        currentIndex = (currentIndex + 1) % tabs.length;

        tabs.eq(currentIndex).tab("show");
      }

      setTimeout(function () {
        isTransitioning = false;
      }, 500);
    }
  });
  // ------------end     vertical slider-----------
//  ----------------------- khắc phục lỗi 2 slider và 2 tab của bootstrap

  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $(".filtering4").slick("refresh");
  });
  // -----------------end khắc phục lỗi----------------------
});
