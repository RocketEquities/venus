import React from 'react';
import { Bar, Chart as ChartJS, defaults } from 'react-chartjs-2';

class BarChart extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	chartData: props.chartData
    }
  }



  componentWillMount() {
    ChartJS.pluginService.register({
	    beforeDraw: function (chart, easing) {
	      if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
	          var helpers = Chart.helpers;
	          var ctx = chart.chart.ctx;
	          var chartArea = chart.chartArea;

	          ctx.save();
	          ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
	          ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
	          ctx.restore();
	      }
	    }
		});

		defaults.global.defaultFontFamily = '"latoregular", "Helvetica Neue", Helvetica, Arial, sans-serif';
		defaults.global.tooltips.enabled = false;
  }


  render(){
  	return(
  		<div className="chart">
  			<Bar
					data={this.state.chartData}
					height={parseInt(this.props.height)}
					options={{
						chartArea: {
				      backgroundColor: 'rgba(187, 201, 222, 0.19)'
				    },
				    tooltips: {
				      enabled: false
				    },
						scales: {
							padding: 0,
			        yAxes: [{
			        	gridLines: {
	                borderDash: [4, 2],
	                color: 'rgba(86, 98, 114, .3)'
		            },
		            color: 'rgba(86, 98, 114, .2)',
		            ticks: {
	                
	                userCallback: function(value, index, values) {
					            value = value.toString();
					            value = value.split(/(?=(?:...)*$)/);
					            value = value.join(',');
					            return '$' + value;
					        }
		            }
			        }],
			        xAxes: [{
			          barPercentage: 0.6,
			          gridLines: {
	                color: '#FFFFFF',
	                lineWidth: 5
		            }
			        }]
				    },
						maintainAspectRatio: false,
						title: {
							display: this.props.displayTitle
						},
						legend: {
							display: this.props.displayLegend
						}
					}}
				/>
  		</div>
  	)
  }
}


 BarChart.defaultProps = {
  displayTitle: false,
  displayLegend: false,
  legendPosition: 'right',
  height: '600'
};

export default BarChart;