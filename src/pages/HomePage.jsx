import { Container, Row, Col, Card } from 'react-bootstrap'
import HeroSection from '../components/HeroSection'

function HomePage() {
  const features = [
    { icon: '🔍', title: 'Discover Clubs', text: 'Search and filter through hundreds of UW–Madison clubs by category, size, or interest.' },
    { icon: '📅', title: 'Track Events', text: 'Never miss a meeting. View upcoming events and add them to your calendar.' },
    { icon: '💬', title: 'Stay Connected', text: 'Get announcements straight from club leaders — no more hunting through emails.' },
  ]

  return (
    <>
      <HeroSection />
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">Why BadgerClubs?</h2>
        <Row className="g-4">
          {features.map((f) => (
            <Col key={f.title} md={4}>
              <Card className="text-center h-100 shadow-sm border-0">
                <Card.Body className="p-4">
                  <div className="fs-1 mb-3">{f.icon}</div>
                  <Card.Title className="fw-semibold">{f.title}</Card.Title>
                  <Card.Text className="text-muted">{f.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default HomePage