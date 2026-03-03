import { Route, Routes } from 'react-router-dom'

import EducationOpportunity from './pages/EducationOpportunity'
import Home from './pages/Home'
import WorkOpportunity from './pages/WorkOpportunity'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Detail from './pages/Detail'
import Admin from './pages/Admin'
import EditOpportunity from './pages/EditOpportunity'
import Edit from './pages/Edit'

const App = () => {
  return (
    <div>
    <Navbar />          
    <div>                                
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<EducationOpportunity />} />
        <Route path="/work" element={<WorkOpportunity />} />
       {/** Route path="/opportunities/:id" element={<Detail />} /> **/}
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/opportunities/:id" element={<EditOpportunity />} /> */}
        <Route path="/opportunities/:id" element={<Edit />} />  
      </Routes>
    </div>
    <Footer />
    </div>
  )
}

export default App