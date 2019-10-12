import React, { Component } from 'react';
import {
  PieChart, Pie, Cell
} from 'recharts';

export default class Example extends Component {
  render() {
		let {data, colors} = this.props
    return (
      <PieChart width={600} height={350}>
        <Pie dataKey="value" isAnimationActive={false} data={data} cx={300} cy={160} outerRadius={100} fill="#2196f3" label>
					{
						data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
					}
					</Pie>
      </PieChart>
    );
  }
}

