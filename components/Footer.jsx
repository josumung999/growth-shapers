import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-teal-400 relative overflow-hidden py-16 px-4 md:p-[70px] z-10">
      <div className="container">

        <div className='grid lg:grid-cols-3 gap-4'>
          <div className="">
            <Image alt="Growth Shapers Logo" src="/images/logo.png" width="200" height="60" />
          </div>
          <div className="bg-teal-400">
            What&apos;s
          </div>
          <div className="bg-slate-900">
            Up to ?
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer