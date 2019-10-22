var csv_data;

var series_2019_data = []

$.get('monthly_sales.csv', function(csv) {
  var day = 1;
  var splt = csv.split("\n")
  var skip_first = true;
  var col1 = []
  var skip36 = 0
  $.each(splt, function(index, item){
    row = item.split(",");
    if(skip_first){
      
      for(var j = 1; j < row.length; j++){
        series_2019_data.push([]);
      }
      skip_first = false;
      return true;
    }
    if(skip36 < 24){
        skip36 += 1
        return true
    }
    for(var j = 2; j < row.length; j++){
      series_2019_data[j-2].push(parseInt(row[j]));
    }
    
    col1.push(""+day)
    day += 1;
  });
  $('#container4').highcharts({

  //CATEGORIES OUT OF FIRST COLUMN!
  chart:{
    backgroundColor:{
      linearGradient: [0, 0, 500, 500],
       stops: [
         [0, 'rgb(255, 255, 250)'],
         [1, 'rgb(255, 250, 250)']
       ]
     },
     polar: true,
     type: 'line'
  },
  xAxis: {
    type: "category",
    labels: {
      format: "{value}"
    },
      title:{
        text:"Months"
      },
      categories:["Jan-18","Feb-18", "Mar-18", "Apr-18", "May-18", "Jun-18", "Jul-18", "Aug-18", "Sep-18", "Oct-18", "Nov-18", "Dec-18", "Jan-19","Feb-19", "Mar-19", "Apr-19", "May-19", "Jun-19", "Jul-19", "Aug-19", "Sep-19"],
       plotLines: [{
           label: {
               text:"BK Burger"//,
               //style:"font-size:1rem;"
           },
            color: '#777777', // Grey
            width: 2,
            value: 9 // Position, you'll have to translate this to the values on your x axis
       }]
    },
    yAxis:{
      title:{
        text:"Sales in a District"
      },
    },
    title:{
      text:"Months From Jan-18 to Sep-19"
    },
    subtitle:{
      text: "Burger King's Impossible Burger on August 2019"
    },
    /*data:{
      csv:csv_data
    },*/
    plotOptions:{
      series:{
        marker:{
          enabled:false
        }
      }
    },
    series:[
      {
        //NEEDS TO BE INT, WHY DID I THINK STRING??
      name: "Hamburger, North East",
      data: series_2019_data[0]
    },
    {
      name:"Chicken Fillet, North East",
      data: series_2019_data[1]
    },
    {
      name:"Fish Fillet North East",
      data: series_2019_data[2]
    },
    {
      name:"Hamburger, South West",
      data: series_2019_data[3]
    },
    {
      name:"Chicken Fillet, South West",
      data: series_2019_data[4]
    },
    {
      name:"Fish Fillet, South West",
      data: series_2019_data[5]
    },
    {
      name:"Hamburger, North West",
      data: series_2019_data[6]
    },
    {
      name:"Chicken Fillet, North West",
      data: series_2019_data[7]
    },
    {
      name:"Fish Fillet, North West",
      data: series_2019_data[8]
    },
    {
      name:"Hamburger, South East",
      data: series_2019_data[9]
    },
    {
      name:"Chicken Fillet, South East",
      data: series_2019_data[10]
    },
    {
      name:"Fish Fillet, South East",
      data: series_2019_data[11]
    },
    {
      name:"Hamburger, Central",
      data: series_2019_data[12]
    },
    {
      name:"Chicken Fillet, Central",
      data: series_2019_data[13]
    },
    {
      name:"Fish Fillet, Central",
      data: series_2019_data[14]
    },
  ]
  });
});