

// var tableData = [
//     {id:1, name:"Billy Bob", score:"12"},
//     {id:2, name:"Mary May", score:"1"}
// ];


$(document).ready(function() {
    console.log("here");
  var table = new Tabulator(".tabulator", {
    ajaxURL:"https://amuseme-trivia-game.herokuapp.com/history", //change this to the project's website
    ajaxParams:{key1:"username", key2:"score"},
    ajaxConfig:{
      method:"GET",
      headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      credentials: 'omit'
    },
    autoResize:true,
    layout:"fitDataFill",
    layout:"fitColumns",
    columns:[
    {title:"Name", field:"username", align:"left"},
    {title:"Score", field:"score", align:"right", sorter:"number"}
    ]
  });

  table.setData();

});
