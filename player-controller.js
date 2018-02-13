function PlayersController() {

    var loading = false; //Start the spinner
    var playersService = new PlayersService(drawPlayers);
    var filteredPlayers = []
        function ready() {
            loading = true; //stop the spinner
    console.log("done")
           
        }
    

//should be the button function for getByTeam 
    this.getByTeam = function getByTeam(e) {
        e.preventDefault()
        // debugger
        var teamName = e.target.teamName.value
        filteredPlayers = playersService.getByTeam(teamName)
        console.log(filteredPlayers)
        drawPlayers(filteredPlayers)
    }

    function drawPlayers(arr) {
        var rosterElem = document.getElementById('roster')
        var template = ''
        for (var i = 0; i < arr.length; i++) {
            var player = arr[i]
            player.lastName = player.lastName ? player.lastname : 'Player is working on his green-card'
            player.position = player.position ? player.position : 'Inverted'
            player.firstName = player.firstname ? player.firstname : 'Player has no name, unloved as a child'
            player.pro_team = player.pro_team ? player.pro_team : 'Player has personal odor issues, aka not wanted'
            template += `
                <div class="col">
                <img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="blank" class="card-img-top img-fluid">
                
                <h5>First Name:${player.firstname}</h5>
                <h5>Last Name:${player.lastname}</h5>
                <h5>Position:${player.position}</h5>
                <h6>Team:${player.pro_team}</h6>
                </div>
                
            
            `
        }
        rosterElem.innerHTML = template
    }

}