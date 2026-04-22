import { Card, Badge, Button } from 'react-bootstrap'

function ClubCard({ club, isJoined, onToggleJoin, onViewDetails }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="mb-0">{club.name}</Card.Title>
          <Badge style={{ backgroundColor: '#c5050c' }}>{club.category}</Badge>
        </div>
        <Card.Text className="text-muted flex-grow-1">{club.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <small className="text-muted">{club.members} members</small>
          <div className="d-flex gap-2">
            <Button size="sm" variant="outline-secondary" onClick={() => onViewDetails(club)}>
              Details
            </Button>
            <Button
              size="sm"
              onClick={() => onToggleJoin(club.id)}
              style={isJoined
                ? { backgroundColor: '#6c757d', border: 'none' }
                : { backgroundColor: '#c5050c', border: 'none' }}
            >
              {isJoined ? 'Leave' : 'Join'}
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ClubCard