// Click to hide interaction

var $hideLink = $('.hide-link'),
    $hideEle = $('.hide-element');

$hideLink.on('click', function (e) {
  e.preventDefault();

  console.log('click');

  $(this).parents().closest($hideEle).hide();
});