'use strict';

(function () {

  let hangSelect2 = function () {
    $(document).ready(function() {
      $('.select_unit').select2();
    });
  };

  let scrollBarСustomization = function () {
    $('body').overlayScrollbars({
      className: "os-theme-dark"
    });
  }

  let hangFlexslider = function () {
    $(document).ready(function() {
      $('.feedback__slider').flexslider({
        selector: ".feedback__slider_container > li",
        animation: "slide",
        slideshow: false,
        smoothHeight: true,
        keyboard: true,
        prevText: "",
        nextText: "",
        itemWidth: 350,
        itemMargin: 40,
        minItems: 1,
        maxItems: 3,
        controlNav: false
      });
    });
  }

  let getSlider = function () {
    $('.questions__answer_title').click( function (evt) {
      evt.preventDefault();
      $(evt.target).parents('.questions__answer').find('.questions__answer_text').slideToggle('slow');
      $(evt.target).parents('.questions__answer').find('.questions__answer_pointer').toggleClass('questions__answer_pointer_open');
    });
  };

  let getLink = function () {
    $('.landing__button_promo').click( function (evt) {
      evt.preventDefault();
      $('.landing__button_promo').addClass('display_none');
      $('.landing__label_promo').removeClass('display_none');
      $('.landing__button_promo').unbind('click');
    });
  };

  hangSelect2();
  scrollBarСustomization();
  hangFlexslider();
  getSlider();
  getLink();

})();
