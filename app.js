// single state object
var state = {
	items: []
};

//modifaction functions

var addItem = function(state, item) {
	state.items.push(item);
}

 var deleteItem = function(state,itemIndex) {
   	state.items.splice(itemIndex, 1);
    }



// Render functions

var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li> <span class="shopping-item">' + item + '</span>' +
        '<div class="shopping-item-controls">'+
        '<button class="shopping-item-toggle">'+ 
        '<span class="button-label">check</span>'+
        '</button>'+
        '<button class="shopping-item-delete">'+
        '<span class="button-label">delete</span>'+
        '</button>'+
        '</div>'+
        '</li>'
        
	});
    element.html(itemsHTML);
};



//event listeners
$(function() {

  $('#js-shopping-list-form').submit(function(event){
	event.preventDefault();
	addItem(state, $('#shopping-list-entry').val());
	renderList(state, $('.shopping-list'));

	$('.shopping-item-toggle').on('click', function(event){
	$(this).closest('li').toggleClass('shopping-item__checked');
	});

	$('.shopping-item-delete').on('click', function(event){
	 $(this).closest('li').remove();
	 deleteItem(state, +($('#shopping-list-entry')));
	});

  });

	

});
