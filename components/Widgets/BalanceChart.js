import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'
const data = {
  labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep'],
  datasets: [
    {
      fill: true,
      lineTension: 0.1,
      backgroundColor: '#65f3bd77',
      borderColor: '#486C56',
      borderCapStyle: 'butt',
      borderDash: [],
      color: '#fff',
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#00C897',
      pointBackgroundColor: '#4FD3C4',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#6EBF8B',
      pointHoverBorderColor: '#6EBF8B',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
      color: '#fff',
    },
  ],
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      stepSize: 2,
    },
    y: {
      display: false,
    },
  },
}
const BalanceChart = () => {
  return (
    <div className="border-light h-[400px]  p-1">
      <Line data={data} options={options} width={250} height={150} />
    </div>
  )
}

export default BalanceChart
