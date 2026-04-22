import { useState } from 'react'
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap'
import ClubCard from '../components/ClubCard'
import ClubDetailModal from '../components/ClubDetailModal'

function BrowsePage({ clubs, joinedIds, onToggleJoin }) {
  const [search, setSearch] = useState('')
  const [selectedClub, setSelectedClub] = useState(null)

  const filtered = clubs.filter(c =>
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
          {filtered.map(club => (
            <Col key={club.id} sm={6} lg={4}>
              <ClubCard
                club={club}
                isJoined={joinedIds.includes(club.id)}
                onToggleJoin={onToggleJoin}
                onViewDetails={setSelectedClub}
              />
            </Col>
          ))}
        </Row>
      )}

      <ClubDetailModal
        club={selectedClub}
        show={!!selectedClub}
        onHide={() => setSelectedClub(null)}
        isJoined={selectedClub ? joinedIds.includes(selectedClub.id) : false}
        onToggleJoin={onToggleJoin}
      />
    </Container>
  )
}

export default BrowsePage