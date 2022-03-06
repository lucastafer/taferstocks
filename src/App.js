import React from 'react'
import styled from 'styled-components';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';

export default function App() {
  return (
    <Div>
      <Sidebar/>
      <Dashboard/>
    </Div>
  )
}

const Div = styled.div``;
