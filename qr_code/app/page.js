"use client"
import QRCode from 'react-qr-code'
import { useState } from 'react'

export default function Home() {

  const [text, setText] = useState('')
  function handleChange(e) {
    setText(e.target.value)
  }
  return (
    <div>
      <h1>QR Code</h1>
      <QRCode value={text} /> 

      <div>
        <p>Enter your text</p>
        <input type="text" value={ text} onChange={(e)=>{handleChange(e)}} />
        <button>Generate</button>
      </div>
    </div>
  )
}
