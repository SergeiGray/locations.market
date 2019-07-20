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
      if($(window).width() > 1190) {
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
          controlNav: false,
          touch: true,
          move: 1
        });
        $('.landing__slider').flexslider({
          selector: ".landing__slider_container > li",
          animation: "slide",
          slideshow: false,
          smoothHeight: true,
          keyboard: true,
          prevText: "",
          nextText: "",
          itemWidth: 145,
          itemMargin: 60,
          minItems: 1,
          maxItems: 3,
          controlNav: false,
          touch: true,
          move: 1
        });
      };
      if($(window).width() < 750) {
        $('.feedback__slider').flexslider({
          selector: ".feedback__slider_container > li",
          animation: "slide",
          slideshow: false,
          smoothHeight: true,
          keyboard: true,
          prevText: "",
          nextText: "",
          itemWidth: 220,
          itemMargin: 25,
          minItems: 1,
          maxItems: 3,
          controlNav: false,
          touch: true,
          move: 1
        });
        $('.landing__slider').flexslider({
          selector: ".landing__slider_container > li",
          animation: "slide",
          slideshow: false,
          smoothHeight: true,
          keyboard: true,
          prevText: "",
          nextText: "",
          itemWidth: 100,
          itemMargin: 25,
          minItems: 2,
          maxItems: 6,
          controlNav: false,
          touch: true,
          move: 1
        });
      };
      if($(window).width() < 1190) {
        $('.feedback__slider').flexslider({
          selector: ".feedback__slider_container > li",
          animation: "slide",
          slideshow: false,
          smoothHeight: true,
          keyboard: true,
          prevText: "",
          nextText: "",
          itemWidth: 300,
          itemMargin: 25,
          minItems: 1,
          maxItems: 3,
          controlNav: false,
          touch: true,
          move: 1
        });
        $('.landing__slider').flexslider({
          selector: ".landing__slider_container > li",
          animation: "slide",
          slideshow: false,
          smoothHeight: true,
          keyboard: true,
          prevText: "",
          nextText: "",
          itemWidth: 100,
          itemMargin: 60,
          minItems: 4,
          maxItems: 6,
          controlNav: false,
          touch: true,
          move: 1
        });
      };
    });
  };

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

  let showHeaderNav = function () {
    if($(window).width() < 1190) {
      $('.header__nav_close, .overlay').click(function (){
        $('.header__nav, .overlay').css({'opacity': 0, 'display': 'none'});
      });
      $('.header__nav_open').click(function (event){
        event.preventDefault();
        $('.header__nav, .overlay').css({'opacity': 1, 'display': 'flex'});
        $(document).keydown(function(event) {
            if (event.keyCode === 27) {
                event.stopPropagation();
                $('.header__nav, .overlay').css({'opacity': 0, 'display': 'none'});
            }
        });
      });
    };
  };

  let showPopUpLogIn = function () {
    $('.popup__close, .overlay').click(function (){
      $('.popup__login, .overlay').css({'opacity': 0, 'display': 'none'});
    });
    $('.popup__login_open').click(function (event){
      event.preventDefault();
      $('.popup__registration').css({'display': 'none'});
      $('.popup__login, .overlay').css({'opacity': 1, 'display': 'flex'});
      $(document).keydown(function(event) {
          if (event.keyCode === 27) {
              event.stopPropagation();
              $('.popup__login, .overlay').css({'opacity': 0, 'display': 'none'});
          }
      });
    });
  };

  let showPopUpRegistration = function () {
    $('.popup__close, .overlay').click(function (){
      $('.popup__registration, .overlay').css({'opacity': 0, 'display': 'none'});
    });
    $('.popup__registration_open').click(function (event){
      event.preventDefault();
      $('.popup__login').css({'display': 'none'});
      $('.popup__registration, .overlay').css({'opacity': 1, 'display': 'flex'});
      $(document).keydown(function(event) {
          if (event.keyCode === 27) {
              event.stopPropagation();
              $('.popup__registration, .overlay').css({'opacity': 0, 'display': 'none'});
          }
      });
    });
  };

  let showPopUpFeedback = function () {
    $('.popup__close, .overlay').click(function (){
      $('.popup__feedback, .overlay').css({'opacity': 0, 'display': 'none'});
    });
    $('.popup__feedback_open').click(function (event){
      event.preventDefault();
      $('.popup__feedback, .overlay').css({'opacity': 1, 'display': 'flex'});
      $(document).keydown(function(event) {
          if (event.keyCode === 27) {
              event.stopPropagation();
              $('.popup__feedback, .overlay').css({'opacity': 0, 'display': 'none'});
          }
      });
    });
  };

  hangSelect2();
  scrollBarСustomization();
  hangFlexslider();
  getSlider();
  getLink();
  showHeaderNav();
  showPopUpLogIn();
  showPopUpRegistration();
  showPopUpFeedback();

})();
