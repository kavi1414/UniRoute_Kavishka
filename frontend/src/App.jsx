import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Universities from './components/Universities'
import Dashboard from './pages/Company/Dashboard';
import Courses from './pages/Company/Course';
import Internships from './pages/Company/Internship';
import AdPublish  from './pages/Company/AdPublish';

import { companyRoutes } from './routes/CompanyRoutes';
import { universityRoutes } from './routes/UniversityRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Company routes */}
        {companyRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
        <Route path="/company/dashboard" element={<Dashboard />} />
        <Route path="/company/course" element={<Courses />} />
        <Route path="/company/internship" element={<Internships />} />
        <Route path="/company/ad-publish" element={<AdPublish />} />
        {/* University routes */}
        {universityRoutes.map((route, idx) => (
          <Route key={`uni-${idx}`} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  )
}

export default App