// Hide + Show Quick Search

// Variables
var $quickSearchInput = $('#quick-search-input'),
    $quickSearchContainer = $('.quick-search-container');


// Toggle Quick Search
$quickSearchInput.focus(function (e) {
  $(this).siblings($quickSearchContainer).addClass('is-active');
}).blur(function () {
  $(this).siblings($quickSearchContainer).removeClass('is-active');
});

$(function () {
  $("html").bind("keydown", function (e) {
    if (e.keyCode == 191) {
      $quickSearchInput.focus();
    };
  });
});