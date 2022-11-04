import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { FaHeartbeat, FaSearchengin} from 'react-icons/fa';
import { BsFillChatLeftTextFill } from 'react-icons/bs';

const Values = () => {
  const intl = useIntl();

  const coreValues = intl.messages['page.about.values'];

  return (
    <div className='bg-teal-100 dark:bg-slate-800'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16 lg:py-20'>
        <div className="flex items-center justify-center flex-col">
          <h1 className='text-3xl text-center lg:text-4xl font-bold my-4 text-slate-800 dark:text-slate-400'>
            <FormattedMessage id="page.about.value.title" />
          </h1>
        </div>
        <div className="grid gap-10 lg:grid-cols-3 mt-10">
            {coreValues.map((item) => 
              <div key={item.id} id="card1" className="flex flex-col items-center justify-center">
                <div id="cardImage" className="bg-teal-50 dark:bg-slate-700 text-slate-800 dark:text-slate-200 w-36 h-36 flex items-center justify-center rounded-2xl mb-10">
                  {item.icon === "FaSearchengin" ? <FaSearchengin className='w-24 h-24' /> : item.icon === "FaHeartbeat" ? <FaHeartbeat className='w-24 h-24' /> : <BsFillChatLeftTextFill className='w-24 h-24' />}
                </div>
                <div id="cardContent">
                  <h3 className="text-2xl text-center font-bold text-teal-700 dark:text-slate-300 mb-4">
                    {item.title}
                  </h3>
                  <p className='text-sm text-center text-slate-500 dark:text-slate-200 font-normal'>
                    {item.description}
                  </p>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Values