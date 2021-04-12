// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


//Create function to add table data
function tableFormation(data){
    var row = tbody.append('tr');
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.html(value);
    })
}

// use for each and function above to append the table data to the page

tableData.forEach(tableFormation)


// Assign the data from `data.js` to a descriptive variable
var filteredData = tableData;

// Select  the button 
var  button = d3.select('#filter-btn');

// select the form
var form = d3.select('form');

// create the event handlers
button.on('click', run);
form.on('submit', run);

function run(){
    // prevent the page from refreshing
    d3.event.preventDefault();

    // use d3 to select the input boxes
    var inputDate = d3.select('#datetime').property('value');
    var inputCity = d3.select('#city').property('value');
    var inputState = d3.select('#state').property('value');
    var inputCountry = d3.select('#country').property('value');
    var inputShape = d3.select('#shape').property('value');

    // save the input values  into a new array for a for loop
    var filters = [inputDate, inputCity, inputState, inputCountry, inputShape];


    // create the for loop that filters the data with each variable entered
    var filteredData = data
     filters.forEach(filter => {
        if (filter !== ''){
            if ( (filteredData.some(sighting => sighting.datetime == filter)) == true){
                filteredData = filteredData.filter(sighting => sighting.datetime == filter);
                console.log(filteredData);
            }
            else if ((filteredData.some(sighting => sighting.city == filter)) == true){
                filteredData = filteredData.filter(sighting => sighting.city == filter);
                console.log(filteredData)
            }
            else if ((filteredData.some(sighting => sighting.state == filter)) == true){
                filteredData = filteredData.filter(sighting => sighting.state == filter);
                console.log(filteredData)
            }
            else if ((filteredData.some(sighting => sighting.country == filter)) == true){
                filteredData = filteredData.filter(sighting => sighting.country == filter);
               
            }
            else if ((filteredData.some(sighting => sighting.shape == filter)) == true){
                filteredData = filteredData.filter(sighting => sighting.shape == filter);
            }
            else {
                alert(`${filter} not found in already filtered data or orginal data, therefore not filtered by this input`)
            }
        }
    });

    // remove the current table rows to create room for the filtered data
  
    tbody.html("")


    // call your table function above to append the new table data
    filteredData.forEach(tableFormation)
 
    // console.log(filteredData)
};







