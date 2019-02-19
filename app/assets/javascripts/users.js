$(function () {

  getUniqueGames()
    getMatches()
})


const getUniqueGames = () => {
  $("a.userName").on('click', function (e) {
    e.preventDefault();
    let userId = parseInt($(".userName").attr("data-id"));
    let userURL = ("/users/" + userId + ".json")

    $.get(userURL, function(data) {
    let $p = $("#user-games");
    let games = data.games;

    // find unique games based on name and ID
  var unique = games.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.id === value.id && t.name === value.name
      ))
    )

    // iterate over unique games and append the game name to the DOM
    for (var i = 0; i < unique.length; i++) {
    var game = unique[i];
    $p.append('<h2>'+ game.name +'</h2>');

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
        $table.append('<tr><td>' + match.match_date + '</td><td>' + match.win + '</td></tr>'
        );
        // find game name from match.game_id 
    };
    });
  });
}


class Game {
  constructor(obj) {
    this.id = obj.id
    this.name = obj.name
  }

  // class method, called with:  Game.newGameForm()
  static newGameForm() {
    return (`
      <form>
        <input type="text" placeholder="enter data here">
      </form>
    `)
  }
}

