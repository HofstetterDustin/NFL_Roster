function PlayersService(callback) {
    console.log(3)
    var playersData = [];

    // this.getPlayersByFirstName = function (firstName) {
    //     return playersData.filter(functionFirstName)
    //     if (player.firstName == firstName) {
    //         return true;
    //     }
    // }

    // this.getPlayersByLastName = function (lastName) {
    //     return playersData.filter(functionLastName)
    //     if (player.lastName == lastName) {
    //         return true;
    //     }
    // }

    // this.getPlayersByPosition = function (position) {
    //     return playersData.filter(functionPosition)
    //     if (player.position == position) {
    //         return true;
    //     }
    // }

    this.getByTeam = function getTeamName(teamName) {
        console.log(2)
        return playersData.filter(function (player) {
            if (player.team == teamName) {
                return true;
            }
        })
    }
    function loadPlayersData() {

        //Lets check the localstorage for the data before making the call.
        //Ideally if a user has already used your site 
        //we can cut down on the load time by saving and pulling from localstorage 

        var localData = localStorage.getItem('playersData');
        if (localData) {
            console.log(localStorage)
            playersData = JSON.parse(localData);
            return callback(playersData);
            //return will short-circuit the loadPlayersData function
            //this will prevent the code below from ever executing
            console.log(local - data)
        }

        var url = "https://bcw-getter.herokuapp.com/?url=";
        var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
        var apiUrl = url + encodeURIComponent(endpointUri);

        $.getJSON(apiUrl, function (data) {
            playersData = data.body.players;
            console.log('Writing Player Data to localStorage')
            localStorage.setItem('playersData', JSON.stringify(playersData))
            console.log('Finished Writing Player Data to localStorage')
            callback(playersData)

        });
        console.log(data)
    }
    loadPlayersData(); //call the function above every time we create a new service
}
















