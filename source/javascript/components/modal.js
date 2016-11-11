// Modal Component Interaction

var $modalTrigger = $('.modal__trigger'),
    $modal = $('.modal'),
    $modalCloseTrigger = $('.modal__close'),
    $modalActive = 'modal--active';

$modalTrigger.on('click', function (event) {

  event.preventDefault();
  var modalId = $(this).data('modal');
  $('.modal').each(function(index, modal) {
    if ($(modal).data('modal') === modalId) {
      $(modal).toggleClass($modalActive);
      $(modal).attr('aria-hidden', 'false');
    }
  });

});

$modalCloseTrigger.on('click', function (event) {
  event.preventDefault();
  $(this).parents($modal).removeClass($modalActive);
  $modal.attr('aria-hidden', 'true');
});