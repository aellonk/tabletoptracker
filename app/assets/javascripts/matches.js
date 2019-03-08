$(function () {
	getNewMatchFormFromRails()
 })


// form: get the Rails form, pull it over as html
function getNewMatchFormFromRails() {
  $("form").submit(function (e) {
     e.preventDefault()

     let gameId = parseInt($(".gameName").attr("data-id"));
     
     // let newMatchFormPath = ("/games/" + gameId + '/matches/' + matchId + '.json');
debugger
	var values = $(this).serialize();
	var posting = $.post('/games/' + gameId + '/matches', values);
    posting.done(function(data) {
    let $div = $("#new-match-response");
	$div.append(data)    

	})
  })
}


