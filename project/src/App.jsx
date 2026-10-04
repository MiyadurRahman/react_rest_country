
import Country from '../component/Country'
import './App.css'
const countrypromise=fetch('https://openapi.programming-hero.com/api/all').then(res=> res.json())
function App() {


  return (
    <>
      
     
          <h1 className=''>Get started</h1>
          <Country countrypromise={countrypromise}></Country>
          
    </>
  )
}

export default App
