var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');
var $btnMove = $('.btn-move');
var $diamond = $('.diamond');
var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel');
var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');
var $btnAppend = $('.btn-append');
var $list = $('.list');

$btnShowHide.on('click', function (){
	$box.toggleClass('js-btn-show-hide');
	//console.log ('btnShowHide');
});

$btnMove.on('click', function () {
		$diamond.toggleClass('js-diamond');
});

$btnCollapseExpand.on('click', function () {
		$panel.toggleClass('js-panel');
});

$btnBounce.on('click', function (){
	$circle.addClass('js-circle-bounce');
});

//$btnBounce.on('click', function () {
  //$circle.removeClass('js-circle-bounce');
//});

//$btnBounce.on('webkitAnimationEnd animationend', function () {
  //$circle.removeClass('js-circle-bounce');
//});

//$btnBounce.on('click', function (){
	//$circle.removeClass('js-circle-bounce');
//});

//$circle.on('animationend', function(){
	//$circle.removeClass('js-circle-bounce');
//})

$circle.on('animationend', function(){
	console.log('animation finished');
});

$btnAppend.on('click', function(){
	var $li = $('<li>');
	$li.html('New List Item');
	$list.prepend($li);
	$li.addClass('js-list-down');
});

