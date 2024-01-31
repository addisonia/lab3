
// Array of city objects with city names and their populations
var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];


// Function to create and add a table to the 'mydiv' element
function createTable(){
    // Create the table element
    var table = document.createElement("table");

    // Add the header row to the table with "City" and "Population" columns
    table.insertAdjacentHTML("beforeend", "<tr><th>City</th><th>Population</th></tr>");

    // Loop to add a new row for each city
    cityPop.forEach(function(cityObj){
        var rowHtml = "<tr><td>" + cityObj.city + "</td><td>" + cityObj.population + "</td></tr>";
        // Insert the row into the table
		table.insertAdjacentHTML('beforeend', rowHtml);
    });

    // Append the table to 'mydiv'
    document.querySelector("#mydiv").appendChild(table);

    // Call functions to modify and set up the table
    addColumns(cityPop);
    addEvents();
}


// Function that adds a new column to the table with city sizes based on their population
function addColumns(cityPop){
    // Select all row elements in the table and iterate over them
    document.querySelectorAll("tr").forEach(function(row, i){
		// Check if current row is in the header row
    	if (i == 0){
			// Add a header row for the new "City Size" column
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
			// Determine the size category of the "New Size" colummn
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
			// Add the city size data to the current row
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
    });
};

//Function to add interactive events to the table
function addEvents(){
	// adds a mouseover even listener to the table
	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";
		// Generates random color
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};
	}
		// Applies the color to table background
		this.style.backgroundColor = color;
	});

	// Function to show an alert when the table is clicked
	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)
};

// Allows the createTable function to run when the window loads
window.onload = function() {
    createTable();
};
