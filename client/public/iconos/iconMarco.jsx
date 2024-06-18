import React from 'react'

export default function IconMarco({color,colorBackground, className, className2}) {
  return (
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className={className}>
<path d="M0 0 C330 0 660 0 1000 0 C1000 330 1000 660 1000 1000 C670 1000 340 1000 0 1000 C0 670 0 340 0 0 Z " fill="none" transform="translate(0,0)"/>

<path d="M0 0 C198 0 396 0 600 0 C600 33 600 66 600 100 C402 100 204 100 0 100 C0 67 0 34 0 0 Z " fill={color} transform="translate(200,900)" className="drop-shadow"/>

<path d="M0 0 C198 0 396 0 600 0 C600 33 600 66 600 100 C402 100 204 100 0 100 C0 67 0 34 0 0 Z " fill={color} transform="translate(200,0)" className="drop-shadow"/>

<path d="M0 0 C33 0 66 0 100 0 C100 197.67 100 395.34 100 599 C67 599 34 599 0 599 C0 401.33 0 203.66 0 0 Z " fill={color} transform="translate(900,201)" className="drop-shadow"/>

<path d="M0 0 C33 0 66 0 100 0 C100 197.67 100 395.34 100 599 C67 599 34 599 0 599 C0 401.33 0 203.66 0 0 Z " fill={color} transform="translate(0,201)" className="drop-shadow"/>

<path d="M0 0 C66 0 132 0 200 0 C200 66.33 200 132.66 200 201 C167 201 134 201 100 201 C100 167.67 100 134.34 100 100 C67 100 34 100 0 100 C0 67 0 34 0 0 Z " fill={colorBackground} transform="translate(800,0)" className='hidden'/>

<path d="M0 0 C66 0 132 0 200 0 C200 33 200 66 200 100 C167 100 134 100 100 100 C100 133.33 100 166.66 100 201 C67 201 34 201 0 201 C0 134.67 0 68.34 0 0 Z " fill={colorBackground} transform="translate(0,0)" className='hidden'/>

<path d="M0 0 C33 0 66 0 100 0 C100 66 100 132 100 200 C34 200 -32 200 -100 200 C-100 167 -100 134 -100 100 C-67 100 -34 100 0 100 C0 67 0 34 0 0 Z " fill={colorBackground} transform="translate(900,800)" className='hidden'/>

<path d="M0 0 C33 0 66 0 100 0 C100 33 100 66 100 100 C133 100 166 100 200 100 C200 133 200 166 200 200 C134 200 68 200 0 200 C0 134 0 68 0 0 Z " fill={colorBackground} transform="translate(0,800)" className='hidden'/>

<path d="M0 0 C33 0 66 0 100 0 C100 33.33 100 66.66 100 101 C67 101 34 101 0 101 C0 67.67 0 34.34 0 0 Z " fill={color} transform="translate(800,100)" className="drop-shadow"/>

<path d="M0 0 C33 0 66 0 100 0 C100 33.33 100 66.66 100 101 C67 101 34 101 0 101 C0 67.67 0 34.34 0 0 Z " fill={color} transform="translate(100,100)" className="drop-shadow"/>

<path d="M0 0 C33 0 66 0 100 0 C100 33 100 66 100 100 C67 100 34 100 0 100 C0 67 0 34 0 0 Z " fill={color} transform="translate(800,800)" className="drop-shadow"/>

<path d="M0 0 C33 0 66 0 100 0 C100 33 100 66 100 100 C67 100 34 100 0 100 C0 67 0 34 0 0 Z " fill={color} transform="translate(100,800)" className="drop-shadow"/>

</svg>
  )
}
