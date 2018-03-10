var Plotly = require('plotly.js/lib/core');
var Plotlybar = require('plotly.js/lib/bar');

Plotly.register(Plotlybar);

// At the end of the _charts.js file
console.log('hello, this is my charts file!');
console.log(annualTotals);

// Initialize the arrays that will hold our lists of data
var countyHomicides = annualTotals.map(a => a.homicides_total);
var harvardParkHomicides = annualTotals.map(a => a.homicides_harvard_park);
var years = annualTotals.map(a => a.year);

// The rest of your code is up here.
// Add the below lines to the bottom of your file

// Use our x and y arrays for the values of the chart

function createChart(x, y, element, title){

  var settings = [{
      title: title,
      x: x,
      y: y,
      type: 'bar',
      // Add the new settings for marker here
      marker: {
      color: '#86c7df'},
      hoverinfo: 'y',
      hoverlabel: {
        bgcolor: '#777777'
  }
  }];

  var layout = {
      xaxis:{
        title: 'Year',
        fixedrange: true
      },
      yaxis:{
        fixedrange: true
      },
      margin: {
       l: 30,
       r: 15,
       t: 45,
       b: 30
     },
      height: 250
  };

  // Create the chart
  Plotly.newPlot(element, settings, layout, {displayModeBar: false});

}

var countyChartTitle = "<b>County Homicides, 2000-2017</b>";
var hpChartTitle = "<b>Harvard Park Homicides, 2000-2017</b>";

createChart(years, countyHomicides, 'county-homicides', countyChartTitle);
createChart(years, harvardParkHomicides, 'harvard-park-homicides', hpChartTitle);
