
import { Suspense, useState } from 'react'
import Country from '../component/Country'
import './App.css'
import countriesData from './countries.json'
const countrypromise=Promise.resolve(countriesData)
function App() {
  const [visitedCount, setVisitedCount] = useState(0)

  return (
    <>
          <h1 className=''>Get started</h1>
          <h2>visited_count: {visitedCount}</h2>
          <Suspense fallback={<h1>loading...</h1>}><Country countrypromise={countrypromise} setVisitedCount={setVisitedCount}></Country></Suspense>
    </>
  )
}

export default App
