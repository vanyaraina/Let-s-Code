class Form{
    constructor(){
        this.logo = createImg("./assets/logo.png");
        this.input = createInput(" ").attribute("placeholder", "Enter your name");
        this.button = createButton("Let's Go!");
        this.greeting = createElement("h2");
    }

    setPosition(){
        this.logo.position(width/2-800, height/2-390);
        this.input.position(width/2 -670, height/2 + 10);
        this.button.position(width/2 - 659, height/2 + 70);
        this.greeting.position(width/2 - 540, height/2 + 50);
    }

    setStyle(){
        this.input.class("box");
        this.button.class("box");
        this.greeting.class("greeting");

    }

    handleButtonPressed(){
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            var message  = `Hello ${this.input.value()},
            <br/> Please wait for another player to join!`;
            this.greeting.html(message);
            myPlayerCount +=1;
            myplayer.index = myPlayerCount;
            myplayer.name = this.input.value();
            myplayer.updateCount(myPlayerCount);
            myplayer.addplayers();
            myplayer.getDistance();
            
        })
    }

    display(){
        this.setPosition();
        this.setStyle();
        this.handleButtonPressed();
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
}