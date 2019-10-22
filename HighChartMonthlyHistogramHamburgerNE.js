var all_series_data = []

$.get('monthly_sales.csv', function(csv) {
  var day = 1;
  var splt = csv.split("\n")
  var skip_first = true;
  var col1 = []
  var take_stats43 = 0
  var stats_to_cmp = []
  $.each(splt, function(index, item){
    row = item.split(",");
    if(skip_first){
      
      skip_first = false;
      return true;
    }
    var val = 0
    for(var j = 2; j < row.length; j++){
      val += parseInt(row[j])
    }
    if(take_stats43 >= 43){
      stats_to_cmp.push(parseInt(row[2]))
      return true
    }
    else{
      all_series_data.push(parseInt(row[2]))
    }

    col1.push(""+day)
    day += 1;
    take_stats43 += 1
  });
  $('#container').highcharts({

  //CATEGORIES OUT OF FIRST COLUMN!
  /*xAxis: {
    type: "category",
    labels: {
      format: "{value}"
    },
      title:{
        text:"Months"
      },
      //categories:["Jan-16","Feb-16", "Mar-16", "Apr-16", "May-16", "Jun-16", "Jul-16", "Aug-16", "Sep-16", "Oct-16", "Nov-16", "Dec-16",
      //"Jan-17","Feb-17", "Mar-17", "Apr-17", "May-17", "Jun-17", "Jul-17", "Aug-17", "Sep-17", "Oct-17", "Nov-17", "Dec-17",
      //"Jan-18","Feb-18", "Mar-18", "Apr-18", "May-18", "Jun-18", "Jul-18", "Aug-18", "Sep-18", "Oct-18", "Nov-18", "Dec-18",
      //"Jan-19","Feb-19", "Mar-19", "Apr-19", "May-19", "Jun-19", "Jul-19"],//"Aug-19", "Sep-19"],
       //plotLines: [{
       //     color: '#777777', // Grey
       //     width: 2,
       //     value: 44 // Position, you'll have to translate this to the values on your x axis
       //}]
    },*/
    yAxis:{
      title:{
        text:"Total Monthly Sales of Hamburger in NorthEast District"
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
          type: "histogram",
          xAxis: 0,
          yAxis: 0,
          baseSeries: 0
      },
      {
        //NEEDS TO BE INT, WHY DID I THINK STRING??
      data: all_series_data
    },
    {
        type:'scatter',
        name: 'August-19',
               marker: {
            //symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)',
            width: 16,
            height: 16
        },
        data: [{
            x: stats_to_cmp[0],
            y:0
        }],
    },
    {
            type:'scatter',
            name: 'September-19',
                   marker: {
                //symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)',
                width: 16,
                height: 16
            },
            data: [{
                x: stats_to_cmp[1],
                y:0
            },
            ]}
    /*{
    data:stats_to_cmp[0]
    },
    {
        data:stats_to_cmp[1]
    }*/
    ]
  });
});

