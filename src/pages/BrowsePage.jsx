import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ClubCard from '../components/ClubCard'
import ClubDetailModal from '../components/ClubDetailModal'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'

function BrowsePage({ clubs, joinedIds, onToggleJoin }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [selectedClub, setSelectedClub] = useState(null)

  const filtered = clubs.filter(c => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All' || c.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <Container className="py-5">
      <h1 className="fw-bold mb-1">Browse Clubs</h1>
      <p className="text-muted mb-4">Find your community at UW–Madison</p>

      <div className="mb-3">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search by name or category..."
        />
      </div>

      <div className="mb-4">
        <CategoryFilter selected={category} onSelect={setCategory} />
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted" role="status">No clubs match your search.</p>
      ) : (
        <>
          <p className="text-muted small mb-3" role="status">
            Showing {filtered.length} club{filtered.length !== 1 ? 's' : ''}
          </p>
          <Row className="g-4">
            {filtered.map(club => (
              <Col key={club.id} sm={6} lg={4}>
                <ClubCard
                  club={club}
                  isJoined={joinedIds.includes(club.id)}
                  onToggleJoin={onToggleJoin}
                  onViewDetails={setSelectedClub}
                />
              </Col>
            ))}
          </Row>
        </>
      )}

      <ClubDetailModal
        club={selectedClub}
        show={!!selectedClub}
        onHide={() => setSelectedClub(null)}
        isJoined={selectedClub ? joinedIds.includes(selectedClub.id) : false}
        onToggleJoin={onToggleJoin}
      />
    </Container>
  )
}

export default BrowsePage