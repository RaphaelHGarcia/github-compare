import React from 'react'
import styled from 'styled-components'

import { Application } from './styles/global'

const Title = styled.h1`
  color: #f00;
  font-size: 32px;
`

const App = () => (
  <Application>
    <Title>Hello World!</Title>
  </Application>
)

export default App
