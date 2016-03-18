var Stats = React.createClass({
  render: function(){
    return (
      <div className="stats">
        <p className="health">Health: 100</p>
        <p className="xp">XP: 0/100</p>
        <p className="weapon">Weapon: fist</p>
        <p className="level">Level: 1</p>
      </div>
    );
  }
});

var Game = React.createClass({
  render: function(){
    return (
      <div className="game">
        Game goes here
      </div>
    );
  }
});

var Container = React.createClass({
  render: function(){
    return (
      <div className="container">
        <Stats />
        <Game />
      </div>
    );
  }
});

React.render(<Container />, document.getElementById("content"));
