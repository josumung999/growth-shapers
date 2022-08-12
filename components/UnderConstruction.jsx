import React from 'react';
import Link from 'next/link';

const UnderConstruction = () => {
  return (
    <div className='h-screen px-20 flex flex-col justify-center items-center bg-teal-500 dark:bg-slate-700'>
        <h1 className='text-4xl md:text-[70px] font-bold text-slate-100 text-center mb-8' style={{ lineHeight: 1.1 }}>
          Page En cours de construction
        </h1>
        <Link href="/" passHref>
          <a
            href="#"
            className="
            inline-block
            py-4
            px-6
            md:px-9
            lg:px-6
            xl:px-9
            rounded
            text-base
            font-medium
            bg-white bg-opacity-[15%]
            text-white
            hover:bg-opacity-100 hover:text-teal-600
            mr-4
            my-1
            transition
            "
          >
            Rentrer à l&apos;accueil              
          </a>
        </Link>
    </div>
  )
}

export default UnderConstruction