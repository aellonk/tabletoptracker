$(function () {
  getMatches();
})






function getMatches() {
  $("a.userName").on('click', function (e) {
    e.preventDefault();
    let userId = parseInt($(".userName").attr("data-id"));
   	let userURL = ("/users/" + userId + ".json")
	$.get(userURL, function(data) {
		let $ul = $("#user-games");
		let matches = data.matches;
      	for (var i = 0; i < matches.length; i++) {
        var match = matches[i];
        $ul.append('<li class="match">'+ match.game_id +'</li>' +
                  '<li class="match">'+ match.win +'</li>');
    };
    });
  });
}