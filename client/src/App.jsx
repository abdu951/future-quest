import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import EducationOpportunity from './pages/EducationOpportunity'
import Home from './pages/Home'
import WorkOpportunity from './pages/WorkOpportunity'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DetailOpportunity from './pages/DetailOpportunity'

const App = () => {
  return (
    <div>
      <Toaster />
     <Navbar />   
    <div>                                
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opportunities/education" element={<EducationOpportunity />} />
        <Route path="/opportunities/work" element={<WorkOpportunity />} />
        <Route path="/opportunities/:category/:id" element={<DetailOpportunity />} />  
      </Routes>
    </div>
   <Footer />
    </div>
  )
}

export default App