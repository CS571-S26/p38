import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import MyClubsPage from './pages/MyClubsPage'

export const CLUBS = [
  { id: 1, name: 'Badger Robotics', category: 'Engineering', description: 'Build and compete with robots at regional and national competitions.', members: 142, meetingTime: 'Tuesdays 6pm', location: 'Engineering Hall 1003' },
  { id: 2, name: 'UW Hiking Club', category: 'Outdoors', description: 'Weekly hikes around Madison and beyond. All skill levels welcome.', members: 89, meetingTime: 'Saturdays 9am', location: 'Picnic Point Trailhead' },
  { id: 3, name: 'Badger Debate', category: 'Academic', description: 'Sharpen your argumentation and compete in intercollegiate debate tournaments.', members: 54, meetingTime: 'Wednesdays 7pm', location: 'Ingraham Hall 214' },
  { id: 4, name: 'CS + Social Good', category: 'Tech', description: 'Use technology to tackle social issues through projects and community outreach.', members: 73, meetingTime: 'Thursdays 5pm', location: 'Computer Sciences 1240' },
  { id: 5, name: 'Salsa Dance Club', category: 'Arts', description: 'Learn salsa and Latin dance styles from beginner to advanced levels.', members: 110, meetingTime: 'Fridays 7pm', location: 'SERF Studio B' },
  { id: 6, name: 'Badger Entrepreneurs', category: 'Business', description: 'Connect with founders, pitch ideas, and grow your startup on campus.', members: 201, meetingTime: 'Mondays 6pm', location: 'Grainger Hall 2260' },
]

export const EVENTS = [
  { id: 1, clubId: 1, title: 'Spring Build Kickoff', date: 'May 6, 2026', time: '6:00 PM', location: 'Engineering Hall 1003' },
  { id: 2, clubId: 2, title: "Devil's Lake Hike", date: 'May 10, 2026', time: '9:00 AM', location: "Devil's Lake State Park" },
  { id: 3, clubId: 3, title: 'Regional Tournament Prep', date: 'May 7, 2026', time: '7:00 PM', location: 'Ingraham Hall 214' },
  { id: 4, clubId: 4, title: 'Hackathon Planning Meeting', date: 'May 8, 2026', time: '5:00 PM', location: 'Computer Sciences 1240' },
  { id: 5, clubId: 5, title: 'Bachata Night', date: 'May 9, 2026', time: '7:00 PM', location: 'SERF Studio B' },
  { id: 6, clubId: 6, title: 'Pitch Competition', date: 'May 12, 2026', time: '6:00 PM', location: 'Grainger Hall 2260' },
]

export const ANNOUNCEMENTS = [
  { id: 1, clubId: 1, title: 'New Parts Arrived!', date: 'Apr 28, 2026', author: 'Team Lead', body: 'Our new servo motors and sensors have arrived. Come to the next meeting to start building!' },
  { id: 2, clubId: 2, title: 'Carpool Sign-Up Open', date: 'Apr 27, 2026', author: 'Club President', body: 'Sign up for the Devil\'s Lake carpool by Thursday. We have 3 cars going, spots are limited.' },
  { id: 3, clubId: 3, title: 'Practice Round This Week', date: 'Apr 26, 2026', author: 'Coach', body: 'We\'ll be doing a full practice round Wednesday to prep for regionals. Attendance is strongly encouraged.' },
  { id: 4, clubId: 4, title: 'Project Proposals Due', date: 'Apr 25, 2026', author: 'Project Lead', body: 'Submit your spring project proposals by May 1st. Use the shared doc linked in Discord.' },
  { id: 5, clubId: 5, title: 'Guest Instructor Friday', date: 'Apr 24, 2026', author: 'Club Officer', body: 'We have a guest salsa instructor joining us this Friday. Bring a friend — no experience needed!' },
  { id: 6, clubId: 6, title: 'Pitch Competition Registration', date: 'Apr 23, 2026', author: 'Events Chair', body: 'Register your team for the May pitch competition by May 5th. Cash prizes for top 3 teams!' },
]

function App() {
  const [joinedIds, setJoinedIds] = useState([])

  const toggleJoin = (id) => {
    setJoinedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  }

  const joinedClubs = CLUBS.filter(c => joinedIds.includes(c.id))
  const joinedEvents = EVENTS.filter(e => joinedIds.includes(e.clubId))
  const joinedAnnouncements = ANNOUNCEMENTS.filter(a => joinedIds.includes(a.clubId))

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar joinedCount={joinedIds.length} />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage clubs={CLUBS} />} />
          <Route path="/browse" element={<BrowsePage clubs={CLUBS} joinedIds={joinedIds} onToggleJoin={toggleJoin} />} />
          <Route path="/my-clubs" element={
            <MyClubsPage
              clubs={joinedClubs}
              events={joinedEvents}
              announcements={joinedAnnouncements}
              onToggleJoin={toggleJoin}
            />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App