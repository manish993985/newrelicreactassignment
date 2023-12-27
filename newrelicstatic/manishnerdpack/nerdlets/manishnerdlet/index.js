import React from 'react';
import { LineChart ,TableChart,PieChart} from "nr1";

 
// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction
 
export default class manishnerdlet extends React.Component {
  render() {
    const versionASignups = {
      metadata: {
        id: "version-a-newsletter-signups",
        name: "Version A",
        viz: "main",
        color: "blue",
      },
      data: [
        { x: 0, y: 0 },
        { x: 10, y: 10 },
        { x: 20, y: 15 },
        { x: 30, y: 5 },
        { x: 40, y: 30 },
        { x: 50, y: 25 },
      ],
    };
    const versionBSignups = {
      metadata: {
        id: "version-b-newsletter-signups",
        name: "Version B",
        viz: "main",
        color: "green",
      },
      data: [
        { x: 0, y: 20 },
        { x: 10, y: 5 },
        { x: 20, y: 25 },
        { x: 30, y: 45 },
        { x: 40, y: 50 },
       
      ],
    };
 
    const historicalData = {
      metadata: {
          id: 'past-tests',
          name: 'Past tests',
          columns: ['endDate', 'versionADescription', 'versionBDescription', 'winner'],
      },
      data: [
          {
              "endDate": "12-15-2020",
              "versionADescription": "The homepage's CTA button was green.",
              "versionBDescription": "The homepage's CTA button was blue.",
              "winner": "A"
          },
          {
              "endDate": "09-06-2019",
              "versionADescription": "The 'Deals' page showed sales in a carousel.",
              "versionBDescription": "The 'Deals' page showed sales in a grid.",
              "winner": "B"
          }
      ],
  }
    return (
      <>
      <LineChart
        accountIds={4268462}
        data={[versionASignups, versionBSignups]}
        fullWidth
      />
      <TableChart data={[historicalData]} fullWidth />

      <PieChart 
        accountId={4268462}
        data={[versionASignups, versionBSignups]}
        fullWidth
      />
 
      </>
    );
  }
}

 
// import React from 'react';

// // https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

// export default class ManishnerdletNerdlet extends React.Component {
//   render() {
//     return <h1>Hello, manishnerdlet Nerdlet!</h1>;
//   }
// }
