import React from 'react'
import './loader.css'
const Loader = ({ msg }) => {
  return (
    <div className='wrap'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='200px'
        width='200px'
        viewBox='0 0 200 200'
        class='pencil'
      >
        <defs>
          <clipPath id='pencil-eraser'>
            <rect height='30' width='30' ry='5' rx='5'></rect>
          </clipPath>
        </defs>
        <circle
          transform='rotate(-113,100,100)'
          stroke-linecap='round'
          stroke-dashoffset='439.82'
          stroke-dasharray='439.82 439.82'
          stroke-width='2'
          stroke='white'
          fill='none'
          r='70'
          class='pencil__stroke'
        ></circle>
        <g transform='translate(100,100)' class='pencil__rotate'>
          <g fill='none'>
            <circle
              transform='rotate(-90)'
              stroke-dashoffset='402'
              stroke-dasharray='402.12 402.12'
              stroke-width='30'
              stroke='#1450d2'
              r='64'
              class='pencil__body1'
            ></circle>
            <circle
              transform='rotate(-90)'
              stroke-dashoffset='465'
              stroke-dasharray='464.96 464.96'
              stroke-width='10'
              stroke='hsl(241.1111111111111, 91.52542372881356%, 46.27450980392157%)'
              r='74'
              class='pencil__body2'
            ></circle>
            <circle
              transform='rotate(-90)'
              stroke-dashoffset='339'
              stroke-dasharray='339.29 339.29'
              stroke-width='10'
              stroke='#0e1097'
              r='54'
              class='pencil__body3'
            ></circle>
          </g>
          <g transform='rotate(-90) translate(49,0)' class='pencil__eraser'>
            <g class='pencil__eraser-skew'>
              <rect height='30' width='30' ry='5' rx='5' fill='#0051ff'></rect>
              <rect
                clip-path='url(#pencil-eraser)'
                height='30'
                width='5'
                fill='#0b2255'
              ></rect>
              <rect height='20' width='30' fill='hsl(223,10%,90%)'></rect>
              <rect height='20' width='15' fill='hsl(223,10%,70%)'></rect>
              <rect height='20' width='5' fill='hsl(223,10%,80%)'></rect>
              <rect
                height='2'
                width='30'
                y='6'
                fill='hsla(223,10%,10%,0.2)'
              ></rect>
              <rect
                height='2'
                width='30'
                y='13'
                fill='hsla(223,10%,10%,0.2)'
              ></rect>
            </g>
          </g>
          <g transform='rotate(-90) translate(49,-30)' class='pencil__point'>
            <polygon points='15 0,30 30,0 30' fill='hsl(33,90%,70%)'></polygon>
            <polygon points='15 0,6 30,0 30' fill='hsl(33,90%,50%)'></polygon>
            <polygon
              points='15 0,20 10,10 10'
              fill='hsl(132.10526315789474, 81.42857142857143%, 27.450980392156865%)'
            ></polygon>
          </g>
        </g>
      </svg>
      <span className='load'>{msg}</span>
    </div>
  )
}

export default Loader
