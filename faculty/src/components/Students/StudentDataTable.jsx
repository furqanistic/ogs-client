import { Delete, DeleteForever, Download } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'

import * as React from 'react'
import { useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
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
const RedBtn = styled.button`
  background-color: #8d0505;
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
  margin-right: 15px;
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
const BtnSet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const CardBase = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73); /* Adjust the opacity as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensure it's above other content */
`
const CardContainer = styled.div`
  overflow: hidden;
  position: relative;
  text-align: left;
  border-radius: 0.5rem;
  max-width: 290px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  background-color: #fff;
`

const DismissButton = styled.button`
  cursor: pointer;

  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: black;
  border: 2px solid #d1d5db;
  font-size: 1rem;
  font-weight: 300;
  width: 30px;
  height: 30px;
  border-radius: 7px;
  transition: 0.3s ease;

  &:hover {
    background-color: #ee0d0d;
    border: 2px solid #ee0d0d;
    color: #fff;
  }
`

const Header = styled.div`
  padding: 1.25rem 1rem 1rem 1rem;
`

const Image = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background-color: #fee2e2;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  animation: animate 0.6s linear alternate-reverse infinite;
  transition: 0.6s ease;

  svg {
    color: #420afa;
    width: 2rem;
    height: 2rem;
  }
`

const Content = styled.div`
  margin-top: 0.75rem;
  text-align: center;
`

const Title = styled.span`
  color: #6e0606;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
`

const Message = styled.p`
  margin-top: 0.5rem;
  color: #000000;
  font-size: 0.875rem;
  line-height: 1.25rem;
`

const Actions = styled.div`
  margin: 0.75rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const HistoryButton = styled.button`
  display: inline-flex;
  padding: 0.5rem 1rem;
  background-color: #b7050533;
  border: 1px solid #b70505;
  color: #b70505;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;
  justify-content: center;
  width: 100%;
  border-radius: 0.375rem;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #b70505;
    color: #ffffff;
    font-weight: 700;
  }
`

const animate = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.09);
  }
`

const ImageAnimation = styled(Image)`
  animation: ${animate} 0.6s linear alternate-reverse infinite;
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
  const [showCard, setShowCard] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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

  const handleDeleteEnrolled = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    try {
      await axiosInstance.delete(`/admission/delete-enrolled`)
      navigate('/students/all-admissions')
    } catch (err) {
      console.log(err)
    }
    setIsLoading(false)

    window.location.reload()
  }
  const handleDeleteWaiting = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    try {
      await axiosInstance.delete(`/admission/delete-waiting`)
      navigate('/students/all-admissions')
    } catch (err) {
      console.log(err)
    }
    setIsLoading(false)

    window.location.reload()
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
        <BtnSet>
          <RedBtn onClick={() => setShowCard(true)}>
            <DeleteForever style={{ marginRight: '5px' }} /> Bulk Delete
          </RedBtn>
          <GreenBtn
            onClick={handleExportToExcel}
            variant='outlined'
            color='primary'
          >
            <Download style={{ marginRight: '5px' }} /> Save to Excel
          </GreenBtn>
        </BtnSet>
      </WrapBtn>
      {showCard && (
        <CardBase>
          <CardContainer>
            <DismissButton type='button' onClick={() => setShowCard(false)}>
              ×
            </DismissButton>
            <Header>
              <ImageAnimation>
                <Delete style={{ color: 'red' }} />
              </ImageAnimation>
              <Content>
                <Title>Reminder!</Title>
                <Message>
                  {' '}
                  <br></br>Please be careful, deleted records can not be
                  returned!
                </Message>
              </Content>
              {!isLoading && (
                <Actions>
                  <HistoryButton type='button' onClick={handleDeleteEnrolled}>
                    Delete Enrolled Students
                  </HistoryButton>
                  <HistoryButton type='button' onClick={handleDeleteWaiting}>
                    Delete Waiting Students
                  </HistoryButton>
                </Actions>
              )}
              {isLoading && (
                <Actions>
                  <Oval
                    visible={true}
                    height='40'
                    width='40'
                    strokeWidth='5'
                    color='#a80707'
                    secondaryColor='#e80000'
                    ariaLabel='oval-loading'
                  />
                </Actions>
              )}
            </Header>
          </CardContainer>
        </CardBase>
      )}
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
