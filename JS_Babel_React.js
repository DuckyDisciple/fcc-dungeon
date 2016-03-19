var dungeonWidth = 50;
var dungeonHeight = 40;

var Stats = React.createClass({
  render: function(){
    return (
      <div className="stats">
        <p className="health">Health: {this.props.health}</p>
        <p className="xp">XP: {this.props.xpCur}/{this.props.xpNext}</p>
        <p className="weapon">Weapon: {this.props.weapon}</p>
        <p className="level">Level: {this.props.level}</p>
      </div>
    );
  }
});

var Game = React.createClass({
  render: function(){
    var board = this.props.dungeon;
    var boardLayout = board.map(function(col){
      return (
        <div className="col">
          {col.map(function(row){
            if(row===0){
              return <div className="square wall"></div>;
            }else if(row===1){
              return <div className="square floor"></div>;
            }else if(row===2){
              return <div className="square player"></div>;
            }else if(row===3){
              return <div className="square enemy">Y</div>;
            }else if(row===4){
              return <div className="square health">+</div>;
            }
      })}
        </div>
      );
    });
    return (
      <div className="game">
        {boardLayout}
      </div>
    );
  }
});

var Container = React.createClass({
  getInitialState: function(){
    return {dungeon: [], mounted: false, player: null, health: 100, xpCurrent: 0, xpNext: 100, weapon: "fist", level: 1, strength: 5, enemies: [], enemyStrength: 3, weaponItem: null, exit: null};
  },
  componentDidMount: function(){
    this.setState({mounted: true});
    this.generateDungeon();
    document.addEventListener("keydown", this.move);
  },
  generateDungeon: function(){
    var dungeon = [];
    for(var i=0; i<dungeonWidth; i++){
      var col = [];
      for(var j=0; j<dungeonHeight; j++){
        if(i===0 || i===dungeonWidth-1 || j===0 || j===dungeonHeight-1){
          col.push(0);
        }else{
          col.push(1);
        }
      }
      dungeon.push(col);
    }
    var pX = 2;   //Add Player
    var pY = 2;
    dungeon[pX][pY] = 2;
    var healthCount = 4;    //Add Health
    while(healthCount>0){
      var hX = Math.round(Math.random()*(dungeonWidth-2))+1;
      var hY = Math.round(Math.random()*(dungeonHeight-2))+1;
      if(dungeon[hX][hY]===1){
        dungeon[hX][hY] = 4;
        healthCount--;
      }
    }
    var enemyCount = 5;   //Add Enemies
    var enemyList = [];
    while(enemyCount>0){
      var eX = Math.round(Math.random() * (dungeonWidth-2)) + 1;
      var eY = Math.round(Math.random() * (dungeonHeight-2)) + 1;
      if(dungeon[eX][eY]===1){
        dungeon[eX][eY] = 3;
        enemyList.push({x:eX, y:eY, health: 20});
        enemyCount--;
      }
    }
    this.setState({dungeon: dungeon, player: {x:pX,y:pY}, enemies: enemyList});
  },
  move: function(e){
    var board = this.state.dungeon;
    var pX = this.state.player.x;
    var pY = this.state.player.y;
    
    switch(e.keyCode){
      case 37:
      case 65:
        this.moveSpace(-1,0);
        break;
      case 38:
      case 87:
        this.moveSpace(0,-1);
        break;
      case 39:
      case 68:
        this.moveSpace(1,0);
        break;
      case 40:
      case 83:
        this.moveSpace(0,1);
        break;
    }
    
  },
  moveSpace: function(xAmt, yAmt){
    var allowMove = false;
    var board = this.state.dungeon;
    var pX = this.state.player.x;
    var pY = this.state.player.y;
    var newHealth = this.state.health;
    if(board[pX+xAmt][pY+yAmt]!==0){
      if(board[pX+xAmt][pY+yAmt]===3){
        if(this.fightWon(pX+xAmt,pY+yAmt)){
          allowMove = true;
        }
        newHealth = this.state.health;
      }else{
        allowMove = true;
      }
      if(allowMove){
        if(board[pX+xAmt][pY+yAmt]===4){
          newHealth+=10;
        }
        board[pX][pY] = 1;
        pX+=xAmt;
        pY+=yAmt;
        board[pX][pY] = 2;
      }
    }
    this.setState({player: {x: pX,y:pY}, dungeon: board, health: newHealth});
  },
  fightWon: function(eX, eY){
    var allEnemies = this.state.enemies;
    var curEnemyIndex;
    var myHealth = this.state.health;
    var myXp = this.state.xpCurrent;
    var nextXp = this.state.xpNext;
    var myLevel = this.state.level;
    for(var i in allEnemies){
      if(allEnemies[i].x===eX && allEnemies[i].y===eY){
        curEnemyIndex = i;
        break;
      }
    }
    allEnemies[curEnemyIndex].health-=this.state.strength;
    var victory = true;
    if(allEnemies[curEnemyIndex].health > 0){
      victory = false
      myHealth-=this.state.enemyStrength;
    }else{
      allEnemies.splice(curEnemyIndex, 1);
      myXp+=40;
      if(myXp>nextXp){
        myXp-=nextXp;
        nextXp+=50;
        myLevel++;
      }
    }
    this.setState({health: myHealth, enemies: allEnemies, xpCurrent: myXp, xpNext: nextXp, level: myLevel});
    return victory;
  },
  render: function(){
    return (
      <div className="container">
        <Stats health={this.state.health} xpCur={this.state.xpCurrent} xpNext={this.state.xpNext} weapon={this.state.weapon} level={this.state.level} />
        <Game dungeon={this.state.dungeon} move={this.move} />
      </div>
    );
  }
});

React.render(<Container />, document.getElementById("content"));
