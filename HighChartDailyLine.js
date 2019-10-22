var csv_data;

var daily_data = []

$.get('daily_sales.csv', function(csv) {

  var day = 1;
  var splt = csv.split("\n")
  var skip_first = true;
  var col1 = []
  $.each(splt, function(index, item){
    row = item.split(",");
    if(skip_first){
      
      for(var j = 1; j < row.length; j++){
        daily_data.push([]);
      }
      skip_first = false;
      return true;
    }
    for(var j = 2; j < row.length; j++){
      daily_data[j-2].push(parseInt(row[j]));
    }
    
    col1.push(""+day)
    day += 1;
  });
  $('#container5').highcharts({

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
        text:"Day in the Month of January"
      },
      categories:col1
    },
    yAxis:{
      title:{
        text:"Sales in a District"
      },
    },
    title:{
      text:"Daily Sales on January 2016"
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
      data: daily_data[0]
    },
    {
      name:"Chicken Fillet, North East",
      data: daily_data[1]
    },
    {
      name:"Fish Fillet North East",
      data: daily_data[2]
    },
    {
      name:"Hamburger, South West",
      data: daily_data[3]
    },
    {
      name:"Chicken Fillet, South West",
      data: daily_data[4]
    },
    {
      name:"Fish Fillet, South West",
      data: daily_data[5]
    },
    {
      name:"Hamburger, North West",
      data: daily_data[6]
    },
    {
      name:"Chicken Fillet, North West",
      data: daily_data[7]
    },
    {
      name:"Fish Fillet, North West",
      data: daily_data[8]
    },
    {
      name:"Hamburger, South East",
      data: daily_data[9]
    },
    {
      name:"Chicken Fillet, South East",
      data: daily_data[10]
    },
    {
      name:"Fish Fillet, South East",
      data: daily_data[11]
    },
    {
      name:"Hamburger, Central",
      data: daily_data[12]
    },
    {
      name:"Chicken Fillet, Central",
      data: daily_data[13]
    },
    {
      name:"Fish Fillet, Central",
      data: daily_data[14]
    },
  ]
  });
});

