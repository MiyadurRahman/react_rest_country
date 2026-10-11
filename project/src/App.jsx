
import { Suspense } from 'react'
import Country from '../component/Country'
import './App.css'
import countriesData from './countries.json'
const countrypromise=Promise.resolve(countriesData)
function App() {


  return (
    <>
      
     
          <h1 className=''>Get started</h1>
          <Suspense fallback={<h1>loading...</h1>}><Country countrypromise={countrypromise}></Country></Suspense>
          
          
    </>
  )
}

export default App
