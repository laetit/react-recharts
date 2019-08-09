import React, { Component } from 'react';
import {
  PieChart, Pie, Cell
} from 'recharts';

export default class Example extends Component {
  render() {
		let data = this.props.data
		let COLORS = this.props.colors
    return (
      <PieChart width={600} height={350}>
        <Pie dataKey="value" isAnimationActive={false} data={data} cx={300} cy={160} outerRadius={100} fill="#2196f3" label>
					{
						data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
					}
					</Pie>
      </PieChart>
    );
  }
}

