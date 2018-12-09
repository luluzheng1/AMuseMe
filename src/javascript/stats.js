$(document).ready(function generate_table() {

// var tableData = [
//     {id:1, name:"Billy Bob", score:"12"},
//     {id:2, name:"Mary May", score:"1"}
// ];
var table = new Tabulator("#scoretable", {
    ajaxURL:"https://shielded-shore-69038.herokuapp.com/history", //change this to the project's website
    ajaxParams:{key1:"username", key2:"score"},
    autoResize:true,
    layout:"fitDataFill",
    layout:"fitColumns",
    columns:[
    {title:"Name", field:"username", align:"left"},
    {title:"Score", field:"score", align:"right", sorter:"number"},
    ]
  });

table.setData();

})