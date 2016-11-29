// Toggle Table Row

var $tableRowHidden = $('.table-row__toggle'),
    $tableToggleRow = $('.toggle-table-row__trigger'),
    $tableToggleTrigger = $('.toggle-table-row__trigger a');

$tableToggleTrigger.on('click', function (e) {
  e.preventDefault();

  $(this).toggleClass('active');
  if($(this).hasClass('active')) {
    $(this).text('Hide Archived Tests')
  } else {
    $(this).text('View Archived Tests')
  }

  $(this).parent().toggleClass('padding-bottom--charlie');
  $(this).parent().parent().siblings().toggleClass('hidden');
});