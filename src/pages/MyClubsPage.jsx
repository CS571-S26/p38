import { useState } from 'react'
import { Container, Row, Col, Alert, Tab, Tabs } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import ClubCard from '../components/ClubCard'
import ClubDetailModal from '../components/ClubDetailModal'
import EventCard from '../components/EventCard'
import AnnouncementCard from '../components/AnnouncementCard'
import { CLUBS } from '../App'

function MyClubsPage({ clubs, events, announcements, onToggleJoin }) {
  const location = useLocation()
  const defaultTab = location.state?.tab ?? 'clubs'

  const [selectedClub, setSelectedClub] = useState(null)

  return (
    <Container className="py-5">
      <h1 className="fw-bold mb-1">My Clubs</h1>
      <p className="text-muted mb-4">
        {clubs.length > 0
          ? `You've joined ${clubs.length} club${clubs.length !== 1 ? 's' : ''}.`
          : 'Manage your clubs and upcoming events.'}
      </p>

      {clubs.length === 0 ? (
        <Alert variant="light" className="border text-center py-5">
          <p className="mb-2 fs-5">You haven't joined any clubs yet.</p>
          <Link to="/browse" className="fw-semibold text-decoration-none" style={{ color: '#c5050c' }}>
            Browse Clubs →
          </Link>
        </Alert>
      ) : (
        <Tabs defaultActiveKey={defaultTab} className="mb-4" aria-label="My clubs navigation">
          <Tab eventKey="clubs" title={`My Clubs (${clubs.length})`}>
            <Row className="g-4 mt-1">
              {clubs.map(club => (
                <Col key={club.id} sm={6} lg={4}>
                  <ClubCard
                    club={club}
                    isJoined={true}
                    onToggleJoin={onToggleJoin}
                    onViewDetails={setSelectedClub}
                  />
                </Col>
              ))}
            </Row>
          </Tab>

          <Tab eventKey="events" title={`Upcoming Events (${events.length})`}>
            {events.length === 0 ? (
              <p className="text-muted mt-3">No upcoming events for your clubs.</p>
            ) : (
              <Row className="g-3 mt-1">
                {events.map(event => {
                  const club = clubs.find(c => c.id === event.clubId)
                  return (
                    <Col key={event.id} sm={6} lg={4}>
                      <EventCard event={event} clubName={club?.name ?? ''} />
                    </Col>
                  )
                })}
              </Row>
            )}
          </Tab>

          <Tab eventKey="announcements" title={`Announcements (${announcements.length})`}>
            {announcements.length === 0 ? (
              <p className="text-muted mt-3">No announcements from your clubs yet.</p>
            ) : (
              <Row className="g-3 mt-1">
                {announcements.map(announcement => {
                  const club = CLUBS.find(c => c.id === announcement.clubId)
                  return (
                    <Col key={announcement.id} sm={6} lg={4}>
                      <AnnouncementCard
                        announcement={announcement}
                        clubName={club?.name ?? ''}
                      />
                    </Col>
                  )
                })}
              </Row>
            )}
          </Tab>
        </Tabs>
      )}

      <ClubDetailModal
        club={selectedClub}
        show={!!selectedClub}
        onHide={() => setSelectedClub(null)}
        isJoined={selectedClub ? clubs.some(c => c.id === selectedClub.id) : false}
        onToggleJoin={onToggleJoin}
      />
    </Container>
  )
}

export default MyClubsPage