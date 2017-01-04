// Toggle Details


  var $toggleDetailsTrigger = $('.toggle-details-trigger'),
      $toggleDetails = $('.toggle-details'),
      $toggleDetailsDefault = $('.toggle-details-default'),
      $toggleDetailsActive = 'toggle-details--active';

  // Init Values
  $toggleDetails.hide();

  // Show Details
  $toggleDetailsTrigger.on('click', function (e) {
    e.preventDefault();

    var detailsId = $(this).data('toggle');

    $('.toggle-details').each(function(index, details) {
      if ($(details).data('toggle') === detailsId) {
        $(details).show();
        $(details).attr('aria-hidden', 'false');
        $toggleDetailsDefault.hide();
      } else {
        $(details).hide();
        $(details).attr('aria-hidden', 'true');
      }
    });

  });