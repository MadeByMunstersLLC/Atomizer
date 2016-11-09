// Init file for scenario demo


// Module Cards Sortable
var $moduleSortable = $('#module-list--sortable');

$(function () {
  $moduleSortable.sortable({
    placeholder: "module-card--dragged",
  });
});