import { useState } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import Layout from '../components/Layout';

const Contact = () => {
  const intl = useIntl();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false)

  const { name, email, phone, subject, message } = formData;

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    // let isValidForm = handleValidation();

    const res = await fetch("/api/contact", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }
    console.log(formData);
    
    setFormData({
      name: "",
      email: "",
      phone: "", 
      subject: "",
      message: ""
    })

  }

  const title = intl.formatMessage({ id: "page.contact.head.title" });
  const description = intl.formatMessage({ id: "page.contact.head.meta.description" });

  return (
    <Layout title={title} description={description}>
      <div className='-mt-20 bg-white dark:bg-slate-900'>
        <div className="flex flex-col md:flex-row px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-10 lg:py-20">
          <div className="md:basis-3/5 h-full py-16 lg:py-28">
            <h2 className='text-2xl font-semibold'>
              <FormattedMessage id="page.contact.form.title" />
            </h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="md:flex items-center mt-12">
                      <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none text-gray-800 dark:text-gray-300">
                          <FormattedMessage id="page.contact.form.label.name" />
                        </label>
                        <input 
                          type="text" 
                          className="leading-none dark:text-gray-50 text-gray-700 p-3 focus:outline-none mt-4 border border-gray-300 focus:border-teal-500 dark:border-0 bg-white dark:bg-gray-800 rounded"
                          name="name" 
          	              value={name}
          	              onChange={e => onChange(e)}
                        />
                    </div>     
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <label className="font-semibold leading-none text-gray-800 dark:text-gray-300">
                        <FormattedMessage id="page.contact.form.label.email" />
                        </label>
                        <input 
                          type="text" 
                          className="leading-none dark:text-gray-50 text-gray-700 p-3 focus:outline-none mt-4 border border-gray-300 focus:border-teal-500 dark:border-0 bg-white dark:bg-gray-800 rounded" 
                          name="email" 
          	              value={email}
          	              onChange={e => onChange(e)}
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none text-gray-800 dark:text-gray-300">
                          <FormattedMessage id="page.contact.form.label.phone" />
                        </label>
                        <input 
                          type="tel" 
                          className="leading-none dark:text-gray-50 text-gray-700 p-3 focus:outline-none mt-4 border border-gray-300 focus:border-teal-500 dark:border-0 bg-white dark:bg-gray-800 rounded"
                          name="phone" 
          	              value={phone}
          	              onChange={e => onChange(e)}
                        />
                    </div>
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none text-gray-800 dark:text-gray-300">
                          <FormattedMessage id="page.contact.form.label.subject" />
                        </label>
                        <input 
                          type="text" 
                          className="leading-none dark:text-gray-50 text-gray-700 p-3 focus:outline-none mt-4 border border-gray-300 focus:border-teal-500 dark:border-0 bg-white dark:bg-gray-800 rounded"
                          name="subject" 
          	              value={subject}
          	              onChange={e => onChange(e)}
                        />
                    </div>
                </div>
                
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="font-semibold leading-none text-gray-800 dark:text-gray-300">
                          <FormattedMessage id="page.contact.form.label.message" />
                        </label>
                        <textarea 
                          type="text" 
                          className="h-40 text-base leading-none dark:text-gray-50 text-gray-700 p-3 focus:outline-none mt-4 border border-gray-300 focus:border-teal-500 dark:border-0 bg-white dark:bg-gray-800 rounded"
                          name="message" 
          	              value={message}
          	              onChange={e => onChange(e)}
                        ></textarea>
                    </div>
                </div>
                <div className="flex w-full">
                    <button className="
                        inline-block
                        py-4
                        px-6
                        md:px-9
                        lg:px-6
                        xl:px-9
                        rounded
                        text-base
                        font-medium
                        bg-[#13C296]
                      dark:bg-teal-700
                        transition
                        hover:bg-opacity-90
                        text-white
                        my-12
                      "
                      disabled
                      title="We are still working on the contact form"
                    >
                        <FormattedMessage id="page.contact.form.button.submit" />
                    </button>
                </div>
            </form>
          </div>
          <div className="md:basis-2/5 lg:py-28">
            <div className="flex items-center justify-center">
              <p className='mt-24 text-xl font-semibold'>
                hello@growthshapers.com
              </p>
            
            </div> 
          </div>
        </div>         
      </div>
    </Layout>
  )
}

export default Contact