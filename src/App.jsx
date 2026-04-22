import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import MyClubsPage from './pages/MyClubsPage'

const CLUBS = [
  { id: 1, name: 'Badger Robotics', category: 'Engineering', description: 'Build and compete with robots at regional and national competitions.', members: 142, meetingTime: 'Tuesdays 6pm', location: 'Engineering Hall 1003' },
  { id: 2, name: 'UW Hiking Club', category: 'Outdoors', description: 'Weekly hikes around Madison and beyond. All skill levels welcome.', members: 89, meetingTime: 'Saturdays 9am', location: 'Picnic Point Trailhead' },
  { id: 3, name: 'Badger Debate', category: 'Academic', description: 'Sharpen your argumentation and compete in intercollegiate debate tournaments.', members: 54, meetingTime: 'Wednesdays 7pm', location: 'Ingraham Hall 214' },
  { id: 4, name: 'CS + Social Good', category: 'Tech', description: 'Use technology to tackle social issues through projects and community outreach.', members: 73, meetingTime: 'Thursdays 5pm', location: 'Computer Sciences 1240' },
  { id: 5, name: 'Salsa Dance Club', category: 'Arts', description: 'Learn salsa and Latin dance styles from beginner to advanced levels.', members: 110, meetingTime: 'Fridays 7pm', location: 'SERF Studio B' },
  { id: 6, name: 'Badger Entrepreneurs', category: 'Business', description: 'Connect with founders, pitch ideas, and grow your startup on campus.', members: 201, meetingTime: 'Mondays 6pm', location: 'Grainger Hall 2260' },
]

function App() {
  const [joinedIds, setJoinedIds] = useState([])

  const toggleJoin = (id) => {
    setJoinedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  const joinedClubs = CLUBS.filter(c => joinedIds.includes(c.id))

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar joinedCount={joinedIds.length} />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage clubs={CLUBS} joinedIds={joinedIds} onToggleJoin={toggleJoin} />} />
          <Route path="/my-clubs" element={<MyClubsPage clubs={joinedClubs} onToggleJoin={toggleJoin} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App