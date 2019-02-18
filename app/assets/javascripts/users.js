$(function () {
  getMatches();
  getUniqueGames();
})


function getUniqueGames() {
  $("a.userName").on('click', function (e) {
    e.preventDefault();
    let userId = parseInt($(".userName").attr("data-id"));
    let userURL = ("/users/" + userId + ".json")

    $.get(userURL, function(data) {
    let $ul = $("#user-games");
    let games = data.games;


  var unique = games.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.id === value.id && t.name === value.name
      ))
    )


        for (var i = 0; i < unique.length; i++) {
        var game = unique[i];
        $ul.append('<li class="game">'+ game.id +'</li>' +
                  '<li class="game">'+ game.name +'</li>');
    };
    });

  });
 }


function getMatches() {
  $("a.userName").on('click', function (e) {
    e.preventDefault();
    let userId = parseInt($(".userName").attr("data-id"));
   	let userURL = ("/users/" + userId + ".json")
	$.get(userURL, function(data) {
		let $table = $("#user-matches");
		let matches = data.matches;
      	for (var i = 0; i < matches.length; i++) {
        var match = matches[i];
        $table.append('<thead><tr><th scope="col">Date Played</th><th scope="col">Won?</th></tr></thead><tbody><tr><td>' + match.match_date + '</td><td>' + match.win + '</td></tr></tbody>'


          // '<li class="match">'+ match.game_id +'</li>' +
          //         '<li class="match">'+ match.win +'</li>'
                  );
    };
    });
  });
}