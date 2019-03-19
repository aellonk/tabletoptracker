$(function () {
	submitNewMatch()
 })


function submitNewMatch() {
  $("form").submit(function (e) {
     e.preventDefault()

     let gameId = parseInt($(".gameName").attr("data-id"));
     
     
	   var values = $(this).serialize();
	   var posting = $.post('/games/' + gameId + '/matches', values);
     posting.done(function(data) {
     let $div = $("#new-match-response");
	   $div.append(data)    
	})
  })
}


