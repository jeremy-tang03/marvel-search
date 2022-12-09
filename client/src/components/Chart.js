import React from 'react';
import Plot from 'react-plotly.js';

function Chart({ yData, chartTitle, clickClose }) {
  return (
    <div className="absolute chart w-70-m flex flex-column">
      <button
        className=" bb b--none bg-white self-start hover-bg-washed-red chart-btn"
        onClick={clickClose}
      >
        Close
      </button>
      <Plot
        data={[
          {
            type: 'bar',
            x: ['Comics', 'Series', 'Stories', 'Events'],
            y: yData,
          },
        ]}
        layout={{ width: 980, height: 500, title: chartTitle }}
      />
    </div>
  );
}

export default Chart;
