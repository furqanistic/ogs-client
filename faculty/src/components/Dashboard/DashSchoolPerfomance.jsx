import React from 'react'
import schoolData from './schoolData'
import SchoolPerformanceGraph from './SchoolPerfomanceGraph'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;

  padding-top: 1.5rem;
`
const DashSchoolPerfomance = () => {
  return (
    <Wrap>
      <SchoolPerformanceGraph data={schoolData} />
    </Wrap>
  )
}

export default DashSchoolPerfomance
