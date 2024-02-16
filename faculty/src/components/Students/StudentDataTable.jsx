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
const Drop = styled.select`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  margin-left: 10px;
`
const DropOption = styled.option`
  background-color: white;
  color: #010126;
`
const WrapBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const OptionsLabel = styled.span`
  font-size: 1rem;
  color: white;
`
const LabelWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
// tables code
const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'fname', headerName: 'Father Name', width: 140 },
  { field: 'createdAt', headerName: 'Apply Date', width: 130 },
  { field: 'fcell', headerName: 'Cell#', width: 130, sortable: false },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    width: 120,
    renderCell: (params) => (
      <span
        style={{
          color: params.row.status === 'Waiting' ? 'red' : 'green',
          backgroundColor:
            params.row.status === 'Waiting' ? '#fd2f2f39' : '#06d0063b',
          padding: '0.5rem',
          borderRadius: '10px',
        }}
      >
        {params.row.status}
      </span>
    ),
  },
  { field: 'address', headerName: 'Address', width: 320, sortable: false },
]

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

export default function StudentDataTable({ bookingDate }) {
  const [statusFilter, setStatusFilter] = useState('All') // Initial state for showing all students
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

  const rows = data
    .filter((item) => statusFilter === 'All' || item.status === statusFilter)
    .map((item) => ({
      id: counter++,
      _id: item._id,
      name: item.name,
      fname: item.fname,
      createdAt: formatDate(item.createdAt),
      fcell: item.fcell,
      address: item.address,
      status: item.status,
    }))

  const handleExportToExcel = () => {
    // Map rows with the correct header names
    const mappedRows = rows.map((row) => ({
      ID: row.id,
      Name: row.name,
      Father: row.fname,
      Apply: row.createdAt,
      Cell: row.fcell,
      Address: row.address,
      Status: row.status,
    }))

    // Filter rows based on the current statusFilter
    const filteredRows =
      statusFilter === 'All'
        ? mappedRows
        : mappedRows.filter((row) => row.Status === statusFilter)

    // Create a worksheet with headers
    const ws = XLSX.utils.json_to_sheet(filteredRows, {
      header: Object.keys(filteredRows[0]),
    })

    const csv = XLSX.utils.sheet_to_csv(ws)
    const blob = new Blob([csv], { type: 'text/csv' })

    // Generate the current date string
    const currentDate = new Date().toISOString().split('T')[0] // Format: YYYY-MM-DD

    // Create a download link and click it with a dynamic file name
    const a = document.createElement('a')
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = `admissions_${statusFilter}_${currentDate}.csv` // Include statusFilter in the filename
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value)
  }
  return (
    <Wrap>
      <WrapBtn>
        <LabelWrap>
          <OptionsLabel>Status:</OptionsLabel>
          <Drop value={statusFilter} onChange={handleStatusChange}>
            <DropOption value='All'>All</DropOption>
            <DropOption value='Enrolled'>Enrolled</DropOption>
            <DropOption value='Waiting'>Waiting</DropOption>
          </Drop>
        </LabelWrap>

        <GreenBtn
          onClick={handleExportToExcel}
          variant='outlined'
          color='primary'
        >
          <Download style={{ marginRight: '5px' }} /> Save to Excel
        </GreenBtn>
      </WrapBtn>

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
