$(document).ready( function() {
	// draggable
	$( "#draggable" ).draggable();
	// droppable
	$( "#droppable_1" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
    // resizable
    $( "#resizable" ).resizable();
    // selectable
    $( "#selectable" ).selectable();
    // sortable
    $( "#sortable" ).sortable();
});