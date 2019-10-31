import React, { Component } from 'react'
import CharSelect from './chartSelect/chartSelect'

const data = [
  {
    name: 'Page A', value: 4000,
  },
  {
    name: 'Page B', value: 3000,
  },
  {
    name: 'Page C', value: 2000,
  },
  {
    name: 'Page D', value: 2780,
  },
  {
    name: 'Page E', value: 1890,
  },
  {
    name: 'Page F', value: 2390,
  },
  {
    name: 'Page G', value: 3490,
  },
  {
    name: 'Page H', value: 1000
  }
];

export default class App extends Component {

  render() {
    return (
      <div>
        <CharSelect data={data}/>
      </div>
    )
  }
}
