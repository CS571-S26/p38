import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App