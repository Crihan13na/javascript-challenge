// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputField1 = d3.select("#datetime");
var inputField2 = d3.select("#city");
// var inputField2 = d3.select("#state");
// var inputField2 = d3.select("#country");
// var inputField2 = d3.select("#shape");
var resetbtn = d3.select("#reset-filter-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {

	dataInput.forEach(ufo_sightings => {
		var row = tbody.append("tr");
		columns.forEach(column => row.append("td").text(ufo_sightings[column])
		)
	});
}

//Populate table
populate(data);

// Filter by attribute
button.on("click", () => {
	d3.event.preventDefault();
	var inputDate = inputField1.property("value").trim();
	var inputCity = inputField2.property("value").toLowerCase().trim();
	// Filter by field matching input value
	var filterDate = data.filter(data => data.datetime === inputDate);
	console.log(filterDate)
	var filterCity = data.filter(data => data.city === inputCity);
  console.log(filterCity)
  // var filterState = data.filter(data => data.state === inputState);
  // console.log(filterState)
  // var filterCountry = data.filter(data => data.country === inputCountry);
  // console.log(filterCountry)
  // var filterShape = data.filter(data => data.shape=== inputShape);
	// console.log(filterShape)
  var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);
	console.log(filterData)

	// Add filtered sighting to table
	tbody.html("");

	let response = {
		filterData, filterCity, filterDate, 
	}

	if (response.filterData.length !== 0) {
		populate(filterData);
	}
		else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0 ))){
			populate(filterCity) || populate(filterDate);
	
		}
		else {
			tbody.append("tr").append("td").text("No results found!"); 
		}
})

resetbtn.on("click", () => {
	tbody.html("");
	populate(data)
	console.log("Table reset")
})



// //function to invoke on selection of an item from dropdown
// filterType.on("change", function() {
//     var filterValue = filterType.property("value");
//     d3.select("#filtertype").node().value = '';
//     // Setting placeholder values for input text
//     switch (filterValue) {
//         case 'datetime':
//             placeHolder = '1/1/2010';
//             break;
//         case 'city':
//             placeHolder = 'city';
//             break;
//         case 'state':
//             placeHolder = 'state';
//             break;
//         case 'country':
//             placeHolder = 'country';
//             break;
//         case 'shape':
//             placeHolder = 'shape';
//             break;
//         default:
//             placeHolder = '';
//     }
//     d3.select("input").attr("placeholder", placeHolder);
//     d3.select("label")
//       .attr("for",filterValue)
//       .text(`Enter a value for  ${filterValue.toUpperCase()}`);

    
// });

// // Function to invoke on clicking the filter button
// submit.on("click", function() {
        
//         // Prevent the page from refreshing
//         d3.event.preventDefault();

//         // Clearing the previous table data
//         tbody.html("");

//         //get the data entered in text box
//         var inputElement = d3.select("#filtertype");
         
//         var inputValue = inputElement.property("value");
        
//         if (inputValue == '') {
//             alert("Please enter a filter value!");
//             document.getElementById("#filtertype").focus();
//             autoPopulate(tableData);
//         }
        
//         //Filter the data based on the input value
//         var typeVal = d3.select("label").attr("for");
        
//         var filteredData = tableData.filter(alients => alients[typeVal] === inputValue.toLowerCase());
//         if (filteredData.length == 0) {
//             alert("Oops..No UFO's found, try another filter value!");
//             d3.select("#filtertype").node().value = '';
//             autoPopulate(tableData);
//         }
//         console.log(filteredData);
        
//         //Displaying the data for the selection
//         filteredData.forEach((alients) => {
//             // Creating table rows for each row of alients data
//             var row = tbody.append("tr");
//             //Iterating thru each row for key and values
//             Object.entries(alients).forEach(([key, value]) => {
//                 // Creating cells for posting table data
//                 var cell = row.append("td");
//                 cell.text(value);
//             });
//         });



// })





// //from data.js
// var tableData = data;

// //get table references
// var tbody = d3.select("tbody");

// function buildTable(data) {
//   //First, clear any existing data
//   tbody.html("");
//   // loop throuhg each object and append a row and cells for each value in the row
//   data.forEach((dataRow) => {
//     //append a row tot the table
//     var row = tbody.append("tr");
//     //loop through each field in the dataRow and addeach value as a table cell
//     Object.values(dataRow).forEach((val) => {
//       var cell = row.append("td");
//       cell.text(val);
//     });
//   });
// }

// //keepp track of all s
// var filter = {};

// function updateFilters() {

//   console.log("in updateFilters():");
//   console.log("elementValue =", elementValue);
//   console.log("filterId=", filterId);

//   //save the element, value and id of the filter
//   var changeElement = d3.select(this).select("input");
//   var elementValue = changeElement.property("value");
//   var filterId = changedElement.attr("id");

//   //if filter value was rntered then add that filterId and value tot the list. Otherwise clear that filter 
//   if (elementValue) {
//     filters[filterId] = elementValue;
//   }
//   else {
//     delete filters[filterId];
//   }
//   //call function to apply all filters and rebuild the table
//   filterable();
// }

// function filterTable() { 

//   //set the filteredData tot the tableData
//   let filteredData = tableData;
//   //loop through all of the filters and keep any data that mathces the filter value
//   console.log("COntents of filters{}:")
//   console.log(filters);

//   Object.defineProperties(filters).forEach(([key, value]) => {
//     filteredData = filteredData.filter(row => row[key] === value);
//   });
  
//   //finally, rebuild the table using filtered Data
//   buildTable(filteredData);
// }
// //attach en event to listen for changes for each filter
// d3.selectAll(".filter").on("change", updateFilters);

// //build the table when the page loads
// buildTable(tableData);














// // from data.js
// var tableData = data;
// console.log(tableData);

// // Get a reference to the table body
// var tbody = d3.select("tbody");

// // UFO Sighting values for each column
// tableData.forEach(function(ufoSighting) {
//     console.log(ufoSighting);
//     // Append one table row `tr` for each UFO Sighting object
//     var row = tbody.append("tr");

//     // Use `Object.entries` to console.log each UFO Sighting value
//     Object.entries(ufoSighting).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });


// // Select the button
// var button = d3.select("#filter-btn");
// //runs when button is clicked or pressed enter
// button.on("click", function() {

//     tbody.html("");

//     // Select the input date, state, shape and get the raw HTML nodes
//     var inputElement = d3.select("#input");
//     // Get the value property of the input date, state, shape
//     var inputValue = inputElement.property("value");
//     // console.log input value
//      console.log(inputValue);
//     // Filter Data with datetime equal to input value
//     var filteredData = tableData.filter(sighting => sighting.datetime === inputValue &&
//                                                     sighting.city === inputValue &&
//                                                     sighting.state === inputValue &&
//                                                     sighting.country === inputValue &&
//                                                     sighting.shape === inputValue);
//     // console.log filter values
//     console.log(filteredData);


//     filteredData.forEach(function(selections) {

//     console.log(selections);
//     // Append one table row `tr` for each UFO Sighting object
//     var row = tbody.append("tr");
//     // Use `Object.entries` to console.log each UFO Sighting value
//     Object.entries(selections).forEach(function([key, value]) {
//         console.log(key, value);
//         // Append a cell to the row for each value
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });
// });








