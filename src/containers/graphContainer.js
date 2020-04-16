import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function GraphContainer({ chartData }) {
  return (
    <div className="graph-container">
      <h2>Accumulated recommendations by weight</h2>
      <p>
        This graph shows the user&apos;s strengths in a graph weighted by who did the recommendation,
        and the weight of the person&apos;s recommendation. This way we can have a quick image of the
        best-recommended strengths of the user considering the total weight of them.
      </p>
      <Doughnut data={chartData} options={{ maintainAspectRatio: false }} />
    </div>
  );
}
