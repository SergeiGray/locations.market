'use strict';

(function () {

  var hangSelect2 = function () {
    $(document).ready(function() {
      $('select').select2();
    });
  };

  var scrollBarСustomization = function () {
    $('body').niceScroll({
      cursorcolor: "#CCCCCC",
      cursorborder: "none"
    });
    $('tbody').niceScroll({
      cursorcolor: "#CCCCCC",
      cursorborder: "none"
    });
    $('textarea').niceScroll({
      cursorcolor: "#CCCCCC",
      cursorborder: "none"
    });
    $('.select').click( function () {
      $('.select2-results__options').niceScroll({
      cursorcolor: "#CCCCCC",
      cursorborder: "none"
      });
    });
    $('.help__dialog_field').niceScroll({
      cursorcolor: "#CCCCCC",
      cursorborder: "none"
    });
  }

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
      let text = $(evt.target).val();
      let label = $(evt.target).parents('td').find('.main__coment_label');
      label.text(text);
      $(evt.target)[0].scrollWidth > $(evt.target).innerWidth() ? label.removeClass('my_proxy__coment_off') : label.addClass('my_proxy__coment_off');
    });

    $('.main__coment_text').mouseover( function (evt) {
      let label = $(evt.target).parents('td').find('.main__coment_label');
      let position = $(evt.target).offset();
      let height = label.height();
      label.attr('style', 'top: ' + (position.top - height - 25) + 'px;' + 'left: ' + (position.left - 50) + 'px;' );
    });
  };

  var copyText = function (buttonCopy, copyTextBlock) {
    $(buttonCopy).click( function(evt) {
      let copyText = document.getElementById(copyTextBlock);
      copyText.select();
      document.execCommand("copy");
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

}());
