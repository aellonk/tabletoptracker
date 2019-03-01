$(function () {
	getNextGameInfo()
  
})




function getNextGameInfo() { 

    $(".js-next").on("click", function() {
	    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
	    $.get("/games/" + nextId + ".json", function(data) {
	    	
	    	$(".gameName").append('<h3 class="game">'+data.name+'</h3>');

	data.matches.map(match => {
		let matchUser = data.users.map(user => {
     		$(".gameName").append('<p>User: ' + user.name + '</p><p>Match Date: '+ match.match_date + '</p><p>Won? ' + match.win + '</p><br>');
    	})
      
    })
	     
	      // re-set the id to current on the link
	      $(".js-next").attr("data-id", data["id"]);
	    });
  });
}


