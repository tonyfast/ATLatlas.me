function CreateTable( data ){
// make simple table in jquery
var rows = data.split('\n');
var $table = $('<table class="table table-bordered"></table>').appendTo( 'body' );
$.each( rows, function(i,d){
  var $row = $('<tr></tr>').appendTo( $table );
  $.each( d.split(',') , function( i, d){
          $( $row ).append('<td>'+d+'</td>');
    return null;
  });//each.d
  return null;
}); //each.rows
return null;
};  //CreateTable