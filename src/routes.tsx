import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<Dashboard />} />
    </Route>
  </Routes>
  )
}

export default AppRoutes