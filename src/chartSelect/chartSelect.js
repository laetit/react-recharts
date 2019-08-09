import React, { Component } from 'react'
import BarChart from '../barChart/barChart'
import AreaChart from '../areaChart/areaChart'
import PieChart from '../pieChart/pieChart'
import './chartSelect.scss';

const COLORS = ['#9c27b0', '#2196f3', '#388e3c', '#ffc107', '#ff5722', '#f44336', '#e91e63'];

export default class ChartSelect extends Component {
	constructor(props){
		super(props)
		this.state = {
			dataChart : [],
			chart: 'Bar'
		}
	}
	componentDidMount(){
		this.setState({ dataChart: this.props.data})
	}

	changeChart(newChart){
		this.setState({chart: newChart})
	}

	returnChart(){
		let data = this.state.dataChart
		switch (this.state.chart) {
			case 'Bar':
				return (<BarChart data={data} colors={COLORS}/>)
			case 'Pie':
				return (<PieChart data={data} colors={COLORS}/>)
			case 'Line':
				return (<AreaChart data={data}/>)
			default:
				return (<div>Problemas a carregar gráfico</div>)
		}
		
	}

	render() {
		let chart = this.state.chart
		return (
			<div className='chart-select'>
				<div className='select'>
					<nav className='nav-select'>
						<ul>
							<li><button className={`${chart === 'Bar' ? 'active' : null}`} onClick={() => this.changeChart('Bar')}>Barra</button></li>
							<li><button className={`${chart === 'Pie' ? 'active' : null}`} onClick={() => this.changeChart('Pie')}>Pizza</button></li>
							<li><button className={`${chart === 'Line' ? 'active' : null}`} onClick={() => this.changeChart('Line')}>Linha</button></li>
						</ul>
					</nav>
					{this.returnChart()}
				</div>
    	</div>
		)
	}
}
