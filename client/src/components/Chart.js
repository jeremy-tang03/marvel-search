import React from 'react';
import Plot from 'react-plotly.js';

function Chart({ clickClose }) {
  return (
    <div className="absolute chart w-70-m flex flex-column">
      <button className=" bb b--none bg-white self-start hover-bg-washed-red chart-btn" onClick={clickClose}>Close</button>
      <Plot
        data={[
          { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ width: 980, height: 500, title: 'A Fancy Plot' }}
      />
    </div>
  );
}

export default Chart;
