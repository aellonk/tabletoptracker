$(function () {

  getUniqueGames()
   getNewGameFormFromRails()
 })


const getUniqueGames = () => {
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
    
      let newGame = new Game(game);
      let newGameHtml = newGame.gameHTML();
      $("#user-games").append(newGameHtml);
    
    // filter the unique games to show only this user's games
    var gameMatchList = game.matches.filter(match => 
      match.user_id === userId
    );

    // list the user's matches for each unique game
    let gameMatchInfo = gameMatchList.map(match => {
      $p.append('<tbody><tr><td>' + match.match_date + '</td><td>' + match.win + '</td></tr></tbody>'
);
    })
    };


    });

 }


// function getMatches() {
//   $("a.userName").on('click', function (e) {
//     e.preventDefault();
//     let userId = parseInt($(".userName").attr("data-id"));
//    	let userURL = ("/users/" + userId + ".json")
// 	$.get(userURL, function(data) {
// 		let $table = $("#user-matches");
// 		let matches = data.matches;
//       	for (var i = 0; i < matches.length; i++) {
//         var match = matches[i];
//         $table.append('<tr><td>' + match.match_date + '</td><td>' + match.win + '</td></tr>'
//         );
//         // find game name from match.game_id 
//     };
//     });
//   });
// }

class Game {
  constructor(obj) {
    this.id = obj.id
    this.name = obj.name
  }

}


// .gameHTML() is an instance method, called on an instance of Game class
Game.prototype.gameHTML = function () {
  return (`
    <a href="/games/${this.id}" ><h2>${this.name}</h2></a>
  `)
}

// form: get the Rails form, pull it over as html
function getNewGameFormFromRails() {
  $('a#get-new-game-form').on('click', function (e) {
     e.preventDefault()

     $.ajax({
       url: 'https://localhost:3000/games/new',
       method: 'get',
       dataType: 'html'
     }).done(function (response) {
       $('div#new-game-form').html(response);
     })
  })
}


