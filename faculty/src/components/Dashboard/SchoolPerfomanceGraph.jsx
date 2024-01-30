// src/components/SchoolPerformanceGraph.js
import React from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import styled from 'styled-components'

const ChartContainer = styled.div`
  padding: 1rem;
  border-radius: 1rem;
`

const Title = styled.p`
  font-size: 2rem;
  color: #3aa933;
`

const gradientColor = (opacity = 1) => `rgba(66, 165, 245, ${opacity})`

const SchoolPerformanceGraph = ({ data }) => {
  return (
    <ChartContainer>
      <Title>School Perfomance</Title>
      <AreaChart
        width={970}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <defs>
          <linearGradient id='performanceGradient' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#66BB6A' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#42A5F5' stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type='monotone'
          dataKey='performance'
          stroke={gradientColor(1)}
          fill='url(#performanceGradient)'
        />
      </AreaChart>
    </ChartContainer>
  )
}

export default SchoolPerformanceGraph
