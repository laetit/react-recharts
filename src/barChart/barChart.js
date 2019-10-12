import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

export default class barChart extends Component {
  render() {
    let { data, colors } = this.props
    return (
      <BarChart className='bar-chart'
        width={600}
        height={350}
        data={data}

      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#2196f3">
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
          }
        </Bar>
      </BarChart>
    );
  }
}
