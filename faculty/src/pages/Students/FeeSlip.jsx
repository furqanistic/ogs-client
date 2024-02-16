// FeeSlipComponent.js
import { CloudDownload } from '@mui/icons-material'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import React, { useRef } from 'react'
import Barcode from 'react-barcode'
import styled from 'styled-components'

const Row = styled.div`
  position: relative;
  height: 100%;

  &:after {
    content: '';
    display: table;
    clear: both;
  }
`

const Wrap = styled.div`
  display: flex;
`
const Column = styled.div`
  float: left;
  width: 25%;
  padding: 10px;
  border-right: 1px dotted #000;
  height: 100%;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  font-size: 0.8em;
`

const JustifyBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8em;
`

const TextBox = styled.strong`
  justify-content: center;
  padding: 0.5rem 0;
`

const DateWrap = styled.div`
  display: flex;
  padding: 1rem 0;
  font-size: 0.8em;
`

const FloatRight = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  justify-content: flex-end;
  font-size: 0.8em;
`

const Image = styled.img`
  width: 200px;
  align-self: center;
  margin-top: 5px;
  margin-bottom: 20px;
`

const Table = styled.table`
  margin-top: 10px;
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
`

const TableRow = styled.tr`
  background-color: #fff;
  border: 1px solid #000;
  padding: 0.35em;
  font-size: 0.9rem;
  letter-spacing: 1px;
`

const TableHeader = styled.th`
  padding: 0.625em;
  border: 1px solid #000;
`

const TableCell = styled.td`
  padding: 0.625em;
  border: 1px solid #000;
  font-size: 0.7em;
`

const HorizontalRule = styled.hr`
  border-top: 1px solid #000;
`

const DownloadButton = styled.button`
  background-color: #026806;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`
const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  @media print {
    display: none;
  }
`
const FeeSlip = () => {
  const savePdfRef = useRef(null)
  const editRef = useRef(null)
  const deleteRef = useRef(null)

  const generatePDF = () => {
    console.log('1')
    if (savePdfRef.current) {
      savePdfRef.current.style.display = 'none'
    }
    if (editRef.current) {
      editRef.current.style.display = 'none'
    }
    if (deleteRef.current) {
      deleteRef.current.style.display = 'none'
    }
    const input = document.getElementById('booking-form-wrap')

    input.style.width = '1200px' // Adjust this value based on the desired output
    input.style.height = '700px' // Adjust this value based on the desired output

    html2canvas(input, {
      scale: 2,
      logging: true,
      dpi: window.devicePixelRatio * 192,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg', 1.0) // Use JPEG format with quality 1.0 (no compression)

      const pdfWidth = 297 // A4 dimensions in mm
      const pdfHeight = 187

      const imgWidth = pdfWidth
      const imgHeight = pdfHeight

      const pdf = new jsPDF('landscape', 'mm', 'a4') // Set to landscape orientation

      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight)

      pdf.save('file.pdf')

      if (savePdfRef.current) {
        savePdfRef.current.style.display = 'block'
      }
      if (editRef.current) {
        editRef.current.style.display = 'block'
      }
      if (deleteRef.current) {
        deleteRef.current.style.display = 'block'
      }
    })
  }

  return (
    <>
      <Row id='booking-form-wrap'>
        <Column>
          <JustifyBetween>
            <TextBox>Invoice # INV/2024</TextBox>
            {/* <TextBox>Student Copy</TextBox> */}
          </JustifyBetween>
          <FlexContainer>
            <FlexColumn>
              <span>Due Date:</span>
              <span>01/01/2025</span>
            </FlexColumn>
            <FlexColumn>
              <span>Account: 75-HBL</span>
              <span>The Orion School</span>
            </FlexColumn>
          </FlexContainer>
          <FlexContainer>
            <Barcode value='ABC123' height={50} className='barcode' />
          </FlexContainer>
          <Table>
            <thead>
              <TableRow>
                <TableHeader scope='col left' colSpan='2'>
                  Description
                </TableHeader>
                <TableHeader scope='col right'>Amount</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell data-label='Account' colSpan='2'>
                  Electricity-319315001
                  <br />
                  Consumption
                </TableCell>
                <TableCell data-label='Amount'>500.0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell data-label='Account' colSpan='2'>
                  Electricity-319315001
                  <br />
                  Consumption
                </TableCell>
                <TableCell data-label='Amount'>500.0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell data-label='Account' colSpan='2'>
                  Electricity-319315001
                  <br />
                  Consumption
                </TableCell>
                <TableCell data-label='Amount'>500.0</TableCell>
              </TableRow>
            </tbody>
          </Table>
          <HorizontalRule />
          <JustifyBetween>
            <TextBox>Payable by due date</TextBox>
            <span>Rs. 14,530</span>
          </JustifyBetween>
          <HorizontalRule />

          <JustifyBetween>
            <TextBox>Payable by due date</TextBox>
            <span>Rs. 14,530</span>
          </JustifyBetween>
          <HorizontalRule />
          <FlexColumn>
            <span>For Bank Use Only</span>
            <span>Received Payment Rs.</span>
          </FlexColumn>
          <br />
          <FloatRight>
            <span>Signature and Stamp</span>
            <span>Bank Officer</span>
          </FloatRight>
          <br />
          <br />
          <DateWrap>
            <span>Date:</span>
            <span>_____________________</span>
          </DateWrap>
        </Column>
        <Column>
          <JustifyBetween>
            <TextBox>Invoice # INV/2024</TextBox>
            {/* <TextBox>Student Copy</TextBox> */}
          </JustifyBetween>
          <FlexContainer>
            <FlexColumn>
              <span>Due Date:</span>
              <span>01/01/2025</span>
            </FlexColumn>
            <FlexColumn>
              <span>Account: 75-HBL</span>
              <span>The Orion School</span>
            </FlexColumn>
          </FlexContainer>
          <FlexContainer>
            <Barcode value='ABC123' height={50} />
          </FlexContainer>
          <Table>
            <thead>
              <TableRow>
                <TableHeader scope='col left' colSpan='2'>
                  Description
                </TableHeader>
                <TableHeader scope='col right'>Amount</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell data-label='Account' colSpan='2'>
                  Electricity-319315001
                  <br />
                  Consumption
                </TableCell>
                <TableCell data-label='Amount'>500.0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell data-label='Account' colSpan='2'>
                  Electricity-319315001
                  <br />
                  Consumption
                </TableCell>
                <TableCell data-label='Amount'>500.0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell data-label='Account' colSpan='2'>
                  Electricity-319315001
                  <br />
                  Consumption
                </TableCell>
                <TableCell data-label='Amount'>500.0</TableCell>
              </TableRow>
            </tbody>
          </Table>
          <HorizontalRule />
          <JustifyBetween>
            <TextBox>Payable by due date</TextBox>
            <span>Rs. 14,530</span>
          </JustifyBetween>
          <HorizontalRule />

          <JustifyBetween>
            <TextBox>Payable by due date</TextBox>
            <span>Rs. 14,530</span>
          </JustifyBetween>
          <HorizontalRule />
          <FlexColumn>
            <span>For Bank Use Only</span>
            <span>Received Payment Rs.</span>
          </FlexColumn>
          <br />
          <FloatRight>
            <span>Signature and Stamp</span>
            <span>Bank Officer</span>
          </FloatRight>
          <br />
          <br />
          <DateWrap>
            <span>Date:</span>
            <span>_____________________</span>
          </DateWrap>
        </Column>
        <Column>
          <JustifyBetween>
            <TextBox>Invoice # INV/2024</TextBox>
            {/* <TextBox>Student Copy</TextBox> */}
          </JustifyBetween>
          <FlexContainer>
            <FlexColumn>
              <span>Due Date:</span>
              <span>01/01/2025</span>
            </FlexColumn>
            <FlexColumn>
              <span>Account: 75-HBL</span>
              <span>The Orion School</span>
            </FlexColumn>
          </FlexContainer>
          <FlexContainer>
            <Barcode value='ABC123' height={50} />
          </FlexContainer>
          <Table>
            <thead>
              <TableRow>
                <TableHeader scope='col left' colSpan='2'>
                  Description
                </TableHeader>
                <TableHeader scope='col right'>Amount</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell data-label='Account' colSpan='2'>
                  Electricity-319315001
                  <br />
                  Consumption
                </TableCell>
                <TableCell data-label='Amount'>500.0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell data-label='Account' colSpan='2'>
                  Electricity-319315001
                  <br />
                  Consumption
                </TableCell>
                <TableCell data-label='Amount'>500.0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell data-label='Account' colSpan='2'>
                  Electricity-319315001
                  <br />
                  Consumption
                </TableCell>
                <TableCell data-label='Amount'>500.0</TableCell>
              </TableRow>
            </tbody>
          </Table>
          <HorizontalRule />
          <JustifyBetween>
            <TextBox>Payable by due date</TextBox>
            <span>Rs. 14,530</span>
          </JustifyBetween>
          <HorizontalRule />

          <JustifyBetween>
            <TextBox>Payable by due date</TextBox>
            <span>Rs. 14,530</span>
          </JustifyBetween>
          <HorizontalRule />
          <FlexColumn>
            <span>For Bank Use Only</span>
            <span>Received Payment Rs.</span>
          </FlexColumn>
          <br />
          <FloatRight>
            <span>Signature and Stamp</span>
            <span>Bank Officer</span>
          </FloatRight>
          <br />
          <br />
          <DateWrap>
            <span>Date:</span>
            <span>_____________________</span>
          </DateWrap>
        </Column>
        <Column>
          <JustifyBetween>
            <TextBox>Invoice # INV/2024</TextBox>
            {/* <TextBox>Student Copy</TextBox> */}
          </JustifyBetween>
          <FlexContainer>
            <FlexColumn>
              <span>Due Date:</span>
              <span>01/01/2025</span>
            </FlexColumn>
            <FlexColumn>
              <span>Account: 75-HBL</span>
              <span>The Orion School</span>
            </FlexColumn>
          </FlexContainer>
          <FlexContainer>
            <Barcode value='ABC123' height={50} />
          </FlexContainer>
          <Table>
            <thead>
              <TableRow>
                <TableHeader scope='col left' colSpan='2'>
                  Description
                </TableHeader>
                <TableHeader scope='col right'>Amount</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell data-label='Account' colSpan='2'>
                  Electricity-319315001
                  <br />
                  Consumption
                </TableCell>
                <TableCell data-label='Amount'>500.0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell data-label='Account' colSpan='2'>
                  Electricity-319315001
                  <br />
                  Consumption
                </TableCell>
                <TableCell data-label='Amount'>500.0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell data-label='Account' colSpan='2'>
                  Electricity-319315001
                  <br />
                  Consumption
                </TableCell>
                <TableCell data-label='Amount'>500.0</TableCell>
              </TableRow>
            </tbody>
          </Table>
          <HorizontalRule />
          <JustifyBetween>
            <TextBox>Payable by due date</TextBox>
            <span>Rs. 14,530</span>
          </JustifyBetween>
          <HorizontalRule />

          <JustifyBetween>
            <TextBox>Payable by due date</TextBox>
            <span>Rs. 14,530</span>
          </JustifyBetween>
          <HorizontalRule />
          <FlexColumn>
            <span>For Bank Use Only</span>
            <span>Received Payment Rs.</span>
          </FlexColumn>
          <br />
          <FloatRight>
            <span>Signature and Stamp</span>
            <span>Bank Officer</span>
          </FloatRight>
          <br />
          <br />
          <DateWrap>
            <span>Date:</span>
            <span>_____________________</span>
          </DateWrap>
        </Column>
      </Row>
      <Btn onClick={generatePDF}>
        <DownloadButton>
          <CloudDownload style={{ fontSize: '1.5rem', marginRight: '5px' }} />
          Print
        </DownloadButton>
      </Btn>
    </>
  )
}

export default FeeSlip
