import { useDispatch, useSelector } from 'react-redux'

import Container from 'glud-component/lib/Container'
import AppHeader from 'glud-component/lib/AppHeader'
import Box from 'glud-component/lib/Box'
import Row from 'glud-component/lib/Row'
import Column from 'glud-component/lib/Column'
import Title from 'glud-component/lib/Title'
import Input from 'glud-component/lib/Input'
import Select from 'glud-component/lib/Select'

import React, { useEffect, useCallback } from 'react'
import styled from '@emotion/styled'

import history from '../../utils/history'
import userModule from '../../modules/user'

export default () => {
  const dispatch = useDispatch()

  return (
    <Style>
      <Container maxWidth={1200}>
        <AppHeader
          title='Add User Page'
          subTitle='....'
          leftIcon='fas fa-arrow-left'
          onClickLeft={() => {
            history.push('/')
          }}
        />
        <Box className='top-space-20'>
          <Row className='bottom-space-10'>
            <Column D={12} M={12} SM={12}>
              <Title size={4}>Profile</Title>
            </Column>
          </Row>
          <hr />
          <Row className='top-space-20'>
            <Column D={4} M={12} SM={12}>
              <Input label='Firstname' placeholder='' isRequired={true} />
            </Column>
            <Column D={4} M={12} SM={12}>
              <Input label='Lastname' placeholder='' isRequired={true} />
            </Column>
          </Row>
          <Row className='top-space-20'>
            <Column D={4} M={12} SM={12}>
              <Input label='Username' placeholder='' isRequired={true} />
            </Column>
            <Column D={4} M={12} SM={12}>
              <Input label='Email' placeholder='' />
            </Column>
            <Column D={4} M={12} SM={12}>
              <Input label='Phone' placeholder='' />
            </Column>
          </Row>
          <Row className='top-space-20'>
            <Column D={12} M={12} SM={12}>
              <Input label='Website' placeholder='' />
            </Column>
          </Row>
        </Box>

        <Box className='top-space-20'>
          <Row className='bottom-space-10'>
            <Column D={12} M={12} SM={12}>
              <Title size={4}>Address</Title>
            </Column>
          </Row>
          <hr />
          <Row className='top-space-20'>
            <Column D={4} M={12} SM={12}>
              <Input label='Street' placeholder='' />
            </Column>
            <Column D={4} M={12} SM={12}>
              <Input label='Suite' placeholder='' />
            </Column>
            <Column D={4} M={12} SM={12}>
              <Select label='City' placeholder='Text input' />
            </Column>
          </Row>
          <Row className='top-space-20'>
            <Column D={4} M={12} SM={12}>
              <Input label='Zipcode' placeholder='' />
            </Column>
            <Column D={4} M={12} SM={12}>
              <Input label='Lat' placeholder='' />
            </Column>
            <Column D={4} M={12} SM={12}>
              <Input label='Lng' placeholder='' />
            </Column>
          </Row>
        </Box>

        <Box className='top-space-20'>
          <Row className='bottom-space-10'>
            <Column D={12} M={12} SM={12}>
              <Title size={4}>Company</Title>
            </Column>
          </Row>
          <hr />
          <Row className='top-space-20'>
            <Column D={4} M={12} SM={12}>
              <Input label='Name' placeholder='' />
            </Column>
            <Column D={4} M={12} SM={12}>
              <Input label='Catch Phrase' placeholder='' />
            </Column>
            <Column D={4} M={12} SM={12}>
              <Input label='BS' placeholder='' />
            </Column>
          </Row>
        </Box>
      </Container>
    </Style>
  )
}

const Style = styled('div')`
  label: AddUser;

  margin-top: 20px;
  margin-bottom: 40px;

  .top-space-20 {
    margin-top: 20px;
  }
`
