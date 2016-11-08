// Alert Save Show

var $alertShowTrigger = $('#alert-show-trigger'),
    $alert = $('#save-alert'),
    $alertCloseTrigger = $(''),
    activeClass = 'is-active';

$alertShowTrigger.on('click', function() {
  $alert.addClass(activeClass);
  $alert.attr('aria-hidden', 'false');

  setTimeout(function () {
    $alert.removeClass(activeClass);
    $alert.attr('aria-hidden', 'true');
  }, 3000);

});