$(function () {
	getNextGameInfo()
  
})




function getNextGameInfo() { 

    $(".js-next").on("click", function() {
	    var nextId = parseInt($(".js-next").attr("data-id")) + 1;
	    $.get("/games/" + nextId + ".json", function(data) {
	    	
	    $(".gameName").append(`
	    	<section class="jumbotron text-center">
    		<div class="container">
    		<h1 class="jumbotron-heading">${data.name}</h1>
			</div>
			</section>`);

		data.matches.map(match => {
			let matchUser = data.users.map(user => {
	     		$(".gameName").append(`
	     			<div class="album py-5 bg-light">
					<div class="container">
					<div class="row">
	     			<div class="col-md-12">
	     			<div class="card mb-4 shadow-sm">
	     			<div class="card-body">
	     			<p class="card-text">Player: ${user.name} </p>
	     			<p class="card-text">Match Date: ${ match.match_date}</p>
	     			<p class="card-text">Win? ${match.win}</p>
	     			</div>
	     			</div>
	     			</div>
	     			</div>
	     			</div>
	     			</div>
	     		`);
	    	})
	      
	    })
	     
	      // re-set the id to current on the link
	      $(".js-next").attr("data-id", data["id"]);
	    });
  });
}


