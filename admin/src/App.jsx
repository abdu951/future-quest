import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import CreateOpportunity from './pages/CreateOpportunity'
import EditOpportunity from './pages/EditOpportunity'
import ListOpportunity from './pages/ListOpportunity'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
        <Toaster />
        <Navbar />
        <div>       

      <Routes>
        <Route path='/create' element={<CreateOpportunity />} />
        <Route path='/opportunities/:id' element={<EditOpportunity />} />
        <Route path='/' element={<ListOpportunity />} />
      </Routes>
      
      </div>
    
    </div>
  )
}

export default App