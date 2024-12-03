

import Image from 'next/image'
import React from 'react'


const CreateBusiness = () => {
  return (
    <div>
      <Image srs='./logo.svg' width={200} height={200}/>

      <div className="">
      <h2>What should we call your business</h2>
      </div>
    </div>
  )
}

export default CreateBusiness
