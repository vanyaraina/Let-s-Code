class Game{
    constructor(){
        this.playermoving = false;
        this.leftkeyActive = false;
        this.leader1 = createElement("h2");
        this.leader2 = createElement("h2");
        this.leadersboard = createElement("h2");
    }


    getState(){
        var gamestateRef = database.ref("gameState");
        gamestateRef.on("value", (data) => {
            myGameState = data.val();
        })
    }

    updateState(statenumber){
        databse.ref("/").update({
            gameState: statenumber,
        })
    }
    start(){
        myform = new Form();
        myform.display();

        myplayer = new Player();
        myplayer.getCount();
        Player.getPlayerInfo();


        
    }

    play(){
        myform.hide();
    }



}