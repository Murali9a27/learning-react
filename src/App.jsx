import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

import './app.css'

function App() {
  return (
    <div>
      <Header></Header>
      <Content style={{color:'#666', backgroundColor:'#edefef'}}>        
      </Content>
      <Footer></Footer>
      <h1>Hello, Murali 👋</h1>
      <p>This is your first React app!</p>
    </div>
  )
}

export default App