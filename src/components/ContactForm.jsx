"use client"
import { React, useState } from 'react'

const ContactForm = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div>

            <form className="w-full max-w-lg">

                <div className="flex flex-wrap -mx-3 mb-0">

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-2">
                        <label className="block  tracking-wide text-white text-sm   font-BearFont-regular mb-1" htmlFor="grid-first-name">
                            First name
                        </label>
                        <input
                            className=" text-base block w-full bg-[#131313] font-BearFont-regular transition-all duration-200 focus:border-[#06A991] text-[#878787] border-1 border border-[#1F1F1F] rounded-[8px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#131313]"
                            id="grid-first-name"
                            type="text"
                            placeholder=""
                        />

                    </div>

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-2">
                        <label className="block  tracking-wide text-white text-sm   font-BearFont-regular mb-1" htmlFor="grid-last-name">
                            Last name
                        </label>
                        <input
                            className=" text-base block w-full bg-[#131313] font-BearFont-regular transition-all duration-200 focus:border-[#06A991] text-[#878787] border-1 border border-[#1F1F1F] rounded-[8px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#131313]"
                            id="grid-last-name"
                            type="text"
                            placeholder=""
                        />

                    </div>

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block  tracking-wide text-white text-sm   font-BearFont-regular mb-1" htmlFor="grid-email-name">
                            Email
                        </label>
                        <input
                            className=" text-base block w-full bg-[#131313] font-BearFont-regular transition-all duration-200 focus:border-[#06A991] text-[#878787] border-1 border border-[#1F1F1F] rounded-[8px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#131313]"
                            id="grid-email-name"
                            type="email"
                            placeholder=""
                        />

                    </div>

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block  tracking-wide text-white text-sm   font-BearFont-regular mb-1" htmlFor="grid-last-name">
                            Phone number
                        </label>
                        <input
                            className=" text-base block w-full bg-[#131313] font-BearFont-regular transition-all duration-200 focus:border-[#06A991] text-[#878787] border-1 border border-[#1F1F1F] rounded-[8px] py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#131313]"
                            id=""
                            type="tel"
                            placeholder=""
                        />

                    </div>




                </div>

                {/* select option  */}
                <div className="flex flex-wrap -mx-3 mb-1">


                    <div className='w-full mt-2 px-3 mb-6 md:mb-0'>

                        <label className="block  tracking-wide text-white text-sm   font-BearFont-regular mb-1" htmlFor="grid-last-name">
                            I&apos;m Interested in
                        </label>


                        <div className="inline-block relative w-full">
                            <select className="block space-y-10 focus:outline-none appearance-none w-full bg-[#131313] font-BearFont-regular  text-[#878787] border-1 border border-[#1F1F1F]  rounded-[8px] py-3 px-4 mb-3 shadow leading-tight focus:border-[#06A991]" >
                                <option className="py-12 "    > Product Developement</option>

                                <option>Single Page Package</option>
                                <option>Custom Package</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-4 mb-2 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>


                    </div>


                </div>


                {/* CheckBox  */}
                <div className="flex flex-wrap -mx-3 mb-4">


                    <div className='w-full mt-2 px-3 mb-6 md:mb-0'>

                        <label className="block  tracking-wide text-white text-sm   font-BearFont-regular mb-1" htmlFor="grid-last-name">
                            What&apos;s your budget?
                        </label>


                        <ul className="grid w-full gap-6 md:grid-cols-3">
                            <li>
                                <input
                                    type="checkbox"
                                    id="first-option"
                                    value=""
                                    className="hidden peer"
                                    checked={selectedOption === "first-option"}
                                    onChange={() => setSelectedOption("first-option")}

                                />
                                <label
                                    htmlFor="first-option"
                                    className="inline-flex items-center justify-center w-full p-3   text-[#878787] bg-[#131313] border border-1 border-[#1F1F1F] rounded-lg cursor-pointer  peer-checked:border-[#06A991]   peer-checked:text-white peer:text-[#878787]  dark:text-gray-400 dark:bg-gray-800"
                                >
                                    <div className="block">

                                        <div className="w-full  tracking-wide px-1  text-sm   font-BearFont-regular">$1000-$5000</div>

                                    </div>
                                </label>
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    id="second-option"
                                    value=""
                                    className="hidden peer"
                                    checked={selectedOption === "second-option"}
                                    onChange={() => setSelectedOption("second-option")}

                                />
                                <label
                                    htmlFor="second-option"
                                    className="inline-flex items-center justify-center w-full p-3   text-[#878787] bg-[#131313] border border-1 border-[#1F1F1F] rounded-lg cursor-pointer  peer-checked:border-[#06A991]   peer-checked:text-white peer:text-[#878787]  dark:text-gray-400 dark:bg-gray-800"
                                >
                                    <div className=" flex justify-center">

                                        <div className="w-full  tracking-wide px-1  text-sm   font-BearFont-regular">$5000-$10000</div>

                                    </div>
                                </label>
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    id="third-option"
                                    value=""
                                    className="hidden peer"
                                    checked={selectedOption === "third-option"}
                                    onChange={() => setSelectedOption("third-option")}

                                />
                                <label
                                    htmlFor="third-option"
                                    className="inline-flex items-center justify-between w-full p-3   text-[#878787] bg-[#131313] border border-1 border-[#1F1F1F] rounded-lg cursor-pointer  peer-checked:border-[#06A991]   peer-checked:text-white peer:text-[#878787]  dark:text-gray-400 dark:bg-gray-800"
                                >
                                    <div className="block">

                                        <div className="w-full  tracking-wide px-1  text-sm   font-BearFont-regular">$5000-$10000</div>

                                    </div>
                                </label>
                            </li>

                        </ul>


                    </div>


                </div>


                <div className="flex flex-wrap -mx-3 mb-6">



                    <div className="w-full   px-3 mb-6 md:mb-0">
                    <label className="block  tracking-wide text-white text-sm   font-BearFont-regular mb-1" htmlFor="grid-last-name">
                            How can we help you?
                        </label>
                        <textarea
                            className=" text-base block w-full focus:outline-none bg-[#131313] font-BearFont-regular transition-all duration-200 focus:border-[#06A991] text-[#878787] border-1 border border-[#1F1F1F] rounded-[8px] py-4 px-4 mb-3 leading-tight"
                            id="grid-message-name"
                            type="text"
                            placeholder=""
                            style={{ height: '100px', width: '100%' }}
                        />

                    </div>




                </div>

                <div className="flex justify-center bg-[#06A991] rounded-[8px] ">
                    <button
                        className="flex justify-center gap-4 items-center  text-white py-4 font-BearFont-semibold  text-lg font-500 rounded-[8px] px-4 w-full  hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        type="submit"
                    >
                        Go Green

                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M1.5 8H15.5M15.5 8L8.5 1M15.5 8L8.5 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}

                    </button>
                </div>



            </form>

        </div>
    )
}

export default ContactForm