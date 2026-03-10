import React from 'react'
export default function HeroLayout({ title, spanText, description, bgImage }) {

    return (
        <div className="pt-40 flex flex-col items-center justify-center px-4 pb-48 text-center text-sm text-white max-md:px-2 bg-cover bg-center h-[400px] rounded-bl-[30vh] relative" style={{ backgroundImage: `linear-gradient(rgba(1, 0, 3, 0.65), rgba(1, 0, 7, 0.65)), url(${bgImage})` }}>
            <div className='pt-30'>
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">{title}<span className='text-[#ffa843]'>{spanText}</span></h1>
                <p className="mx-auto max-w-2xl dark:text-body-color-dark mb-6 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">{description}</p>
            </div>
            
        </div>
    )
}