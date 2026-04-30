import { Form, InputGroup } from 'react-bootstrap'

function SearchBar({ value, onChange, placeholder = 'Search...' }) {
  return (
    <div style={{ maxWidth: 420 }}>
      <Form.Label htmlFor="club-search" className="visually-hidden">
        Search clubs
      </Form.Label>
      <InputGroup>
        <InputGroup.Text aria-hidden="true">🔍</InputGroup.Text>
        <Form.Control
          id="club-search"
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Search clubs by name or category"
        />
      </InputGroup>
    </div>
  )
}

export default SearchBar