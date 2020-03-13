## modules/user/index.js
```
addUserFormFirstname: '',
addUserFormLastname: '',
addUserFormUsername: '',
addUserFormEmail: '',
addUserFormPhone: '',
addUserFormWebsite: '',
addUserFormAddressStreet: '',
addUserFormAddressSuite: '',
addUserFormAddressCity: '',
addUserFormAddressZipcode: '',
addUserFormAddressLat: '',
addUserFormAddressLng: '',
addUserFormCompanyName: '',
addUserFormCompanyCatchPhrase: '',
addUserFormCompanyBS: ''
```

## Header/index.js

```
import React from 'react'
import styled from '@emotion/styled'

import Container from 'glud-component/lib/Container'
import Icon from 'glud-component/lib/Icon'
import Button from 'glud-component/lib/Button'

import TrueCorpNasLogo from '../../images/nas-logo.svg'

export default () => {
  const handleLogoClick = () => {
    console.log('>>> logo click :: todo redirect to home page <<<')
  }

  const handleBtnLogoutClick = () => {
    console.log('>>> logo click :: todo redirect to logout page <<<')
  }

  return (
    <Style>
      <header>
        <Container maxWidth={1200} className='header-container'>
          <div className='header-left' onClick={handleLogoClick}>
            <img src={TrueCorpNasLogo} className='img-responsive logo' alt='' />
          </div>
          <div className='right-side'>
            <label className='label-user-id'>
              <Icon icon='fas fa-user-circle' />
              xxxxxxx
            </label>
            <label className='label-user-name'>xxx</label>
            <Button icon='fas fa-project-diagram'>Role</Button>
            <Button icon='fas fa-sign-out-alt' onClick={handleBtnLogoutClick}>
              ออกจากระบบ
            </Button>
          </div>
        </Container>
      </header>
    </Style>
  )
}

const Style = styled('div')`
  label: Footer;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);
    /* padding: 0 20px; */
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }
  .header-left {
    font-size: 24px;
    text-align: left;
    cursor: pointer;
  }
  /* .header-span {
    color: #e5e5e5;
  } */
  img.logo {
    cursor: pointer;
  }

  .left-side {
    padding: 20px 0px 18px 20px;
  }

  .right-side {
    text-align: right;
  }

  .right-side button {
    display: inline-block;
    margin-left: 20px;
  }

  .right-side label.label-user-id {
    height: 35px;
    line-height: 35px;
    background: #f5f5f5;
    color: #4a4a4a;
    font-weight: bold;
    border-radius: 5px 0 0 5px;
    display: inline-block;
    padding: 0 7px 0 7px;
  }

  .right-side label i {
    font-size: 23px;
    top: 4px;
    position: relative;
    padding-right: 10px;
  }

  .right-side label.label-user-name {
    height: 35px;
    line-height: 35px;
    background: #e5e5e5;
    color: #4a4a4a;
    border-radius: 0 5px 5px 0;
    display: inline-block;
    padding: 0 7px;
  }

  .icon {
    margin: 0px 0px 0px 7px;
  }

  @media only screen and (max-width: 780px) {
    .right-side {
      display: none;
    }
  }
  .div-roles-header {
    text-align: center;
    font-weight: bold;
  }
`

```

## /src/ListUser/index.js
```
import React from 'react'
import styled from '@emotion/styled'

export default () => {
  return <Style>List User Page</Style>
}

const Style = styled('div')`
  label: ListUser;
`
```
