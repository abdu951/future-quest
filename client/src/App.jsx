import { Route, Routes } from 'react-router-dom'

import EducationOpportunity from './pages/EducationOpportunity'
import Home from './pages/Home'
import WorkOpportunity from './pages/WorkOpportunity'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<EducationOpportunity />} />
        <Route path="/work" element={<WorkOpportunity />} />
      </Routes>
    </div>
    <Footer />
    </div>
  )
}

export default App