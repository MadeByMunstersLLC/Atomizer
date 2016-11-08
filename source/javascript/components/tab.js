// Tabs Component Interaction
var $tabLink = $('.tab__item-link');

$(document).ready(function() {
  $tabLink.on('click', function(e)  {
    e.preventDefault();
    e.stopPropagation();

    var currentAttrValue = $(this).attr('href'),
        $tabParent = $('.tab__item'),
        activeClass = 'is-active';

    // Show/Hide Tabs
    $('.tabs ' + currentAttrValue).show().siblings().hide();

    // Change/remove current tab to active
    $(this).parent($tabParent).addClass(activeClass).siblings().removeClass(activeClass);

  });
});