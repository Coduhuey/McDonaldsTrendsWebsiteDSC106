var csv_data;

var all_series_data = []

$.get('monthly_sales.csv', function(csv) {
  var day = 1;
  var splt = csv.split("\n")
  var skip_first = true;
  var col1 = []
  $.each(splt, function(index, item){
    row = item.split(",");
    if(skip_first){
      
      for(var j = 1; j < row.length; j++){
        all_series_data.push([]);
      }
      skip_first = false;
      return true;
    }
    for(var j = 2; j < row.length; j++){
      all_series_data[j-2].push(parseInt(row[j]));
    }
    
    col1.push(""+day)
    day += 1;
  });
  $('#container').highcharts({

  //CATEGORIES OUT OF FIRST COLUMN!
  xAxis: {
    type: "category",
    labels: {
      format: "{value}"
    },
      title:{
        text:"Months"
      },
      categories:["Jan-16","Feb-16", "Mar-16", "Apr-16", "May-16", "Jun-16", "Jul-16", "Aug-16", "Sep-16", "Oct-16", "Nov-16", "Dec-16",
      "Jan-17","Feb-17", "Mar-17", "Apr-17", "May-17", "Jun-17", "Jul-17", "Aug-17", "Sep-17", "Oct-17", "Nov-17", "Dec-17",
      "Jan-18","Feb-18", "Mar-18", "Apr-18", "May-18", "Jun-18", "Jul-18", "Aug-18", "Sep-18", "Oct-18", "Nov-18", "Dec-18",
      "Jan-19","Feb-19", "Mar-19", "Apr-19", "May-19", "Jun-19", "Jul-19", "Aug-19", "Sep-19"],
       plotLines: [{
            color: '#777777', // Grey
            width: 2,
            value: 44 // Position, you'll have to translate this to the values on your x axis
       }]
    },
    yAxis:{
      title:{
        text:"Sales in a District"
      },
    },
    title:{
      text:"Months From Jan-16 to Sep-19"
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
      data: all_series_data[0]
    },
    {
      name:"Chicken Fillet, North East",
      data: all_series_data[1]
    },
    {
      name:"Fish Fillet North East",
      data: all_series_data[2]
    },
    {
      name:"Hamburger, South West",
      data: all_series_data[3]
    },
    {
      name:"Chicken Fillet, South West",
      data: all_series_data[4]
    },
    {
      name:"Fish Fillet, South West",
      data: all_series_data[5]
    },
    {
      name:"Hamburger, North West",
      data: all_series_data[6]
    },
    {
      name:"Chicken Fillet, North West",
      data: all_series_data[7]
    },
    {
      name:"Fish Fillet, North West",
      data: all_series_data[8]
    },
    {
      name:"Hamburger, South East",
      data: all_series_data[9]
    },
    {
      name:"Chicken Fillet, South East",
      data: all_series_data[10]
    },
    {
      name:"Fish Fillet, South East",
      data: all_series_data[11]
    },
    {
      name:"Hamburger, Central",
      data: all_series_data[12]
    },
    {
      name:"Chicken Fillet, Central",
      data: all_series_data[13]
    },
    {
      name:"Fish Fillet, Central",
      data: all_series_data[14]
    },
  ]
  });
});

