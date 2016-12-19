// Show + Hide A/B Test Details

var $showDetails = $('#show-test-details'),
    $hideDetails = $('#hide-test-details'),
    $pageSidebarGroup = $('.page-sidebar__group');

// Default Visibility
$(function () {
  $.each($pageSidebarGroup, function (i) {
    if($(this).hasClass('is-active')){
      $(this).show();
    } else {
      $(this).hide();
    }
  })
});

$showDetails.on('click', function () {
  $.each($pageSidebarGroup, function (i) {
    if($(this).hasClass('is-active')){
      $(this).hide();
      $(this).removeClass('is-active');
    } else {
      $(this).show();
      $(this).addClass('is-active');
    }
  });

  // Add Class For Hightlights
  $.each($('li.highlight--bravo'), function (i) {
    if(i === 5) {
      $(this).addClass('highlight--charlie');
    } else {
      $(this).addClass('highlight--delta');
    }
  });

});

$hideDetails.on('click', function () {
  $.each($pageSidebarGroup, function (i) {
    if($(this).hasClass('is-active')){
      $(this).hide();
      $(this).removeClass('is-active');
    } else {
      $(this).show();
      $(this).addClass('is-active');
    }
  })
});

