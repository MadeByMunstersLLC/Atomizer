// Add Active With Checkbox Interaction

// Global Variables
var $checkboxEle = $('.checkbox-extras-panel'),
    $modulePanel = $('.module-extras-panel'),
    activeClass = 'is-active';


// Checkboxes checked?
function checkedCheckboxes() {
  return $('input[type=checkbox]:checked').length;
}

// Add active if checkbox is selected
$checkboxEle.change( function() {

  var checkboxesChecked = checkedCheckboxes(),
      $checkboxesCheckedLength = $('.checkboxes-badge'),
      isClassAdded = checkboxesChecked >= 1;

  $(this).parents().find($modulePanel).toggleClass(activeClass, isClassAdded);

  $checkboxesCheckedLength.text(checkboxesChecked);
});