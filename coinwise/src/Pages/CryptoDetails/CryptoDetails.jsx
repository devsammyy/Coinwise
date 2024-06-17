import React, { useContext, useEffect } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { CryptoContext } from '../../Context/CryptoContext'

const CryptoDetails = () => {
  const { coinId } = useParams();

  const { cryptoDetails, setCryptoDetails } = useContext(CryptoContext);
  console.log(cryptoDetails);

  // If a coin has been clicked, assign the coinId to setCryptoDetails
  useEffect(() => {
    if(coinId) {
      setCryptoDetails(coinId);
    }
  }, [coinId, setCryptoDetails])
  
  return (
    <div className='min-h-[96vh]'>CryptoDetails {coinId}</div>
  )
}

export default CryptoDetails