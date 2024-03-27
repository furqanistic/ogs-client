import {
  AccessAlarm,
  AddBusiness,
  Article,
  Boy,
  Groups3,
  MenuBook,
  Notes,
  Paid,
  Payments,
  Timeline,
} from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../Layout'
import AddClassForm from '../components/Class/AddClassForm'
import Topbar from '../components/Layout/Topbar'

const Size = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CardNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vw;
  height: 15vh;
  width: 95%;
  font-weight: 800;
  letter-spacing: 2px;
  color: white;

  @media (max-width: 820px) {
    height: 8vh;
  }
`
const CardSet = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 2rem;
  flex-wrap: wrap;
  padding: 0 2rem;
  justify-content: center;
`
const Cards = styled.div`
  min-width: 240px;
  min-height: 260px;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  flex-direction: column;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 30px;
  transition: all 0.3s ease-in-out;
`
const CardIcon = styled.div`
  min-height: 210px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 10px 10px 0 0;

  /* border: 1px solid #22ff00; */
  /* background-color: #04360096; */
  background-color: #0ea004;
  text-decoration: none;
`
const CardName = styled.div`
  font-size: 1rem;
  min-height: 50px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
  width: 100%;
  /* background-color: #22ff00; */
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;

  transition: all 0.3s ease;
  &:hover {
    font-size: 1.1rem;
    /* background-color: white; */
    /* color: #052600; */
  }
`
const Students = () => {
  return (
    <Layout>
      <Size>
        <Topbar title='Students' />
        <CardNav>STUDENTS CONTROL PANEL</CardNav>
        <CardSet>
          <Link to='all-admissions' style={{ textDecoration: 'none' }}>
            <Cards>
              <CardIcon>
                <Groups3
                  style={{
                    fontSize: '10rem',
                    color: '#f1faf0',
                  }}
                />
              </CardIcon>
              <CardName>Admissions</CardName>
            </Cards>
          </Link>
          <Cards>
            <CardIcon>
              <Boy
                style={{
                  fontSize: '10rem',
                  color: '#f1faf0',
                }}
              />
            </CardIcon>
            <CardName> Students</CardName>
          </Cards>
          <Link to='fee-challan' style={{ textDecoration: 'none' }}>
            <Cards>
              <CardIcon>
                <Payments
                  style={{
                    fontSize: '10rem',
                    color: '#f1faf0',
                  }}
                />
              </CardIcon>
              <CardName>Fee Challans</CardName>
            </Cards>
          </Link>
          <Cards>
            <CardIcon>
              <Paid
                style={{
                  fontSize: '10rem',
                  color: '#f1faf0',
                }}
              />
            </CardIcon>
            <CardName>Fine</CardName>
          </Cards>
          <Link to='/class'>
            <Cards>
              <CardIcon>
                <AddBusiness
                  style={{
                    fontSize: '10rem',
                    color: '#f1faf0',
                  }}
                />
              </CardIcon>
              <CardName>Class</CardName>
            </Cards>
          </Link>
          <Cards>
            <CardIcon>
              <Article
                style={{
                  fontSize: '10rem',
                  color: '#f1faf0',
                }}
              />
            </CardIcon>
            <CardName>Results</CardName>
          </Cards>

          <Cards>
            <CardIcon>
              <MenuBook
                style={{
                  fontSize: '10rem',
                  color: '#f1faf0',
                }}
              />
            </CardIcon>
            <CardName>Subjects</CardName>
          </Cards>
          <Cards>
            <CardIcon>
              <Timeline
                style={{
                  fontSize: '10rem',
                  color: '#f1faf0',
                }}
              />
            </CardIcon>
            <CardName>Attendance</CardName>
          </Cards>
        </CardSet>
      </Size>
    </Layout>
  )
}

export default Students
