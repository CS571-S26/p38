import { Modal, Button, Badge } from 'react-bootstrap'

function ClubDetailModal({ club, show, onHide, isJoined, onToggleJoin }) {
  if (!club) return null

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton style={{ borderBottom: '3px solid #c5050c' }}>
        <Modal.Title>{club.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Badge style={{ backgroundColor: '#c5050c' }} className="mb-3">{club.category}</Badge>
        <p className="mb-3">{club.description}</p>
        <hr />
        <p className="mb-1"><strong>📍 Location:</strong> {club.location}</p>
        <p className="mb-1"><strong>🕐 Meeting Time:</strong> {club.meetingTime}</p>
        <p className="mb-0"><strong>👥 Members:</strong> {club.members}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button
          onClick={() => { onToggleJoin(club.id); onHide() }}
          style={isJoined
            ? { backgroundColor: '#6c757d', border: 'none' }
            : { backgroundColor: '#c5050c', border: 'none' }}
        >
          {isJoined ? 'Leave Club' : 'Join Club'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ClubDetailModal