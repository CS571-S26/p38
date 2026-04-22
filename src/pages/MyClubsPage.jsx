import { Container, Row, Col, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ClubCard from '../components/ClubCard'

function MyClubsPage({ clubs, onToggleJoin }) {
  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-1">My Clubs</h2>
      <p className="text-muted mb-4">Clubs you've joined</p>

      {clubs.length === 0 ? (
        <Alert variant="light" className="border text-center py-5">
          <p className="mb-2 fs-5">You haven't joined any clubs yet.</p>
          <Link to="/browse" className="fw-semibold text-decoration-none" style={{ color: '#c5050c' }}>
            Browse Clubs →
          </Link>
        </Alert>
      ) : (
        <Row className="g-4">
          {clubs.map(club => (
            <Col key={club.id} sm={6} lg={4}>
              <ClubCard
                club={club}
                isJoined={true}
                onToggleJoin={onToggleJoin}
                onViewDetails={() => {}}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default MyClubsPage