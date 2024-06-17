import React, { useContext, useEffect, useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { CryptoContext } from '../../Context/CryptoContext'

const CryptoDetails = () => {
  const [period, setPeriod] = useState('7 days')
  const { coinId } = useParams();

  const { cryptoDetails, fetchCoinDetails } = useContext(CryptoContext);

  // If a coin has been clicked, assign the coinId to fetchCoinDetails
  useEffect(() => {
    if(coinId) {
      fetchCoinDetails(coinId);
    }
  }, [coinId, fetchCoinDetails])
  
  return (
    <div className='min-h-[96vh]'>
      {cryptoDetails && (
        <div>
          <div className='flex items-center justify-center gap-2 mb-6'>
            <img className='w-10' src={cryptoDetails.iconUrl} alt={cryptoDetails.name}/>
            <h1 className='text-2xl font-bold text-center'> {cryptoDetails.name} ({cryptoDetails.symbol})</h1>
          </div>
          <p className='text-base text-center mb-4'>{cryptoDetails.description}</p>
          <p className='text-center text-xl font-bold mb-3'>Price: <span className='font-normal'>{millify(cryptoDetails.price)}</span></p>
          <p className='text-center text-xl font-bold mb-3'>Market Cap: <span className='font-normal'>{millify(cryptoDetails.marketCap)}</span></p>
          <p className='text-center text-xl font-bold mb-3'>Change: <span className='font-normal'>{cryptoDetails.change}</span></p>
        </div>
      )}
    </div>
  )
}

export default CryptoDetails