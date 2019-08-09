import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

export default class barChart extends Component {
	render() {
		let data = this.props.data
		let COLORS = this.props.colors
		return (
      <BarChart className='bar-chart'
        width={600}
        height={350}
        data={this.props.data}

      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#2196f3">
				{
					data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
				}
				</Bar>
      </BarChart>
    );
	}
}
