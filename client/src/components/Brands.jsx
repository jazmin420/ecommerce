import React from 'react'
import versace from '../assets/versace.png'
import gucci from '../assets/gucci.png'
import prada from '../assets/prada.png'
import zara from '../assets/zara.png'
import calvinklein from '../assets/calvinklein.png'

function Brands() {
  return (
    <>
    <div className='bg-black flex justify-evenly items-center flex-wrap py-6 gap-3'>
     <img src={versace} alt="" />
     <img src={zara} alt="" />
     <img src={gucci} alt="" />
     <img src={prada} alt="" />
     <img src={calvinklein} alt="" />
    </div>
    </>
  )
}

export default Brands