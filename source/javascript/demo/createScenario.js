// Create New Scenario

// Variables
var $createScenario = $('#create-scenario'),
    $scenarioForm = $('.scenario-form');

$(function() {
  $scenarioForm.hide();

  $createScenario.change(function(){
    $scenarioForm.hide();
    $('#' + $(this).val()).show();

    $('.modal__actions').find('button').removeClass('button--disabled');
    $('.modal__actions').find('button').addClass('button--alpha');
  });
});