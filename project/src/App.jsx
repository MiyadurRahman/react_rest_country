
import Country from '../component/Country'
import './App.css'
const countrypromise=fetch('')
function App() {


  return (
    <>
      
     
          <h1 className=''>Get started</h1>
          <Country></Country>
          
    </>
  )
}

export default App
