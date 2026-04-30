import { Container, Row, Col } from 'react-bootstrap'

function StatsBanner({ clubs }) {
  const totalMembers = clubs.reduce((sum, c) => sum + c.members, 0)
  const totalCategories = [...new Set(clubs.map(c => c.category))].length

  const stats = [
    { value: clubs.length, label: 'Active Clubs' },
    { value: totalMembers.toLocaleString(), label: 'Total Members' },
    { value: totalCategories, label: 'Categories' },
    { value: '24/7', label: 'Always Available' },
  ]

  return (
    <section aria-label="BadgerClubs statistics" style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }}>
      <Container className="py-4">
        <Row className="text-center g-3">
          {stats.map(s => (
            <Col key={s.label} xs={6} md={3}>
              <p className="fs-2 fw-bold mb-0" style={{ color: '#c5050c' }} aria-label={`${s.value} ${s.label}`}>
                {s.value}
              </p>
              <p className="text-muted mb-0 small">{s.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default StatsBanner