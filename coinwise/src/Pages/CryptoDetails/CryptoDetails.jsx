import React from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'

const CryptoDetails = () => {
  const { coinId } = useParams();
  console.log(coinId)
  
  return (
    <div className='min-h-[96vh]'>CryptoDetails {coinId}</div>
  )
}

export default CryptoDetails