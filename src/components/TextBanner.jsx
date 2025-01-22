import React from 'react'



const MovingText = [

    { id: 1, text: " Development" },
    { id: 2, text: " UI/UX Design" },
    { id: 3, text: " Design" },
    { id: 4, text: " AI/ML" },
    { id: 5, text: " Development" },
    { id: 6, text: " UI/UX Design" },
    { id: 7, text: " Design" },
    { id: 8, text: " AI/ML" },
    { id: 9, text: " Development" },
    { id: 10, text: " UI/UX Design" },
    { id: 11, text: " Design" },
    { id: 12, text: " AI/ML" },

];

const TextBanner = () => {


    const myStyle = {
        animation: "scroll 40s linear infinite",

    };



    return (
        <div className='bg-gradient-to-r  from-[#9032FF] to-[#2045FF] py-10 md:py-6 overflow-hidden '>


            <div className="text-banner  text-white font-display capitalize text-[30px] md:text-[100px]">

                
                   <div>
                   <ul className="flex items-center space-x-20 animate-scroll" style={myStyle}  >
                        {MovingText.map((person, index) => (


                            <li key={index} className='flex w-full text-[35px] font-BearFont-medium   gap-x-8 md:gap-x-8 items-center' >
                                <p className='w-full' >{person.text}</p>

                                <div>
                                    <svg
                                       
                                        viewBox="0 0 74 74"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="ml-10 md:ml-10 text-black w-8 md:w-12 h-8 md:h-12" // Use Tailwind CSS to apply the "text-black" class
                                    >
                                        <path
                                            d="M37 0L39.2983 28.4226L55.5 4.95706L43.2791 30.7209L69.0429 18.5L45.5774 34.7017L74 37L45.5774 39.2983L69.0429 55.5L43.2791 43.2791L55.5 69.0429L39.2983 45.5774L37 74L34.7017 45.5774L18.5 69.0429L30.7209 43.2791L4.95706 55.5L28.4226 39.2983L0 37L28.4226 34.7017L4.95706 18.5L30.7209 30.7209L18.5 4.95706L34.7017 28.4226L37 0Z"
                                            fill="currentColor" // Use "currentColor" to set the fill color to the current text color
                                        />
                                    </svg>
                                </div>
                            </li>

                        ))}
                    </ul>
                   </div>
               


            </div>

        </div>
    )
}

export default TextBanner