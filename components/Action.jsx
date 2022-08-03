import React from 'react'

const Action = () => {
  return (
    <section className="">
          <div
            className="
            bg-teal-600
            dark:bg-teal-900
            relative
            overflow-hidden
            py-20
            px-8
            md:p-[120px]
            z-10
            "
            >
            <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full lg:w-1/2 px-4">
                  <span className="text-white text-base font-semibold mb-2">
                  Find Your Next Dream App
                  </span>
                  <h2
                      className="
                      text-white
                      font-bold
                      text-3xl
                      sm:text-[38px]
                      leading-tight
                      mb-6
                      sm:mb-8
                      lg:mb-0
                      "
                      >
                      Get started with <br className="hidden xs:block" />
                      our free trial
                  </h2>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="flex flex-wrap lg:justify-end">
                      <a
                        href="javascript:void(0)"
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
                        hover:bg-opacity-100 hover:text-primary
                        mr-4
                        my-1
                        transition
                        "
                        >
                      Get Pro Version
                      </a>
                      <a
                        href="javascript:void(0)"
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
                        bg-[#13C296]
                        transition
                        hover:bg-opacity-90
                        text-white
                        my-1
                        "
                        >
                      Start Free Trial
                      </a>
                  </div>
                </div>
            </div>
            <div>
                <span className="absolute top-0 left-0 z-[-1]">
                  <svg
                      width="189"
                      height="162"
                      viewBox="0 0 189 162"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <ellipse
                        cx="16"
                        cy="-16.5"
                        rx="173"
                        ry="178.5"
                        transform="rotate(180 16 -16.5)"
                        fill="url(#paint0_linear)"
                        />
                      <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="-157"
                            y1="-107.754"
                            x2="98.5011"
                            y2="-106.425"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="white" stopOpacity="0.07" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                  </svg>
                </span>
                <span className="absolute bottom-0 right-0 z-[-1]">
                  <svg
                      width="191"
                      height="208"
                      viewBox="0 0 191 208"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <ellipse
                        cx="173"
                        cy="178.5"
                        rx="173"
                        ry="178.5"
                        fill="url(#paint0_linear)"
                        />
                      <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="-3.27832e-05"
                            y1="87.2457"
                            x2="255.501"
                            y2="88.5747"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="white" stopOpacity="0.07" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                  </svg>
                </span>
            </div>
          </div>
    </section>
  )
}

export default Action