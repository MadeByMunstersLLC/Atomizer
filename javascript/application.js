function checkedCheckboxes(){return $("input[type=checkbox]:checked").length}var $checkboxEle=$(".checkbox-extras-panel"),$modulePanel=$(".module-extras-panel"),activeClass="is-active";$checkboxEle.change(function(){var e=checkedCheckboxes(),t=$(".checkboxes-badge"),a=e>=1;$(this).parents().find($modulePanel).toggleClass(activeClass,a),t.text(e)});var $hideLink=$(".hide-link"),$hideEle=$(".hide-element");$hideLink.on("click",function(e){e.preventDefault(),console.log("click"),$(this).parents().closest($hideEle).hide()}),$(function(){var e=$(".hide-topbar__trigger");$(".app-topbar");e.on("click",function(){$(this).parents().toggleClass("app-topbar--hidden")})});var $modalTrigger=$(".modal__trigger"),$modal=$(".modal"),$modalCloseTrigger=$(".modal__close"),$modalActive="modal--active";$modalTrigger.on("click",function(e){e.preventDefault();var t=$(this).data("modal");$(".modal").each(function(e,a){$(a).data("modal")===t&&($(a).toggleClass($modalActive),$(a).attr("aria-hidden","false"))})}),$modalCloseTrigger.on("click",function(e){e.preventDefault(),$(this).parents($modal).removeClass($modalActive),$modal.attr("aria-hidden","true")});var $popoutTrigger=$(".popout__trigger"),$popout=$(".popout"),popoutActive="is-active";$popoutTrigger.on("click",function(e){e.preventDefault(),$(this).toggleClass(popoutActive),$(this).parent(".popout__container").find($popout).toggleClass(popoutActive)}),$(document).ready(function(){$(".tabs ul li").on("click",function(e){e.preventDefault();var t=$(this).attr("data-tab"),a=$("#"+t).siblings(".tab__content");$tabLink=$(this).siblings(),activeClass="is-active",$.each($tabLink,function(e,t){$(t).removeClass(activeClass)}),a.removeClass(activeClass),$(this).addClass(activeClass),$("#"+t).addClass(activeClass)})});var $toggleHeader=$(".toggle__header"),$toggleTrigger=$(".toggle__trigger"),$toggleBody=$(".toggle__body"),activeClass="is-active";$toggleTrigger.on("click",function(e){e.preventDefault(),$(this).parent().siblings().toggleClass(activeClass),$(this).toggleClass(activeClass)});var $toggleElement=$(".toggle-element"),$toggleParent=$(".toggle-parent"),activeClass="is-active";$toggleElement.on("click",function(e){e.preventDefault(),$(this).toggleClass(activeClass)}),$toggleElement.on("click",function(e){e.preventDefault(),$(this).parents().closest($toggleParent).toggleClass(activeClass)});var $tableRowHidden=$(".table-row__toggle"),$tableToggleRow=$(".toggle-table-row__trigger"),$tableToggleTrigger=$(".toggle-table-row__trigger a");$tableToggleTrigger.on("click",function(e){e.preventDefault(),$(this).toggleClass("active"),$(this).hasClass("active")?$(this).text("Hide Archived Tests"):$(this).text("View Archived Tests"),$(this).parent().toggleClass("padding-bottom--charlie"),$(this).parent().parent().siblings().toggleClass("hidden")});var $alertShowTrigger=$("#alert-show-trigger"),$alert=$("#save-alert"),$alertCloseTrigger=$(""),activeClass="is-active";$alertShowTrigger.on("click",function(){$alert.addClass(activeClass),$alert.attr("aria-hidden","false"),setTimeout(function(){$alert.removeClass(activeClass),$alert.attr("aria-hidden","true")},3e3)});var $createScenario=$("#create-scenario"),$scenarioForm=$(".scenario-form");$(function(){$scenarioForm.hide(),$createScenario.change(function(){$scenarioForm.hide(),$("#"+$(this).val()).show(),$(".modal__actions").find("button").removeClass("button--disabled"),$(".modal__actions").find("button").addClass("button--alpha")})});var $showDetails=$("#show-test-details"),$hideDetails=$("#hide-test-details"),$pageSidebarGroup=$(".page-sidebar__group");$(function(){$.each($pageSidebarGroup,function(e){$(this).hasClass("is-active")?$(this).show():$(this).hide()})}),$showDetails.on("click",function(){$.each($pageSidebarGroup,function(e){$(this).hasClass("is-active")?($(this).hide(),$(this).removeClass("is-active")):($(this).show(),$(this).addClass("is-active"))}),$.each($(".highlight-test li.highlight--bravo"),function(e){5===e?$(this).addClass("highlight--charlie"):$(this).addClass("highlight--delta")})}),$hideDetails.on("click",function(){$.each($pageSidebarGroup,function(e){$(this).hasClass("is-active")?($(this).hide(),$(this).removeClass("is-active")):($(this).show(),$(this).addClass("is-active"))})});var $quickSearchInput=$("#quick-search-input"),$quickSearchContainer=$(".quick-search-container");$quickSearchInput.focus(function(e){$(this).siblings($quickSearchContainer).addClass("is-active")}).blur(function(){$(this).siblings($quickSearchContainer).removeClass("is-active")}),$(function(){$("html").bind("keydown",function(e){191==e.keyCode&&$quickSearchInput.focus()})});var $moduleSortable=$("#module-list--sortable");$(function(){$moduleSortable.sortable({placeholder:"module-card--dragged"})});var $toggleDetailsTrigger=$(".toggle-details-trigger"),$toggleDetails=$(".toggle-details"),$toggleDetailsDefault=$(".toggle-details-default"),$toggleDetailsActive="toggle-details--active";$toggleDetails.hide(),$toggleDetailsTrigger.on("click",function(e){e.preventDefault();var t=$(this).data("toggle");$(".toggle-details").each(function(e,a){$(a).data("toggle")===t?($(a).show(),$(a).attr("aria-hidden","false"),$toggleDetailsDefault.hide()):($(a).hide(),$(a).attr("aria-hidden","true"))})});