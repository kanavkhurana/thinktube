$(function() {
    //Bind a submit handler to the form
    $("#search-term").submit(getYoutubeResults);
})

function getYoutubeResults() {
    event.preventDefault();

    //alert("Handler for .submit() called.");

    //});
    //console.log('Im similar to document.ready()!');
    
    //Clear previous search results
    $('#search-results').empty();
    
    getRequest(encodeURI($('#query').val()));
    
}
function getRequest(searchTerm){
	var params = {
    part: 'snippet',
    key: 'AIzaSyBtKJQKtpb02Q5j3DYnL0SEhOJYvfSfbpI',
    q:searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search'

  $.getJSON(url, params, function(data){
    showYoutubeThumbnails(data.items);
  });
}

function showYoutubeThumbnails(thumbnailArray) {
    $.each(thumbnailArray, function(index, value) {
        $('#search-results').append('<p><h1>' + value.snippet.title + '</h1>' + '<a href="https://www.youtube.com/watch?v='+ value.id.videoId+'\">'+'<img src='+"\""+value.snippet.thumbnails.high.url+"\"></a>"+'</p>');
    });
}
