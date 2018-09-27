(function( $ ){
	$.fn.Load = function(filename) {
		this.load(filename);
		return this;
	}; 
})( jQuery );

function api(name, data, callback) {
	$.ajax({
		type: 'GET',                   
		url: '../api.php?api='+name,      
		data: data,
		success: function(data){callback(data);}
	});
}