// Popout Interaction

var $popoutTrigger = $('.popout__trigger'),
    $popout = $('.popout'),
    popoutActive = 'is-active';


$popoutTrigger.on('click', function(e) {
  e.preventDefault();

  $(this).parent('.popout__container').find($popout).toggleClass(popoutActive);
});