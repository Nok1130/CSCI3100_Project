/* eslint-disable no-unused-vars */
import { useState } from 'react'
import unicon from './assets/Unicon.svg'
import michael_lyu from './assets/lyu.svg'
import './App.css'
import { Button } from 'antd'
import Testing from './Testing'


function App() {

  return (
    <>
      {/* <div>
        <a href="https://gundam.fandom.com/wiki/RX-0_Unicorn_Gundam" target="_blank">
          <img src={unicon} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.cse.cuhk.edu.hk/lyu/home" target="_blank">
          <img src={michael_lyu} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Michael Lyu + Unicon</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button type='primary'>Testing</Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Testing/>
    </>
  )
}

export default App
