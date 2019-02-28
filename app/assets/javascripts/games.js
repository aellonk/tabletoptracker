$(function () {
	getGame()
  
})



function getGame() { 
	// var $ul = $('#user-games');
	// var gameId = parseInt($(".gameName").attr("data-id"));
 //   	var gameUrl = "/games/" + gameId + ".json";
	// $.get(gameUrl, function (data) {
 //    	games = data.response.name;
    	
 //    	for (var i = 0; i < games.length; i++) {
 //        var game = game[i];
 //        $ul.append('<li class="game">'+game+'</li>');
 //    	};



    $(".js-next").on("click", function() {
	    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
	    $.get("/games/" + nextId + ".json", function(data) {
	      $(".matchDate").text(data["matches"]);
	     
	      // re-set the id to current on the link
	      $(".js-next").attr("data-id", data["id"]);
	    });
  });

    
	// });
}


function getNextGame{

 }