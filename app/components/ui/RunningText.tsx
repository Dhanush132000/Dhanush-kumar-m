'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

function RunningText({}: Props) {
    const [text,count]= useTypewriter ({
        words: ["hello, i'm Dhanush kumar m"],
        loop: true,
        delaySpeed:2000,
    });
  return (
    <div>
        <p>
            {text}
        </p>
    </div>
  )
}

export default RunningText