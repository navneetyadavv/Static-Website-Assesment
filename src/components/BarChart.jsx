import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['', '', '', '', '', '', '', ''],
    datasets: [
      {
        label: 'Sample Data',
        data: [400, 150, 50, 200, 250, 100, 180, 300],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }
          return getGradient(ctx, chartArea);
        },
        borderRadius: {
          topLeft: 5,
          topRight: 5,
          bottomLeft: 5,
          bottomRight: 5,
        },
        barThickness: 7, // Adjust the width of the bars
        borderSkipped: false, // Ensure all corners can be rounded
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, 
        },
        border: {
          display: false, 
        },
        ticks: {
          callback: function(value) {
            return [0, 200, 400].includes(value) ? value : null;
          },
          color: '#fff',
        },
      },
      x: {
        grid: {
          display: false, 
        },
        border: {
          display: false,
        },
        ticks: {
          display: false, 
        },
      },
    },
    maintainAspectRatio: false,
  };

  const getGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(0, 0, chartArea.width, chartArea.height);
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(1, 'white');
    return gradient;
  };

  return (
    <div
    style={{
      position: 'relative',
      height: '200px',
      width: '100%',
      background: 'linear-gradient(135deg, #032957, #041b4e)',
      borderRadius: '15px',
      padding: '20px',
    }}
  >
    <Bar data={data} options={options} />
  </div>
  );
};

export default BarChart;
