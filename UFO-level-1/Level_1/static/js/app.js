// load data to variable tableData from data.js
var tableData = data;

// select tbody 
tbody = d3.select("tbody")

// Loop through table data rows
// Futrher loop through each row to create html table
function displayData(data){
    //console.log("displayData function");
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

//console.log("displayData orginal table");
displayData(tableData)

//html input place holders
var dateInputText = d3.select("#datetime")
var searchBtn = document.querySelector("#search");
var resetBtn = document.querySelector("#reset");

function resetTable(){
    //console.log("inside resetTable function");
    displayData(tableData);
}

// filter data with given date from html 
function clickSelect(){
    //print the value that was input
    //console.log("inside clickSelect function");
    console.log(dateInputText.property("value"));
    
    //create new table applying filter condition
    var filtered_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    //display filtered table
    displayData(filtered_table);
}

// event listener to handle search and reset button click
searchBtn.addEventListener("click", clickSelect);
resetBtn.addEventListener("click", resetTable);



