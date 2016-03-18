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
    return {dungeon: [], mounted: false, player: null, health: 100, xpCurrent: 0, xpNext: 100, weapon: "fist", level: 1};
  },
  componentDidMount: function(){
    this.setState({dungeon: this.generateDungeon(), mounted: true});
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
    var pX = 2;
    var pY = 2;
    dungeon[pX][pY] = 2;
    this.setState({player: {x:pX,y:pY}});
    return dungeon;
  },
  move: function(e){
    var moved = false;
    var board = this.state.dungeon;
    var pX = this.state.player.x;
    var pY = this.state.player.y;
    switch(e.keyCode){
      case 37:
      case 65:
        if(board[pX-1][pY]!==0){
          board[pX][pY] = 1;
          pX--;
          board[pX][pY] = 2;
        }
        break;
      case 38:
      case 87:
        if(board[pX][pY-1]!==0){
          board[pX][pY] = 1;
          pY--;
          board[pX][pY] = 2;
        }
        break;
      case 39:
      case 68:
        if(board[pX+1][pY]!==0){
          board[pX][pY] = 1;
          pX++;
          board[pX][pY] = 2;
        }
        break;
      case 40:
      case 83:
        if(board[pX][pY+1]!==0){
          board[pX][pY] = 1;
          pY++;
          board[pX][pY] = 2;
        }
        break;
    }
    this.setState({player: {x: pX,y:pY}, dungeon: board});
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
