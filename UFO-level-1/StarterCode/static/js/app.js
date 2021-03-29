// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(tableData)

// Step 1: Loop Through `data` and console.log each weather report object
// tableData.forEach(data => {
//     console.log(data)
// })

// Step 2:  Use d3 to append one table row `tr` for each weather report object
// tableData.forEach(data => {
//     console.log(data);
//     var row = tbody.append('tr')
// })

// Step 3:  Use `Object.entries` to console.log each weather report value
// tableData.forEach(data => {
//     console.log(data);
//     var row = tbody.append('tr');

//     Object.entries(data).forEach(([key, value]) =>{
//         console.log(key, value)
//     })
// })
// Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// tableData.forEach(data => {
//     console.log(data);
//     var row = tbody.append('tr');
//     Object.entries(data).forEach(([key, value]) => {
//         console.log(key, value);
//         var cell = row.append("td")
//     })

// })

//Create function to add table data
function tableFormation(data){
    var row = tbody.append('tr');
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    })
}

// use for each and function above to append the table data to the page

tableData.forEach(tableFormation)

// Step 5: Use d3 to update each cell text with data
// tableData.forEach(data => {
//     var row = tbody.append('tr');
//     Object.entries(data).forEach(([key, value]) => {
//         var cell = row.append('td');
//         cell.text(value);
//     })
// })

// Assign the data from `data.js` to a descriptive variable
var sightings = tableData;

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

    // use d3 to select the input box
    var inputElement = d3.select('#datetime');

    //save the input value  into a new variable
    var inputValue = inputElement.property('value');
    
    //filter the data by the date given and store in a variable
    var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);

    // remove the current table rows to create room for the filtered data
    tbody.remove('tr');

    // call your table function above to append the new table data
    filteredData.forEach(data => {
        var row = tbody.append('tr');
        Object.entries(data).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        })
    })

    console.log(filteredData)
};







