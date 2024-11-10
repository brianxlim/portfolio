import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function LandingText() {
    const [text] = useTypewriter({
        words: [" Developer", " Data Scientist", "Athlete", " Data Engineer", " Designer"],
        loop: 0,
        typeSpeed: 120,
        deleteSpeed: 80
    })

    return (
        <div>
            <span className='text-8xl font-bold text-orange-600'>
                {text}
            </span>
            <span className='text-orange-600 text-8xl'>
                <Cursor cursorStyle="|" />
            </span>
        </div>
    )
}

export default LandingText
