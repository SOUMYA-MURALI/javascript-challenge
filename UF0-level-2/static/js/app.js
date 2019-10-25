// load data to variable tableData from data.js
var tableData = data;

// select tbody 
tbody = d3.select("tbody")

//d3 converting array to html table.
// Loop through table data rows
// Futrher loop through each row to create html table
function displayData(data){ 
    console.log("inside displayData");
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}
//calling displayData function with original data
displayData(tableData)



// function to reset table
function resetTable(){
    displayData(tableData);
}


//function to build and apply filter condition on table data
function clickSearch() {
    //console.log("inside clickSearch function");
    var dateInputText = d3.select("#datetime");
    var cityInputText = d3.select("#city")
    var stateInputText = d3.select("#state")
    var countryInputText = d3.select("#country")
    var shapeInputText = d3.select("#shape")

    
    console.log(dateInputText.property("value"));
    console.log(cityInputText.property("value"));
    console.log(stateInputText.property("value"));
    console.log(countryInputText.property("value"));
    console.log(shapeInputText.property("value"));


    //declaring filter dictionary
    var filter_condition = {};


    //checking values for search condition and adding it to filter_condition object if the value is not null

    if (dateInputText.property("value")) {
        filter_condition.datetime = (dateInputText.property("value"));
    }
    
    if (cityInputText.property("value")) {
        filter_condition.city = (cityInputText.property("value"));
    } 

    if (stateInputText.property("value")) {
        filter_condition.state = (stateInputText.property("value"));
    } 

    if (countryInputText.property("value")) {
        filter_condition.country = (countryInputText.property("value"));
    } 

    if (shapeInputText.property("value")) {
        filter_condition.shape = (shapeInputText.property("value"));
    } 

    console.log(filter_condition);



    //creating new array called new_table after applying filter_condition to tableData.
    var new_table= tableData.filter(function(sighting) {
        for (var key in filter_condition) {
           if (sighting[key] === undefined || sighting[key] != filter_condition[key] || filter_condition[key] === null)
            return false;
        }
        return true;
      });
      
    displayData(new_table)

}



