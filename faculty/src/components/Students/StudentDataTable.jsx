import { Download } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'

import * as React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import * as XLSX from 'xlsx'
import Loader from '../../Loader/Loader'
import { axiosInstance } from '../../config'

// styling of tables
const Wrap = styled.div`
  height: 100%;
  width: 95%;
  border-radius: 10px;
`
const GreenBtn = styled.button`
  background-color: #058d19;
  padding: 0.5rem 0.8rem;
  color: white;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`
const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px);
`
// tables code
const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Name', width: 120 },
  { field: 'fname', headerName: 'Father Name', width: 120 },
  { field: 'dob', headerName: 'DOB', width: 130 },
  { field: 'fcell', headerName: 'Cell#', width: 130 },
  { field: 'fcnic', headerName: 'CNIC', width: 150 },
  { field: 'address', headerName: 'Address', width: 320 },
]

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

export default function StudentDataTable({ bookingDate }) {
  const [err, setErr] = useState('No Booking Found')
  const navigate = useNavigate()

  const { data, status } = useQuery('all-admissions', async () => {
    const res = await axiosInstance.get(`/admission`)
    return res.data
  })

  if (status === 'loading') {
    return (
      <LoaderWrap>
        <Loader msg='Loading Admissions...' />
      </LoaderWrap>
    )
  }

  let counter = 1

  const rows = data.map((item) => ({
    id: counter++,
    _id: item._id,
    name: item.name,
    fname: item.fname,
    dob: formatDate(item.dob),
    fcell: item.fcell,
    fcnic: item.fcnic,
    address: item.address,
  }))

  const handleExportToExcel = () => {
    // Map rows with the correct header names
    const mappedRows = rows.map((row) => ({
      ID: row.id,
      Name: row.name,
      Father: row.fname,
      DOB: row.dob,
      Cell: row.fcell,
      CNIC: row.fcnic,
      Address: row.address,
    }))

    // Create a worksheet with headers
    const ws = XLSX.utils.json_to_sheet(mappedRows, {
      header: Object.keys(mappedRows[0]),
    })

    const csv = XLSX.utils.sheet_to_csv(ws)
    const blob = new Blob([csv], { type: 'text/csv' })

    // Generate the current date string
    const currentDate = new Date().toISOString().split('T')[0] // Format: YYYY-MM-DD

    // Create a download link and click it with a dynamic file name
    const a = document.createElement('a')
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = `admissions_${currentDate}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <Wrap>
      <GreenBtn
        onClick={handleExportToExcel}
        variant='outlined'
        color='primary'
      >
        <Download style={{ marginRight: '5px' }} /> Save to Excel
      </GreenBtn>
      <DataGrid
        id='data-grid'
        rows={rows}
        columns={columns}
        pageSize={5}
        onRowClick={(param) => navigate(`view/${param.row._id}`)}
        style={{
          borderRadius: '10px',
          fontSize: '0.9rem',
          backgroundColor: 'white',
          padding: '0 1rem',
        }}
      />
    </Wrap>
  )
}
