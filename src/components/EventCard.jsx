import { Card } from 'react-bootstrap'

function EventCard({ event, clubName }) {
  return (
    <Card className="shadow-sm border-0 h-100" style={{ borderLeft: '4px solid #c5050c !important' }}>
      <Card.Body>
        <Card.Title as="h3" className="fs-6 fw-bold mb-1">{event.title}</Card.Title>
        <p className="text-muted small mb-1">
          <span aria-label="Club">{clubName}</span>
        </p>
        <p className="small mb-1">
          <strong>📅</strong> <time dateTime={event.date}>{event.date}</time> at {event.time}
        </p>
        <p className="small mb-0">
          <strong>📍</strong> {event.location}
        </p>
      </Card.Body>
    </Card>
  )
}

export default EventCard