'use strict';

(function () {

  var hangSelect2 = function () {
    $(document).ready(function() {
      $('select').select2();
    });
  };

  var scrollBarСustomization = function () {
    $('body').niceScroll({ cursorcolor: "#CCCCCC", cursorborder: "none" });
    $('tbody').niceScroll({ cursorcolor: "#CCCCCC", cursorborder: "none" });
    $('.nicescroll').niceScroll({ cursorcolor: "#CCCCCC", cursorborder: "none" });
    $('.select').click( function () {
      $('.select2-results__options').niceScroll({ cursorcolor: "#CCCCCC", cursorborder: "none" });
    });
    $('.help__dialog_field').niceScroll({ cursorcolor: "#CCCCCC", cursorborder: "none" });
  };

  var getShowInMyProxy = function () {

    var check = function (itemCheck, itemShow, itemLink) {
        $(itemCheck).prop('checked') ? $(itemShow).removeClass('display_none') && $(itemLink).addClass('my_proxy__link_active') : $(itemShow).addClass('display_none') && $(itemLink).removeClass('my_proxy__link_active');
    };

    var checkEdit = function (itemCheck, itemShow, itemLink) {
        $(itemCheck).prop('checked') ? $(itemShow).removeClass('display_none') && $(itemLink).addClass('my_proxy__edit_link_active') : $(itemShow).addClass('display_none') && $(itemLink).removeClass('my_proxy__edit_link_active');
    };

    $(".my_proxy__navigation .input").change( function() {
        check('#show__filter', '.my_proxy__filter', '.show__filter');
        check('#show__choose', '.my_proxy__choose', '.show__choose');
        check('#show__edit', '.my_proxy__edit', '.show__edit');
        check('#show__auth', '.my_proxy__auth', '.show__auth');
        check('#show__export', '.my_proxy__export', '.show__export');
        check('#show__prolong', '.my_proxy__prolong', '.show__prolong');
    });

    $(".my_proxy__navigation .my_proxy__link").click( function(evt) {
      if ($(this).siblings('.input').prop('checked')) {
        evt.preventDefault();
        $('#show__none').trigger('click')
        check('#show__filter', '.my_proxy__filter', '.show__filter');
        check('#show__choose', '.my_proxy__choose', '.show__choose');
        check('#show__edit', '.my_proxy__edit', '.show__edit');
        check('#show__auth', '.my_proxy__auth', '.show__auth');
        check('#show__export', '.my_proxy__export', '.show__export');
        check('#show__prolong', '.my_proxy__prolong', '.show__prolong');
      };
      $('body').getNiceScroll().remove();
      $('body').niceScroll({cursorcolor: "#CCCCCC", cursorborder: "none"});
      $('tbody').getNiceScroll().remove();
      $('tbody').niceScroll({cursorcolor: "#CCCCCC", cursorborder: "none"});
    });

    $(".my_proxy__edit_nav .main__input").change( function() {
      checkEdit('#show__edit_login', '.my_proxy__edit_login', '.show__edit_login');
      checkEdit('#show__edit_comment', '.my_proxy__edit_comment', '.show__edit_comment');
      checkEdit('#show__edit_type', '.my_proxy__edit_type', '.show__edit_type');
    });
  };

  var getComentInMyProxy = function () {

    $(window).on("load", function() {
      $('.main__coment_text').each( function (index, el) {
        var label = $(el).parents('td').find('.main__coment_label');
        $(el)[0].scrollWidth > $(el).innerWidth() ? label.removeClass('my_proxy__coment_off') : label.addClass('my_proxy__coment_off');
      });
    });

    $('.main__coment_text').focusout( function (evt) {
      var text = $(evt.target).val();
      var label = $(evt.target).parents('td').find('.main__coment_label');
      label.text(text);
      $(evt.target)[0].scrollWidth > $(evt.target).innerWidth() ? label.removeClass('my_proxy__coment_off') : label.addClass('my_proxy__coment_off');
    });

    $('.main__coment_text').mouseover( function (evt) {
      var label = $(evt.target).parents('td').find('.main__coment_label');
      var position = $(evt.target).offset();
      var height = label.height();
      label.attr('style', 'top: ' + (position.top - height - 25) + 'px;' + 'left: ' + (position.left - 50) + 'px;' );
    });
  };

  var getComentInGroup = function () {
    var l = 0;

    $(window).on("load", function() {
      $('.group__coment_text').each( function (index, el) {
        var label = $(el).parents('td').find('.group__coment_label');
        $(el)[0].scrollWidth > $(el).innerWidth() ? label.removeClass('group__coment_off') : label.addClass('group__coment_off');
      });
    });

    $('.group__coment_text').focusout( function (evt) {
      var text = $(evt.target).val();
      var label = $(evt.target).parents('td').find('.group__coment_label');
      label.text(text);
      $(evt.target)[0].scrollWidth > $(evt.target).innerWidth() ? label.removeClass('group__coment_off') : label.addClass('group__coment_off');
    });

    $('.group__coment_text').mouseover( function (evt) {

      if(l === 0) {$('.group__coment_text').each( function (index, el) {
        var label = $(el).parents('td').find('.group__coment_label');
        $(el)[0].scrollWidth > $(el).innerWidth() ? label.removeClass('group__coment_off') : label.addClass('group__coment_off');
      }); l++}

    //   var label = $(evt.target).parents('td').find('.group__coment_label');
    //   var position = $(evt.target).position();
    //   var height = label.height();
    //   label.attr('style', 'top: ' + (position.top + 70 - height) + 'px;' + 'left: ' + (position.left) + 'px;' );
    // });


    var label = $(evt.target).parents('td').find('.group__coment_label');
    var position = $(evt.currentTarget).offset();
    var height = label.height();
    label.attr('style', 'top: ' + (position.top - height - 25) + 'px;' + 'left: ' + (position.left) + 'px;' );
    });

  };

  var copyText = function (buttonCopy, copyTextBlock) {
    $(buttonCopy).click( function(evt) {
      var copyText = document.getElementById(copyTextBlock);
      copyText.select();
      document.execCommand("copy");
    });
  };

  var showPopUpPricing = function () {
    $('.popup__close, .overlay').click(function (){
      $('.pricing, .overlay').css({'opacity': 0, 'display': 'none'});
    });
    $('.show__buy').click(function (event){
      event.preventDefault();
      $('.pricing, .overlay').css({'opacity': 1, 'display': 'flex'});
      $(document).keydown(function(event) {
          if (event.keyCode === 27) {
              event.stopPropagation();
              $('.pricing, .overlay').css({'opacity': 0, 'display': 'none'});
          }
      });
    });
  };

  var showPopUpGroup = function () {
    $('.popup__close, .overlay').click(function (){
      $('.group, .overlay').css({'opacity': 0, 'display': 'none'});
    });
    $('.history__open_group').click(function (event){
      event.preventDefault();
      $('.group, .overlay').css({'opacity': 1, 'display': 'flex'});
      $(document).keydown(function(event) {
          if (event.keyCode === 27) {
              event.stopPropagation();
              $('.group, .overlay').css({'opacity': 0, 'display': 'none'});
          }
      });
    });
  };

  var showPopUpMyProxySearch = function () {
    $('.popup__close, .overlay').click(function (){
      $('.my_proxy__search_pop_up, .overlay').css({'opacity': 0, 'display': 'none'});
    });
    $('.show__search_popup').click(function (event){
      event.preventDefault();
      $('.my_proxy__search_pop_up, .overlay').css({'opacity': 1, 'display': 'flex'});
      $(document).keydown(function(event) {
          if (event.keyCode === 27) {
              event.stopPropagation();
              $('.my_proxy__search_pop_up, .overlay').css({'opacity': 0, 'display': 'none'});
          }
      });
    });
  };

  var renameGroup = function () {
    $(".group__rename").click(function (evt) {
      evt.preventDefault();
      $('.group__title').prop('disabled',false);
      $('.group__rename').addClass('display_none');
      $('.group__submit').removeClass('display_none');
    });
    $('.group__submit').click(function (evt) {
      $('.group__title').prop('disabled',true);
      $('.group__submit').addClass('display_none');
      $('.group__rename').removeClass('display_none');
    });
  };

  hangSelect2();
  scrollBarСustomization();
  getShowInMyProxy();
  getComentInMyProxy();
  copyText('.partnership__promocode_copy', 'partnership__promocode');
  copyText('.partnership__ref_link_copy', 'partnership__ref_link');
  copyText('.checker__copy_work', 'checker__work');
  copyText('.checker__copy_not_working', 'checker__not_working');
  copyText('.converter__copy', 'converter__copy_field');
  showPopUpPricing();
  renameGroup();
  showPopUpGroup();
  showPopUpMyProxySearch();
  getComentInGroup();

}());
