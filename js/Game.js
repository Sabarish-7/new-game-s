class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      
      }
      form = new Form()
      form.display();
      target= createSprite(100,650);
      target.addImage(targetimg);
      target.scale=0.2
    player1 = createSprite(100,650);
    player1.addImage(players1);
    player1.scale=0.7
    player2 = createSprite(100,550);
    player2.addImage(players2);
    player2.scale=1
    players = [player1, player2];
  }
  
}

  play(){
    form.hide();
    image(bg1,0,0,1500,1000);
      
   Player.getPlayerInfo();
    if(allPlayers !== undefined){

      var index = 0;
      var x = 175 ;
      var y;
      for(var plr in allPlayers){
        index = index + 1 ;
        x = x + 200;
        x= displayWidth - allPlayers[plr].distance;
        players[index-1].x = x;

        players[index-1].depth+=10;
      }
      textSize(25);
    fill("white");
   text(allPlayers.player1.name + ":" +allPlayers.player1.score,50,50);
   text(allPlayers.player2.name + ":" + allPlayers.player2.score, 50, 100);}
    target.x=player.target;

     // if(index === player.index){           
  // }   

    if(frameCount%80===0){
      
      enemy = createSprite(random(100,1000),Math.round(random(400,490)),10,10);
      enemy.addImage(enemies);
      enemy.scale=0.5
      enemy.velocityX=random(-10,10);
           enemy.depth-=2;
           enemyG.add(enemy)
      }
 
 console.log(enemyG.depth)
    
   drawSprites();
  
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=10
    
      player.update();
     
      player.target-=20
      

    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance -=1
      player.update();
      player.target=player.distance
    }
     
    if(keyWentUp("space") && player.index !== null){
        bullet=createSprite(100,650, 60, 10);
        bullet.addImage(bullets);
        bullet.x = player.target;
        bullet.velocityY = -4;
       bullet.scale =-0.1;
       bulletG.add(bullet);
    }
  
} }