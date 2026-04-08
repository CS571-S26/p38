import { Card, Badge, Button } from 'react-bootstrap'

function ClubCard({ name, category, description, members }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="mb-0">{name}</Card.Title>
          <Badge style={{ backgroundColor: '#c5050c' }}>{category}</Badge>
        </div>
        <Card.Text className="text-muted flex-grow-1">{description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <small className="text-muted">{members} members</small>
          <Button size="sm" style={{ backgroundColor: '#c5050c', border: 'none' }}>
            Join
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ClubCard