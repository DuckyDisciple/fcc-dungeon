var dungeonWidth = 50;
var dungeonHeight = 40;
var weapons = [
  {name: "fist", power: 3},
  {name: "stick", power: 5},
  {name: "axe", power: 9},
  {name: "sword", power: 14},
  {name: "lightsaber", power: 20}
];
var winScreen = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1],[0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]
var loseScreen = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1],[0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]

var Stats = React.createClass({
  render: function(){
    return (
      <div className="stats">
        <p className="health">Health: {this.props.health}</p>
        <p className="xp">XP: {this.props.xpCur}/{this.props.xpNext}</p>
        <p className="level">Level: {this.props.level}</p>
        <p className="weapon">Weapon: {this.props.weapon}</p>
        <p className="floor">Floor: {this.props.floor}</p>
      </div>
    );
  }
});

var Game = React.createClass({
  render: function(){
    var board = this.props.dungeon;
    var player = this.props.player;
    var retry = this.props.retry;
    var boardLayout = board.map(function(col, cIndex){
      return (
        <div className="col">
          {col.map(function(row, rIndex){
            var classes = "square";
            var content = "";
            switch(row){
              case 0:
                classes+=" wall";
                break;
              case 1:
                classes+=" floor";
                break;
              case 2:
                classes+=" player";
                break
              case 3:
                classes+=" enemy";
                content="Y";
                break;
              case 4:
                classes+=" health";
                content="+";
                break;
              case 5:
                classes+=" weapon";
                content="i";
                break;
              case 6:
                classes+=" boss";
                content="**";
            }
            var xDiff = Math.abs(player.y-rIndex);
            var yDiff = Math.abs(player.x-cIndex);
            if(xDiff+yDiff > 4 && !retry){
              classes+=" dark";
            }
            return <div className={classes}>{content}</div>;
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
    return {dungeon: [], mounted: false, player: null, health: 100, xpCurrent: 0, xpNext: 100, weapon: weapons[0], level: 1, floor: 1, strength: 5, enemies: [], enemyStrength: 3, exit: null, boss: null};
  },
  componentDidMount: function(){
    this.setState({mounted: true});
    this.generateDungeon();
    document.addEventListener("keydown", this.move);
  },
  generateDungeon: function(){
    var dungeon = [];
    var newBoss = null;
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
    var wallH = Math.floor(Math.random()*(dungeonHeight-28))+14;    //Add walls
    var doorH = Math.floor(Math.random()*(dungeonWidth-4))+2;
    for(var i=0; i<dungeonWidth; i++){
      if(i!==doorH) dungeon[i][wallH]=0;
    }
    var wallV1 = Math.floor(Math.random()*(dungeonWidth-12))+6;
    if(wallV1===doorH) wallV1++;
    var doorV1 = Math.floor(Math.random()*(wallH-2))+1;
    for(var i=0; i<wallH; i++){
      if(i!==doorV1) dungeon[wallV1][i]=0;
    }
    var wallV2 = Math.floor(Math.random()*(dungeonWidth-12))+6;
    if(wallV2===doorH) wallV2++;
    var doorV2 = Math.floor(Math.random()*(dungeonHeight-wallH-2))+wallH+1;
    for(var i=wallH; i<dungeonHeight; i++){
      if(i!==doorV2) dungeon[wallV2][i]=0;
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
    var weaponPlaced = false;   //Add weapon
    while(!weaponPlaced){
      var wX = Math.round(Math.random() * (dungeonWidth-2)) + 1;
      var wY = Math.round(Math.random() * (dungeonHeight-2)) +1;
      if(dungeon[wX][wY]===1){
        dungeon[wX][wY] = 5;
        weaponPlaced = true;
      }
    }
    if(this.state.floor<4){
      var exitSide = Math.round(Math.random()*4);   //Add Exit
      switch(exitSide){
        case 0:
          var exitX = Math.floor(Math.random()*(dungeonWidth-2)) + 1;
          if(exitX===wallV1) exitX++;
          var exitY = 0;
          break;
        case 1:
          var exitX = dungeonWidth-1;
          var exitY = Math.floor(Math.random()*(dungeonHeight-2)) + 1;
          if(exitY===wallH) exitY++;
          break;
        case 2:
          var exitX = Math.floor(Math.random()*(dungeonWidth-2)) + 1;
          if(exitX===wallV2) exitX++;
          var exitY = dungeonHeight-1;
          break;
        case 3:
        case 4:
          var exitX = 0;
          var exitY = Math.floor(Math.random()*(dungeonHeight-2)) + 1;
          if(exitY===wallH) exitY++;
          break;
      }
      dungeon[exitX][exitY] = 1;
      var exitLoc = {x: exitX, y:exitY};
    }else{
      var exitLoc = {x: 0, y: 0};
      var bossPlaced = false;   //Add Boss
      while(!bossPlaced){
        var bX = Math.floor(Math.random()*(dungeonWidth-2)) + 1;
        var bY = Math.floor(Math.random()*(dungeonHeight-2)) +1;
        if(dungeon[bX][bY]===1){
          dungeon[bX][bY] = 6;
          bossPlaced = true;
          newBoss = {x: bX, y: bY, health: 100};
        }
      }
    }
    this.setState({dungeon: dungeon, player: {x:pX,y:pY}, enemies: enemyList, exit: exitLoc, boss: newBoss});
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
    var newSpot = board[pX+xAmt][pY+yAmt];
    var newHealth = this.state.health;
    var newWeapon = this.state.weapon;
    var floor = this.state.floor;
    if(newSpot!==0){
      if(newSpot===3){
        if(this.fightWon(pX+xAmt,pY+yAmt)){
          allowMove = true;
        }
        newHealth = this.state.health;
        if(newHealth === 0){
          var newLose = loseScreen.map(function(a){return a.slice()});
          this.setState({dungeon: newLose, player: {x:25, y:31}, retryScreen: true, exit: {x:25, y: 39}});
          return;
        }
      }else if(newSpot===6){
        if(this.bossFightWon(pX+xAmt,pY+yAmt)){
          allowMove = true;
          var newWin = winScreen.map(function(a){return a.slice()});
          this.setState({dungeon: newWin, player: {x:25, y:31}, retryScreen: true, exit: {x: 25, y: 39}});
          return;
        }
        newHealth = this.state.health;
        if(newHealth === 0){
          var newLose = loseScreen.map(function(a){return a.slice()});
          this.setState({dungeon: newLose, player: {x:25, y:31}, retryScreen: true, exit: {x:25, y: 39}});
          return;
        }
      }else{
        allowMove = true;
      }
      if(allowMove){
        if(newSpot===4){
          newHealth+=10;
        }else if(newSpot===5){
          newWeapon = weapons[floor];
        }
        board[pX][pY] = 1;
        pX+=xAmt;
        pY+=yAmt;
        board[pX][pY] = 2;
      }
    }
    this.setState({player: {x: pX,y:pY}, dungeon: board, health: newHealth, weapon: newWeapon});
    if(this.state.player.x === this.state.exit.x && this.state.player.y === this.state.exit.y){
      var isRetry = this.state.retryScreen;
      if(!isRetry){
        floor++;
        this.setState({floor: floor});
      }else{
        this.setState({dungeon: [], mounted: false, player: null, health: 100, xpCurrent: 0, xpNext: 100, weapon: weapons[0], level: 1, floor: 1, strength: 5, enemies: [], enemyStrength: 3, exit: null, boss: null, retryScreen: false});
      }
      this.generateDungeon();
    }
  },
  bossFightWon: function(bX, bY){
    var myHealth = this.state.health;
    var myLevel = this.state.level;
    var boss = this.state.boss;
    var myAttack = Math.round(Math.random()*(this.state.weapon.power * this.state.level))+this.state.strength;
    boss.health-=myAttack;
    var victory = true;
    var bossAttack = Math.round(Math.random()*(this.state.enemyStrength * this.state.floor)*2)+this.state.enemyStrength;
    if(boss.health > 0){
      victory = false;
      myHealth-=bossAttack;
      if(myHealth<0){
        myHealth=0;
      }
    }
    this.setState({health: myHealth, boss: boss});
    return victory;
  },
  fightWon: function(eX, eY){
    var allEnemies = this.state.enemies;
    var curEnemyIndex;
    var myHealth = this.state.health;
    var myXp = this.state.xpCurrent;
    var nextXp = this.state.xpNext;
    var myLevel = this.state.level;
    var myAttack = Math.round(Math.random()*(this.state.weapon.power * this.state.level))+this.state.strength;
    for(var i in allEnemies){
      if(allEnemies[i].x===eX && allEnemies[i].y===eY){
        curEnemyIndex = i;
        break;
      }
    }
    allEnemies[curEnemyIndex].health-=myAttack;
    var victory = true;
    if(allEnemies[curEnemyIndex].health > 0){
      victory = false
      var enAttack = Math.round(Math.random()*(this.state.enemyStrength * this.state.floor))+this.state.enemyStrength;
      myHealth-=enAttack;
      if(myHealth<0){
        myHealth=0;
      }
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
        <Stats health={this.state.health} xpCur={this.state.xpCurrent} xpNext={this.state.xpNext} weapon={this.state.weapon.name} level={this.state.level} floor={this.state.floor}/>
        <Game dungeon={this.state.dungeon} move={this.move} player={this.state.player} retry={this.state.retryScreen} />
      </div>
    );
  }
});

React.render(<Container />, document.getElementById("content"));
