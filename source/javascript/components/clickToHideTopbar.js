// Click To Hide Topbar

$(function () {

  var $topbarHideTrigger = $('.hide-topbar__trigger'),
      $topbar = $('.app-topbar');

  $topbarHideTrigger.on('click', function () {
    $(this).parents().toggleClass('app-topbar--hidden');
  });
});