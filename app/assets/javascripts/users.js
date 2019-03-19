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
      $p.append(newGameHtml);

      $p.append('<thead><tr><th scope="col">Date Played</th><th scope="col">Won?</th></tr></thead>');
         
    // filter the unique games to show only this user's games
    var gameMatchList = game.matches.filter(match => 
      match.user_id === userId
    );



    // sort the user's matches for each game by date, most recent first
    let gameMatchInfo = gameMatchList.sort(function(a,b) {
      return new Date(b.match_date) - new Date(a.match_date);
    });
    
    // list the user's matches for each unique game
    gameMatchInfo.map(match => {
      $p.append('<tbody><tr><td>' + match.match_date + '</td><td>' + match.win + '</td></tr></tbody>'
    );
    })
    };


    });

 }


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


