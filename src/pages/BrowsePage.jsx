import { useState } from 'react'
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap'
import ClubCard from '../components/ClubCard'

const CLUBS = [
  { id: 1, name: 'Badger Robotics', category: 'Engineering', description: 'Build and compete with robots at regional and national competitions.', members: 142 },
  { id: 2, name: 'UW Hiking Club', category: 'Outdoors', description: 'Weekly hikes around Madison and beyond. All skill levels welcome.', members: 89 },
  { id: 3, name: 'Badger Debate', category: 'Academic', description: 'Sharpen your argumentation and compete in intercollegiate debate tournaments.', members: 54 },
  { id: 4, name: 'CS + Social Good', category: 'Tech', description: 'Use technology to tackle social issues through projects and community outreach.', members: 73 },
  { id: 5, name: 'Salsa Dance Club', category: 'Arts', description: 'Learn salsa and Latin dance styles from beginner to advanced levels.', members: 110 },
  { id: 6, name: 'Badger Entrepreneurs', category: 'Business', description: 'Connect with founders, pitch ideas, and grow your startup on campus.', members: 201 },
]

function BrowsePage() {
  const [search, setSearch] = useState('')

  const filtered = CLUBS.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-1">Browse Clubs</h2>
      <p className="text-muted mb-4">Find your community at UW–Madison</p>

      <InputGroup className="mb-4" style={{ maxWidth: 400 }}>
        <InputGroup.Text>🔍</InputGroup.Text>
        <Form.Control
          placeholder="Search by name or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>

      {filtered.length === 0 ? (
        <p className="text-muted">No clubs match your search.</p>
      ) : (
        <Row className="g-4">
          {filtered.map((club) => (
            <Col key={club.id} sm={6} lg={4}>
              <ClubCard {...club} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default BrowsePage