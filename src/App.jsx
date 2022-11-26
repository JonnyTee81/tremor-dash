import { useState } from 'react'
import { Card, Flex, Block, Text, BadgeDelta, ProgressBar, Metric } from '@tremor/react';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Card maxWidth="max-w-lg">
        <Flex alignItems="items-start">
          <Block>
            <Text>Sales</Text>
            <Metric>$ 20,699</Metric>
          </Block>
          <BadgeDelta deltaType="moderateDecrease" text="13.2%" />
        </Flex>
        <Flex marginTop="mt-4">
          <Text truncate={true}>50% ($ 110,250)</Text>
          <Text> $ 220,500 </Text>
        </Flex>
        <ProgressBar percentageValue={50} marginTop="mt-2" />
      </Card>
    </div>
  )
}

export default App
