import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

import './app.css'
import ToggleText from './components/ToggleText'
import Counter from './components/Counter'
import LikeButton from './LikeButton'
import Challange1 from './components/Challange1'
import UserList from './components/UserList'
import EffectExample from './components/EffectExample'
import ClockTick from './components/ClockTick'

function App() {
  return (
    <div>
      <Header></Header>
      <Content style={{color:'#666', backgroundColor:'#edefef'}}>        
      </Content>
      {/* <ToggleText/> */}
      {/* <Counter/> */}
      {/* <LikeButton/> */}

      {/* <EffectExample/> */}
      {/* <ClockTick/> */}
      {/* <Challange1/> */}
      <Footer></Footer>
      <h1>Hello, Murali 👋</h1>
      <p>This is your first React app!</p>
      <UserList/>
    </div>
  )
}

export default App