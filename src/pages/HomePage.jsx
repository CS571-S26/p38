import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import StatsBanner from '../components/StatsBanner'

function HomePage({ clubs }) {
  const features = [
    { icon: '🔍', title: 'Discover Clubs', text: 'Search and filter through UW–Madison clubs by category, size, or interest.', to: '/browse', state: {} },
    { icon: '📅', title: 'Track Events', text: 'Never miss a meeting. View upcoming events for every club you join.', to: '/my-clubs', state: { tab: 'events' } },
    { icon: '💬', title: 'Stay Connected', text: 'Get announcements straight from club leaders — no more hunting through emails.', to: '/my-clubs', state: { tab: 'announcements' } },
  ]

  return (
    <>
      <HeroSection />
      <StatsBanner clubs={clubs} />

      <Container className="py-5">
        <h2 className="text-center fw-bold mb-2">Why BadgerClubs?</h2>
        <p className="text-center text-muted mb-5">
          Everything you need to find your place at UW–Madison, in one place.
        </p>
        <Row className="g-4">
          {features.map(f => (
            <Col key={f.title} md={4}>
              <Card
                as={Link}
                to={f.to}
                state={f.state}
                className="text-center h-100 shadow-sm border-0 text-decoration-none"
                style={{ cursor: 'pointer', transition: 'transform 0.15s, box-shadow 0.15s', color: 'inherit' }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                <Card.Body className="p-4">
                  <p className="fs-1 mb-3" role="img" aria-label={f.title}>{f.icon}</p>
                  <h3 className="fs-5 fw-semibold">{f.title}</h3>
                  <p className="text-muted">{f.text}</p>
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