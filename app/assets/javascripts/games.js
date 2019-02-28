$(function () {
	getGameInfo()
  
})



function getGameInfo() { 
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
	    	
	    	$(".gameName").append('<h3 class="game">'+data.name+'</h3>');
	      	

	      // for (var i = 0; i < data.matches.length; i++) {
       //  	var match = match[i];
       //  	$(".matchDate").append('<p class="match">'+match.match_date+'</p>');
    	  // };
 

	data.matches.map(match => {
		let matchUser = data.users.map(user => {
     		$(".gameName").append('<p>User: ' + user.name + '</p><p>Match Date: '+ match.match_date + '</p><p>Won? ' + match.win + '</p><br>');
    	})
      
    })

  
	     
	      // re-set the id to current on the link
	      $(".js-next").attr("data-id", data["id"]);
	    });
  });

    
	// });
}


// function getNextGame{

//  }