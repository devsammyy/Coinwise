import { scales } from 'chart.js';
import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);


const LineChart = ({coinHistory, currentPrice, coinName}) => {
  // Check if coinHistory is defined and has the necessary properties
  if (!coinHistory || !coinHistory.history) {
    console.error('coinHistory or coinHistory.history is null or undefined:', coinHistory);
    return <div>Loading...</div>; // or handle the error appropriately
  }

  // Loop over coin history to get coinPRice and timeStamp
  const coinPrice = [];
  const coinTimeStamp = [];

  console.log(coinTimeStamp)

  // This will loop till it gets to theend of the coin history
  for (let i = 0; i < coinHistory?.history?.length; i += 1) {
    const price = parseFloat(coinHistory.history[i].price);
    if (!isNaN(price)) {
      coinPrice.push(price);
    }
    coinTimeStamp.push(new Date(coinHistory.history[i].timestamp * 1000).toLocaleDateString());
  }

  // data object
  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
        fill: false
      }
    ]
  };

  // options object
  const options = {
    scales: {
      x: {
        type: 'category',
      },
      y: {
        type: 'linear',
        beginAtZero: true,
      }
    }
  };

  return (
    <>
      <div className='mt-4 mb-10 flex items-center justify-between'>
        <h2 className='text-2xl'>{coinName} Price Chart</h2>
        <div className='flex gap-6 font-bold'>
          <div>{coinHistory.change ? coinHistory.change : 'N/A'}</div>
          <div>{coinName} Price: ${currentPrice}</div>
        </div>
      </div>

        <Line data={data} options={options} />
    </>
  )
}

export default LineChart