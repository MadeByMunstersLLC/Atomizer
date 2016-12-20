// Tabs Component Interaction
$(document).ready(function(){

  $('.tabs ul li').on('click', function(e) {
    e.preventDefault();
    var tabID = $(this).attr('data-tab'),
        $tabContent = $("#" + tabID).siblings('.tab__content');
        $tabLink = $(this).siblings();
        activeClass = 'is-active';

    $.each($tabLink, function(i, item) {
      $(item).removeClass(activeClass);
    })

    $tabContent.removeClass(activeClass);

    $(this).addClass(activeClass);
    $("#" + tabID).addClass(activeClass);
  });
});