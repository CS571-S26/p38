import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section style={{ backgroundColor: '#c5050c', color: 'white' }} className="py-5">
      <Container className="text-center py-4">
        <h1 className="display-4 fw-bold">Find Your Place at UW–Madison</h1>
        <p className="lead mt-3 mb-4">
          Browse clubs, join in one click, and stay on top of every event —
          all in one place.
        </p>
        <Button as={Link} to="/browse" variant="light" size="lg" className="fw-semibold">
          Browse Clubs
        </Button>
      </Container>
    </section>
  )
}

export default HeroSection