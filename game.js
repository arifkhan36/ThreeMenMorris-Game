
$(document).ready(function(){
  $('button').click(function(){
  $('<ul>').html("O O O").appendTo('.gameboard');
   alert("game started");
  });

});


class Field{
  constructor(id, neighborsIds, content){ //naighbors are array of field Ids
    this.id=id;
    this.neighborsIds=neighborsIds;
    this.content = content;

  }
   isEmpty(){
    if(this.content === "nothing"){
      return true;
    }else{
       return false;
    }


  }
  whatsOnMe(){
    //returns stone or "empty";
   }

  }
  class Stone{
    constructor(color){
      if (color="white" || color="black"){
      this.color=color;



      }
    set(position){
      position.content=this;
    }
    isMovable(){
  if(this===field5){return true;}
   else
  return(this.position.neighborsIds[0]==="nothing"||this.position.naighborsIds[1]==="nothing"||this.position.naighborsIds[2]==="nothing")
 }
 }


  }

  class Player{
    constructor(name){
      this.name=name;
    }
  set(stone,field){
    field.content=stone}
  grab(){}

  }



  let field1=new Field("1",["2","4","5"],"nothing");
  let field5= new Field ("5", ["1","2","3","4","6","7","8","9"],"nothing");
  let field2 = new Field("2",["1","3","5"],"nothing");
  let field3 = new Field("3",["2","5","6"],"nothing");
  let field4 = new Field("4",["1","5","7"],"nothing");
  let field6 = new Field("6",["3","5","9"],"nothing");
  let field7 = new Field("7",["4","5","8"],"nothing");
  let field8 = new Field("8",["5","7","9"],"nothing");
  let field9 = new Field("9",["5","6","8"],"nothing");


 let  white1=new Stone("white");
 let white2 = new Stone ("white");
 let white3 = new Stone ("white");
 let black1= new Stone("black");
 let black2 = new Stone ("black");
 let black3 = new Stone ("black3");


 let player1 = new Player("Charlie");
  let player2 = new Player("Oliver");


player1.set(white1,field1);
player1.set(white2,field2);
player1.set(white3,field3);
player2.set(black1,field7);
player2.set(black2,field8);
player2.set(black3,field9);


const game = {
    inprogress: true,
    currentPlayer: "O",
    board:[1,2,3,4,5,6,7,8,9],
    checkWinner: function(){
      //3,4,5//1,8,7//4,9,8//6,9,2//3,9,7//5,9,1//= winer
      if(((this.board[3]=== this.board[4])&& this.board[4] === this.board[5])
      ||((this.board[1]=== this.board[8]) && this.board[8] ===this.board[7])
      ||((this.board[4]=== this.board[9])&& this.board[9] ===this.board[8])
      ||((this.board[6]=== this.board[9]) && this.board[9] ===this.board[2])
      ||((this.board[3]=== this.board[9]) && this.board[9] ===this.board[7])
      ||((this.board[5]=== this.board[9])&& this.board[9] ===this.board[1])){


      console.log("you win");
      document.querySelector('#winner').innerHTML = `${ this.currentPlayer}`
      this.inprogress = false;
    }
    }
}

// function startGame(){
//   document.turn = "x";
// }

// var button = $('.btn1').click(function(){
//   console.log('hi')
// });
//   console.log(button);

// class Field{
//   constructor(id, neighborsIds, content){ //naighbors are array of field Ids
//     this.id=id;
//     this.neighborsIds=neighborsIds;
//     this.content = content;
//   }
//   setNeighborsIds(n){
//     this.neighborsIds=n;
//   }
// }

// class Stone{
//   constructor(color, grabed, position){
//    this.color=color;
//    this.grabed=grabed;
//   }

// isMovable(){
//   if(this===field5){return true;}
//   else
//   return(this.position.neighborsIds[0]==="nothing"||this.position.naighborsIds[1]==="nothing"||this.position.naighborsIds[2]==="nothing")
// }
// }

// class Player{
//     constructor(name, color){
//       this.name=name;
//       this.color=color;
// }

// set(stone,field){
//     if(stone.grabed){
//     field.content=stone;
//   }
// }
// grab(stone){
//   if (stone.movable() && (stone.color==this.color)){
//   stone.position="nothing"; //no more stone on the field from stone was taken
//   stone.grabed=true;

// }

//   }
// }

//   let field1 = new Field();
//   let field5 = new Field ();
//   let field2 = new Field();
//   let field3 = new Field();
//   let field4 = new Field();
//   let field6 = new Field();
//   let field7 = new Field();
//   let field8 = new Field();
//   let field9 = new Field();




//  let white1= new Stone("white", false, null);
//  let white2 = new Stone("white", false, null);
//  let white3 = new Stone("white",false, null);
//  let black1= new Stone("black", false, null);
//  let black2 = new Stone("black",false, null);
//  let black3 = new Stone("black",false, null);


// let player1 = new Player("Charlie", "white");
// let player2 = new Player("Oliver", "black");


// player1.set(white1,field1);
// player1.set(white2,field2);
// player1.set(white3,field3);
// player2.set(black1,field7);
// player2.set(black2,field8);
// player2.set(black3,field9);




// document.getElementById("btn").addEventListener("click", alert("heelllllll"));
// white1.movable();

// //  var button = document.querySelector(".btn1");
// // button.addEventListener("click",function(){
// // this.toggle("purple");
// // });


//  var button = $('.btn1').click(function(){
//    console.log('hi')
// });

// console.log(button)









// document.addEventListener("DOMContentLoaded", function(event) {
//   console.log("DOM fully loaded and parsed");
//   /**
//   This App file is game management file. **Here**:
//   * Call the start method of the Game object
//   * Grab all cells from the DOM
//   * Add Event listener to each one of the cells
//   * Grab the id of clicked cell
//   * Play the cell with that id
//   * Check for win
//   */
//   // $(document).ready(function () {


  // const game = {
  //   inprogress: true,
  //   currentPlayer: "O",
  //   board:[1,2,3,4,5,6,7,8,9],
  //   checkWinner: function(){
      //3,4,5//1,8,7//4,9,8//6,9,2//3,9,7//5,9,1//= winer
    //   if(((this.board[3]=== this.board[4])&& this.board[4] === this.board[5])
    //   ||((this.board[1]=== this.board[8]) && this.board[8] ===this.board[7])
    //   ||((this.board[4]=== this.board[9])&& this.board[9] ===this.board[8])
    //   ||((this.board[6]=== this.board[9]) && this.board[9] ===this.board[2])
    //   ||((this.board[3]=== this.board[9]) && this.board[9] ===this.board[7])
    //   ||((this.board[5]=== this.board[9])&& this.board[9] ===this.board[1])){


    //   console.log("you win");
    //   document.querySelector('#winner').innerHTML = `${ this.currentPlayer}`
    //   this.inprogress = false;
    // }
//   }
// }


