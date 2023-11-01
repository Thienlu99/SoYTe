$(document).ready(function () {
  // --------câu hỏi di chuyển

  $(".klk-collapse-item-main-toggle").each(function () {
    var $toggleTitle = $(this).find(".klk-collapse-item-header-inner");
    var $toggleIcon = $toggleTitle.find(".toggle-icon");
    var $content = $(this).find(".klk-collapse-item-content");
    var $bgheader = $toggleTitle.closest(".FQ--home .klk-collapse-item-header");
    var $colorheader = $(this).find(".klk-collapse-item-title.home--klk h5");

    $toggleTitle.click(function () {
      // Đóng tất cả các div khác
      // $(".klk-collapse-item-content")
      //   .not($content)
      //   .slideUp("slow", function () {
      //     // Sau khi hoàn thành đóng, thay đổi biểu tượng
      //     $(".toggle-icon")
      //       .removeClass("fa-chevron-up")
      //       .addClass("fa-chevron-down");
      //   });

      // Nếu phần tử được click là mở, thì đóng nó, ngược lại thì mở nó
      if ($content.is(":visible")) {
        $content.slideUp("slow", function () {
          $toggleIcon.removeClass("fa-chevron-up").addClass("fa-chevron-down");
          $bgheader.css("background", ""); // Trả lại màu nền ban đầu (mặc định)
          $colorheader.css("color", "");
        });
      } else {
        $content.slideDown("slow", function () {
          $toggleIcon.removeClass("fa-chevron-down").addClass("fa-chevron-up");
          $bgheader.css("background", "var(--primary)");
          $colorheader.css("color", "white");
        });
      }
    });
  });
  // -----------end dropdown----------
  // capcha
  function generateCaptcha() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters[randomIndex];
    }
    return captcha;
  }
  const captchaElement = $("#captcha");
  const refreshButton = $("#refresh");
  function refreshCaptcha() {
    const newCaptcha = generateCaptcha();
    captchaElement.text(newCaptcha);
  }
  refreshButton.click(refreshCaptcha);
  // Initialize CAPTCHA when the page loads
  refreshCaptcha();
  // ------------end capcha---------

  // ----------menu----------------

  // ----menu responsive--------------
  // Bắt sự kiện click trên thẻ cha <li>
  $(".nav__mobile-list i").click(function () {

    var megamenu = $(this).parent().find(".megamenu--mobile");     // Tìm thẻ con <ul> của thẻ cha

 
    if (megamenu.length > 0) {    // Nếu thẻ con tồn tại, thay đổi trạng thái hiển thị bằng slideToggle
      megamenu.slideToggle();
    }
  });
  //  ----------show more page 14--------------
  $("p[id^='show-more--page14']").click(function() {
    var content = $(this).prev(".content--td--page14");
    if (content.hasClass("expanded")) {
      content.removeClass("expanded");
      $(this).text("Xem thêm");
    } else {
      content.addClass("expanded");
      $(this).text("Ẩn bớt");
    }
});
});
