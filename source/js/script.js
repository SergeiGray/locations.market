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

  hangSelect2();
  scrollBarСustomization();

})();
