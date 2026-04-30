import { Card, Badge } from 'react-bootstrap'

function AnnouncementCard({ announcement, clubName }) {
  return (
    <Card className="shadow-sm border-0 h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-1">
          <Card.Title as="h3" className="fs-6 fw-bold mb-0">{announcement.title}</Card.Title>
          <Badge style={{ backgroundColor: '#c5050c', whiteSpace: 'nowrap', marginLeft: '8px' }}>
            {clubName}
          </Badge>
        </div>
        <p className="text-muted small mb-2">
          <time dateTime={announcement.date}>{announcement.date}</time> · Posted by {announcement.author}
        </p>
        <p className="small mb-0">{announcement.body}</p>
      </Card.Body>
    </Card>
  )
}

export default AnnouncementCard