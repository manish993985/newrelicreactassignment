import React from 'react';
 
import {
  AreaChart,
  PieChart,
  LineChart,
  BillboardChart,
  HeapMapChart
  
} from 'nr1'
 
 
 
// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction
 
export default class DynamicNerdlet extends React.Component {
  render() {
    return (
      <div>
        <h1>Area Chart</h1>
          <AreaChart className="spacing"
      accountId={4268462}
      query="SELECT count(*) FROM SystemSample SINCE 30 MINUTES AGO TIMESERIES"
      fullWidth
      />
 
      <h1>Pie Chart</h1>
      <PieChart className="spacing"
        accountId={4268462}
        query="SELECT count(*) FROM SystemSample FACET cpuUserPercent SINCE 30 MINUTES AGO"
        fullWidth
      />
 
      <h1>Line Chart</h1>
      <LineChart className="spacing"
        accountId={4268462}
        query="SELECT count(*) FROM SystemSample SINCE 30 MINUTES AGO TIMESERIES"
        fullWidth
      />
 
      <h1>BillboardChart</h1>
      <BillboardChart className="spacing"
        accountId={4268462}
        query="SELECT count(*) FROM SystemSample SINCE 30 MINUTES AGO TIMESERIES"
        fullWidth
      />
     
      </div>
    )
  }
}
 
// import React from 'react';

// // https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

// export default class DynamicnerdletNerdlet extends React.Component {
//   render() {
//     return <h1>Hello, dynamicnerdlet Nerdlet!</h1>;
//   }
// }
