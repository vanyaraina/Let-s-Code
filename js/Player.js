class Player{
    constructor(){
        this.index = null
        this.name = null
        this.positionX = 0
        this.positionY = 0
        this.rank = 0
        this.fuel = 180
        this.life = 180
        this.score = 0
    }

    getCount(){
        var playercountRef = database.ref("playerCount")
        playercountRef.on("value", (data) => {
            myPlayerCount = data.val()
        })
    }

    addplayers(){
        var playerindex = "players/player" + this.index

        if(this.index === 1){
            this.positionX = width/2 -100
        }

        else{
            this.positionX = width/2+100
        }

        database.ref(playerindex).set({
            index: this.index,
            name: this.name,
            positionX: this.positionX,
            positionY: this.positionY,
            rank: this.rank,
            fuel: this.fuel,
            life: this.life,
            score: this.score
        })
    }

    updateCount(countNumber){
        database.ref("/").update({
            playerCount: countNumber
        })
    }

    getDistance(){
        var playerDistanceRef = database.ref("players/player"+index);
        playerDistanceRef.on ("value", (data) => {
            var distance = data.val();
            this.positionX = distance.positionX;
            this.positionY = distance.positionY;
        }
        
        )
        
    }
        updatePlayer(){
            var playerRef = "players/player" + this.index;
            database.ref(playerRef).update({
                index: this.index,
                name: this.name,
                positionX: this.positionX,
                positionY: this.positionY,
                rank: this.rank,
                fuel: this.fuel,
                life: this.life,
                score: this.score
            })
        }

        static getPlayerInfo(){
            var playerRef = database.ref("players")
            playerRef.on("value", data =>{
                allplayers = data.val()
            })
        }

}