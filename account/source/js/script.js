'use strict';

(function () {

  let getShowInMyProxy = function () {

    var check = function (itemCheck, itemShow, itemLink) {
        $(itemCheck).prop('checked') ? $(itemShow).removeClass('display_none') && $(itemLink).addClass('my_proxy__link_active') : $(itemShow).addClass('display_none') && $(itemLink).removeClass('my_proxy__link_active');
    };

    // var checkEdit = function (itemCheck, itemShow, itemLink) {
    //     $(itemCheck).prop('checked') ? $(itemShow).removeClass('display_none') && $(itemLink).addClass('my_proxy__edit_link_active') : $(itemShow).addClass('display_none') && $(itemLink).removeClass('my_proxy__edit_link_active');
    // };

    $(".my_proxy__navigation .input").change( function() {
        check('#show__filter', '.my_proxy__filter', '.show__filter');
        check('#show__choose', '.my_proxy__choose', '.show__choose');
        check('#show__change', '.my_proxy__change', '.show__change');
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
        check('#show__change', '.my_proxy__change', '.show__change');
        check('#show__auth', '.my_proxy__auth', '.show__auth');
        check('#show__export', '.my_proxy__export', '.show__export');
        check('#show__prolong', '.my_proxy__prolong', '.show__prolong');
      };
    });

    // $(".my_proxy__edit_nav .main__input").change( function() {
    //   checkEdit('#show__edit_login', '.my_proxy__edit_login', '.show__edit_login');
    //   checkEdit('#show__edit_comment', '.my_proxy__edit_comment', '.show__edit_comment');
    //   checkEdit('#show__edit_type', '.my_proxy__edit_type', '.show__edit_type');
    // });
  };

  getShowInMyProxy();

}());
