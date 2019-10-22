var montly_hist_data = []
var stats2_to_cmp = []

$.get('monthly_sales.csv', function(csv) {
  var day = 1;
  var splt = csv.split("\n")
  var skip_first = true;
  var col1 = []
  var take_stats33 = 0
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
    if(take_stats33 >= 33){
      stats2_to_cmp.push(parseInt(row[2])+parseInt(row[5])+parseInt(row[8])+parseInt(row[11])+parseInt(row[14]))
      return true
    }
    else if (take_stats33 >= 18) {
      montly_hist_data.push(parseInt(row[2])+parseInt(row[5])+parseInt(row[8])+parseInt(row[11])+parseInt(row[14]))
    }

    col1.push(""+day)
    day += 1;
    take_stats33 += 1
  });


  $('#container2').highcharts({
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
    title: {
        text: 'Fish Fillet Sales Histogram from Aug-17, Checking Sales After Oct-18'
    },
    xAxis: [{
        title: { text: '' },
    }, {
        title: { text: 'Sales Histogram' },
        opposite: true,
        plotLines:[{
          value:percentile25,
        },{
          value:percentile975,
        }
      ]
    }],
  
    yAxis: [{
        title: { text: '' }
    }, {
        title: { text: 'Sales in Bin' },
        opposite: true
    }],
  
    series: [{
        name: 'Histogram',
        type: 'histogram',
        xAxis: 1,
        yAxis: 1,
  
        //WHAT ID DOES IT PERTAIN TO
        baseSeries: 's1',
        zIndex: -1,
    }, {
        name: " ",
        type: 'scatter',
        data: montly_hist_data,
        id: 's1',
        marker: {
            radius: 0
        }
      },
      {
          name: 'Months After BK Impossible Burger',
          type: 'scatter',
          xAxis: 1,
          yAxis: 1,
          data: [{
            x:stats2_to_cmp[0],
            y:0
          },
          {
            x:stats2_to_cmp[1],
            y:0
          },
          {
            x:stats2_to_cmp[2],
            y:0
          },
          {
            x:stats2_to_cmp[3],
            y:0
          },
          {
            x:stats2_to_cmp[4],
            y:0
          },
          {
            x:stats2_to_cmp[5],
            y:0
          },
          {
            x:stats2_to_cmp[6],
            y:0
          },
          {
            x:stats2_to_cmp[7],
            y:0
          },
          {
            x:stats2_to_cmp[8],
            y:0
          },
          {
            x:stats2_to_cmp[9],
            y:0
          },
          {
            x:stats2_to_cmp[10],
            y:0
          },
          {
            x:stats2_to_cmp[11],
            y:0
          }
          ],
  
          id: '2',
          marker: {
              radius: 5,
          }
    }]
    });
  });