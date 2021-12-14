let chartBox = document.querySelectorAll('.chart-box')
let chartBoxTag = {}

// chart-box-tag to object
Array.from(document.getElementById('chart-box-tag').children).forEach((item) => {
  chartBoxTag[item.innerText.toLowerCase()] = item
})

// main chart
let chartBoxSeries = [{
    name: 'Revenue',
    marker: {
      symbol: 'square'
    },
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
      y: 26.5,
      marker: {
        symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
      }
    }, 23.3, 18.3, 13.9, 9.6]

  }, {
    name: 'CAC',
    marker: {
      symbol: 'diamond'
    },
    data: [{
      y: 3.9,
      marker: {
        symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
      }
    }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  }, {
    name: 'COGS',
    marker: {
      symbol: 'diamond'
    },
    data: [{
      y: 4,
      marker: {
        symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
      }
    }, 6, 2, 1, 9, 20, 17,  14, 16, 6, 4,10]
  }, {
    name: 'Operations',
    marker: {
      symbol: 'diamond'
    },
    data: [{
      y: 3.9,
      marker: {
        symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
      }
    }, 5.7, 8.5, 11.9, 15.2, 4.2,  16.6, 14.2, 10.3, 17.0, 6.6, 4.8]
  }, {
    name: 'Gross',
    marker: {
      symbol: 'diamond'
    },
    data: [{
      y: 3.9,
      marker: {
        symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
      }
    },  5.7, 4.2,11.9,8.5,   17.0, 15.2,16.6, 10.3,14.2,   4.8, 6.6]
  }, {
    name: 'Net',
    marker: {
      symbol: 'diamond'
    },
    data: [{
      y: 3.9,
      marker: {
        symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
      }
    },  5.7,  4.2,11.9, 15.2, 8.5,17.0, 14.2, 10.3,16.6,  6.6, 4.8]
  }
]
let chartContainer = Highcharts.chart('container', {
  chart: {
    type: 'spline'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
  },
  yAxis: {
    title: {
      text: ''
    },
    labels: {
      formatter: function () {
        return this.value;
      }
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1
      }
    }
  },
  series: []
});

// chart-box click effect
let chartBoxClickCount = 1
chartBox.forEach((item, index) => {
  if(index === 0){
    item.click()
    item.classList.add('chart-box-checked')
    chartBoxTag[item.getAttribute('id').toLowerCase()].classList.remove('hidden')
    chartContainer.addSeries(chartBoxSeries.find(el => el.name.toLowerCase() === item.getAttribute('id').toLowerCase()))
  }
  item.addEventListener('click', () => {
    let id = item.getAttribute('id').toLowerCase()
    let findSeries = chartBoxSeries.find(el => el.name.toLowerCase() === id)
    let findSeriesIndex = chartContainer.series.findIndex(el => el.name.toLowerCase() === id)

    // on the button
    if (item.checked === true && chartBoxClickCount > 0 && !item.classList.contains('chart-box-checked')){
        chartBoxTag[id].classList.remove('hidden')
        item.classList.add('chart-box-checked')
        chartContainer.addSeries(findSeries)
        chartBoxClickCount++
    // off the button
    } else if (chartBoxClickCount > 1) {
      chartBoxTag[id].classList.add('hidden')
      item.classList.remove('chart-box-checked')
      chartContainer.series[findSeriesIndex].remove()
      chartBoxClickCount--
    }
  })
})

// chart tabs
let chartTabs = document.getElementById('chart-tabs').children
let chartTabsClickCount = 1
Array.from(chartTabs).forEach((item, index) => {
  let name = item.innerText.toLowerCase().replace(' ', '-')
  let el = document.getElementById(`chart-tab-${name}`)

  if(index === 0){
    el.classList.remove('hidden')
    item.children[0].classList.add('active')
  }

  item.addEventListener('click', () => {
    // on
    if(el.classList.contains('hidden') && chartTabsClickCount > 0){
      el.classList.remove('hidden')
      item.children[0].classList.add('active')
      chartTabsClickCount++
    // off
    } else if(chartTabsClickCount > 1) {
      item.children[0].classList.remove('active')
      el.classList.add('hidden')
      chartTabsClickCount--
    }
  })
})



var data = [{
    y: 50,
    color: "#DDE9FF",
    name: "Salaries"
  },
  {
    y: 100,
    color: "#488ABA",
    name: "Expances"
  }

]

var initChart = function (_data) {
  $('.circle-chart').highcharts({
    chart: {
      animation: false,
      type: 'pie',
      backgroundColor: null
    },
    title: {
      text: null
    },
    tooltip: {
      valueSuffix: '%',
      enabled: true
    },
    plotOptions: {
      pie: {
        animation: {
          duration: 750,
          easing: 'easeOutQuad'
        },
        shadow: false,
        center: ['50%', '50%'],
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        point: {
          events: {
            click: function () {
              moveToPoint(this);
            }
          }
        }
      },
      series: {
        animation: {
          duration: 750,
          easing: 'easeOutQuad'
        }
      }
    },
    series: [{
      animation: {
        duration: 750,
        easing: 'easeOutQuad'
      },
      name: 'Spending',
      data: data,
      size: '90%',
      innerSize: '55%',
      dataLabels: {
        formatter: function () {
          return this.y > 5 ? this.point.name : null;
        },
        color: '#ffffff',
        distance: -30
      }
    }]
  });
};

var lastAngle = 0;
var moveToPoint = function (clickPoint) {
  var points = clickPoint.series.points;
  var startAngle = 0;
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    if (p === clickPoint) {
      break;
    }
    startAngle += (p.percentage / 100.0 * 360.0);
  }

  var newAngle = -startAngle + 90 - ((clickPoint.percentage / 100.0 * 360.0) / 2);

  console.log(newAngle);

  // clickPoint.series.update({
  //     //startAngle: -startAngle + 180 // start at 180
  //     startAngle: newAngle // center at 90
  // });

  $({
    angle: 0,
    target: newAngle
  }).animate({
    angle: newAngle - lastAngle
  }, {
    duration: 750,
    easing: 'easeOutQuad',
    step: function () {
      $('.circle-chart').css({
        transform: 'rotateZ(' + this.angle + 'deg)'
      });
    },
    complete: function () {
      $('.circle-chart').css({
        transform: 'rotateZ(0deg)'
      });
      clickPoint.series.update({
        startAngle: newAngle // center at 90
      });
      lastAngle = newAngle;
    }
  });
};

initChart();


// [CHART 3]
Highcharts.chart('chart-3', {
  chart: {
    zoomType: 'xy'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: [{
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    crosshair: true
  }],
  yAxis: [{ // Primary yAxis
    labels: {
      format: '{value}°C',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    },
    title: {
      text: 'Temperature',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    }
  }, { // Secondary yAxis
    title: {
      text: 'Rainfall',
      style: {
        color: Highcharts.getOptions().colors[0]
      }
    },
    labels: {
      format: '{value} mm',
      style: {
        color: Highcharts.getOptions().colors[0]
      }
    },
    opposite: true
  }],
  tooltip: {
    shared: true
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    x: 120,
    verticalAlign: 'top',
    y: 100,
    floating: true,
    backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || // theme
      'rgba(255,255,255,0.25)'
  },
  series: [{
    name: 'Rainfall',
    type: 'column',
    yAxis: 1,
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    tooltip: {
      valueSuffix: ' mm'
    }

  }, {
    name: 'Temperature',
    type: 'spline',
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
    tooltip: {
      valueSuffix: '°C'
    }
  }]
});



// [CHART 4]
var data = [{
    y: 50,
    color: "#96C2FD",
    name: "Salaries"
  },
  {
    y: 20,
    color: "#019589",
    name: "Salaries"
  },

  {
    y: 50,
    color: "#68E7F8",
    name: "Salaries"
  },
  {
    y: 15,
    color: "#FECBCA",
    name: "Salaries"
  },

  {
    y: 50,
    color: "#FAD64E",
    name: "Salaries"
  },

  {
    y: 20,
    color: "#07A04A",
    name: "Salaries"
  },

  {
    y: 70,
    color: "#A3F3D0",
    name: "Salaries"
  },

  {
    y: 100,
    color: "#488ABA",
    name: "Expances"
  }

]

var initChart = function (_data) {
  $('.circle-chart-2').highcharts({
    chart: {
      animation: false,
      type: 'pie',
      backgroundColor: null
    },
    title: {
      text: null
    },
    tooltip: {
      valueSuffix: '%',
      enabled: true
    },
    plotOptions: {
      pie: {
        animation: {
          duration: 750,
          easing: 'easeOutQuad'
        },
        shadow: false,
        center: ['50%', '50%'],
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        point: {
          events: {
            click: function () {
              moveToPoint(this);
            }
          }
        }
      },
      series: {
        animation: {
          duration: 750,
          easing: 'easeOutQuad'
        }
      }
    },
    series: [{
      animation: {
        duration: 750,
        easing: 'easeOutQuad'
      },
      name: 'Spending',
      data: data,
      size: '90%',
      innerSize: '55%',
      dataLabels: {
        formatter: function () {
          return this.y > 5 ? this.point.name : null;
        },
        color: '#ffffff',
        distance: -30
      }
    }]
  });
};

var lastAngle = 0;
var moveToPoint = function (clickPoint) {
  var points = clickPoint.series.points;
  var startAngle = 0;
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    if (p === clickPoint) {
      break;
    }
    startAngle += (p.percentage / 100.0 * 360.0);
  }

  var newAngle = -startAngle + 90 - ((clickPoint.percentage / 100.0 * 360.0) / 2);

  console.log(newAngle);

  // clickPoint.series.update({
  //     //startAngle: -startAngle + 180 // start at 180
  //     startAngle: newAngle // center at 90
  // });

  $({
    angle: 0,
    target: newAngle
  }).animate({
    angle: newAngle - lastAngle
  }, {
    duration: 750,
    easing: 'easeOutQuad',
    step: function () {
      $('.circle-chart-2').css({
        transform: 'rotateZ(' + this.angle + 'deg)'
      });
    },
    complete: function () {
      $('.circle-chart-2').css({
        transform: 'rotateZ(0deg)'
      });
      clickPoint.series.update({
        startAngle: newAngle // center at 90
      });
      lastAngle = newAngle;
    }
  });
};

initChart();


// CHART 10
Highcharts.chart('chart-10', {
  chart: {
    type: 'spline',
    animation: false,
    backgroundColor: null
  },
  title: {
    text: ' '
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
  },
  yAxis: {
    title: {
      text: 'Temperature'
    },
    labels: {
      formatter: function () {
        return this.value + '°';
      }
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1
      }
    },
  },
  series: [{
    name: 'Tokyo',
    marker: {
      symbol: 'circle'
    },
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
      y: 26.5,
      marker: {
        symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
      }
    }, 23.3, 18.3, 13.9, 9.6]

  }, {
    name: 'London',
    marker: {
      symbol: 'diamond'
    },
    data: [{
      y: 3.9,
      marker: {
        symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
      }
    }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  }]
});


// [CHART-4]
Highcharts.chart('chart-4', {
  chart: {
    type: 'spline',
    animation: false,
    backgroundColor: null
  },
  title: {
    text: ' '
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
  },
  yAxis: {
    title: {
      text: 'Temperature'
    },
    labels: {
      formatter: function () {
        return this.value + '°';
      }
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1
      }
    },
  },
  series: [{
    name: 'Tokyo',
    marker: {
      symbol: 'circle'
    },
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
      y: 26.5,
      marker: {
        symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
      }
    }, 23.3, 18.3, 13.9, 9.6]

  }, {
    name: 'London',
    marker: {
      symbol: 'diamond'
    },
    data: [{
      y: 3.9,
      marker: {
        symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
      }
    }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  }]
});

// [/circle-chart-5]


var data = [{
    y: 100,
    color: "#488ABA",
    name: "Expances"
  }

]

var initChart = function (_data) {
  $('#circle-chart-5').highcharts({
    chart: {
      animation: false,
      type: 'pie',
      backgroundColor: null
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: '<span class="center-title">41%</span>',
      textColor: 'red'
    },
    tooltip: {
      valueSuffix: '%',
      enabled: true
    },
    plotOptions: {
      pie: {
        animation: {
          duration: 750,
          easing: 'easeOutQuad'
        },
        shadow: false,
        center: ['50%', '50%'],
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        point: {
          events: {
            click: function () {
              moveToPoint(this);
            }
          }
        }
      },
      series: {
        animation: {
          duration: 750,
          easing: 'easeOutQuad'
        }
      }
    },
    series: [{
      animation: {
        duration: 750,
        easing: 'easeOutQuad'
      },
      name: 'Spending',
      data: data,
      size: '90%',
      innerSize: '85%',

      dataLabels: {
        formatter: function () {
          return this.y > 5 ? this.point.name : null;
        },
        color: '#ffffff',
        distance: -30
      }
    }]
  });
};

var lastAngle = 0;
var moveToPoint = function (clickPoint) {
  var points = clickPoint.series.points;
  var startAngle = 0;
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    if (p === clickPoint) {
      break;
    }
    startAngle += (p.percentage / 100.0 * 360.0);
  }

  var newAngle = -startAngle + 90 - ((clickPoint.percentage / 100.0 * 360.0) / 2);

  console.log(newAngle);

  // clickPoint.series.update({
  //     //startAngle: -startAngle + 180 // start at 180
  //     startAngle: newAngle // center at 90
  // });

  $({
    angle: 0,
    target: newAngle
  }).animate({
    angle: newAngle - lastAngle
  }, {
    duration: 750,
    easing: 'easeOutQuad',
    step: function () {
      $('.circle-chart-5').css({
        transform: 'rotateZ(' + this.angle + 'deg)'
      });
    },
    complete: function () {
      $('.circle-chart-5').css({
        transform: 'rotateZ(0deg)'
      });
      clickPoint.series.update({
        startAngle: newAngle // center at 90
      });
      lastAngle = newAngle;
    }
  });
};

initChart();




var data = [{
  y: 100,
  color: "#488ABA",
  name: "Expances"
}

]

var initChart = function (_data) {
$('#circle-chart-6').highcharts({
  chart: {
    animation: false,
    type: 'pie',
    backgroundColor: null
  },
  title: {
    verticalAlign: 'middle',
    floating: true,
    text: '<span style="font-size: 40px; font-weight: bold; color: #14B4D4;">$2.3M <br><span style="font-size:26px;">EBITDA</span></span>',
    textColor: 'red'
  },
  tooltip: {
    valueSuffix: '%',
    enabled: true
  },
  plotOptions: {
    pie: {
      animation: {
        duration: 750,
        easing: 'easeOutQuad'
      },
      shadow: false,
      center: ['50%', '50%'],
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      point: {
        events: {
          click: function () {
            moveToPoint(this);
          }
        }
      }
    },
    series: {
      animation: {
        duration: 750,
        easing: 'easeOutQuad'
      }
    }
  },
  series: [{
    animation: {
      duration: 750,
      easing: 'easeOutQuad'
    },
    name: 'Spending',
    data: data,
    size: '100%',
    innerSize: '90%',

    dataLabels: {
      formatter: function () {
        return this.y > 5 ? this.point.name : null;
      },
      color: '#ffffff',
      distance: -30
    }
  }]
});
};

var lastAngle = 0;
var moveToPoint = function (clickPoint) {
var points = clickPoint.series.points;
var startAngle = 0;
for (var i = 0; i < points.length; i++) {
  var p = points[i];
  if (p === clickPoint) {
    break;
  }
  startAngle += (p.percentage / 100.0 * 360.0);
}

var newAngle = -startAngle + 90 - ((clickPoint.percentage / 100.0 * 360.0) / 2);

console.log(newAngle);

// clickPoint.series.update({
//     //startAngle: -startAngle + 180 // start at 180
//     startAngle: newAngle // center at 90
// });

$({
  angle: 0,
  target: newAngle
}).animate({
  angle: newAngle - lastAngle
}, {
  duration: 750,
  easing: 'easeOutQuad',
  step: function () {
    $('#circle-chart-6').css({
      transform: 'rotateZ(' + this.angle + 'deg)'
    });
  },
  complete: function () {
    $('#circle-chart-6').css({
      transform: 'rotateZ(0deg)'
    });
    clickPoint.series.update({
      startAngle: newAngle // center at 90
    });
    lastAngle = newAngle;
  }
});
};

initChart();



// [CHART 6]
Highcharts.chart('chart-6', {
  chart: {
    type: 'column',
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total fruit consumption'
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    shared: true
  },
  plotOptions: {
    column: {
      stacking: 'percent'
    }
  },
  series: [{
    name: 'John',
    data: [5, 3, 4, 7, 2]
  }, {
    name: 'Jane',
    data: [2, 2, 3, 2, 1]
  }, {
    name: 'Joe',
    data: [3, 4, 4, 2, 5]
  }]
});


// [CHART-7]
Highcharts.chart('chart-7', {
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
  },
  labels: {
    items: [{
      html: '',
      style: {
        left: '50px',
        top: '18px',
        color: ( // theme
          Highcharts.defaultOptions.title.style &&
          Highcharts.defaultOptions.title.style.color
        ) || 'black'
      }
    }]
  },
  series: [{
    type: 'column',
    name: 'Jane',
    data: [3, 2, 1, 3, 4],
    color: '#A3F3D0',
    maxPointWidth: 23
  }, {
    type: 'column',
    name: 'John',
    data: [2, 3, 5, 7, 6],
    color: '#E6F8EE',
    maxPointWidth: 23

  },{
    type: 'column',
    name: 'John',
    data: [3, 3.5, 4.5, 9, 5.6],
    color: '#019589',
    maxPointWidth: 23

  },
  {
    type: 'pie',
    name: 'Total consumption',
    data: [{
      name: 'Jane',
      y: 13,
      color: '#A3F3D0' // Jane's color
    }, {
      name: 'Joe',
      y: 19,
      color: '#E6F8EE' // Joe's color
    }],
    center: [100, 80],
    size: 100,
    showInLegend: false,
    dataLabels: {
      enabled: false
    }
  }]
});



// [CHART-8]
Highcharts.chart('chart-8', {
  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Rainfall (mm)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Tokyo',
    data: [49.9, 71.5, 90.4, 19.2, 44.0, 76.0, 35.6, 48.5]

  }]
});


// [CHART 9]
const charCircle = document.querySelectorAll('.circle-pie');
charCircle.forEach(el => {
  Highcharts.chart(el, {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: false
      }
    },

    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'Internet Explorer',
        y: 11.84
      }, {
        name: 'Firefox',
        y: 10.85
      }, {
        name: 'Edge',
        y: 4.67
      }, {
        name: 'Safari',
        y: 4.18
      }, {
        name: 'Other',
        y: 7.05
      }]
    }]
  });
})


// [CHART-10]
Highcharts.chart('chart-9', {
  chart: {
      type: 'area'
  },
  accessibility: {
      description: ''
  },
  title: {
      text: ''
  },
  subtitle: {
      text: ''
  },
  xAxis: {
      allowDecimals: false,
      labels: {
          formatter: function () {
              return this.value; // clean, unformatted number for year
          }
      },
      accessibility: {
          rangeDescription: 'Range: 1940 to 2017.'
      }
  },
  yAxis: {
      title: {
          text: 'Nuclear weapon states'
      },
      labels: {
          formatter: function () {
              return this.value / 1000 + 'k';
          }
      }
  },
  tooltip: {
      pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
  },
  plotOptions: {
      area: {
          pointStart: 1940,
          marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                  hover: {
                      enabled: true
                  }
              }
          }
      }
  },
  series: [{
      name: 'USA',
      data: [
          null, null, null, null, null, 6, 11, 32, 110, 235,
          369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
          20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
          26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
          24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
          21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
          10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
          5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
      ]
  }, {
      name: 'USSR/Russia',
      data: [null, null, null, null, null, null, null, null, null, null,
          5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
          1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
          11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
          30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
          37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
          21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
          12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
      ]
  }]
});
