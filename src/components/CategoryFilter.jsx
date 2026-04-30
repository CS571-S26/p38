import { Button, Stack } from 'react-bootstrap'

const CATEGORIES = ['All', 'Engineering', 'Outdoors', 'Academic', 'Tech', 'Arts', 'Business']

function CategoryFilter({ selected, onSelect }) {
  return (
    <fieldset className="border-0 p-0 m-0">
      <legend className="visually-hidden">Filter by category</legend>
      <Stack direction="horizontal" gap={2} className="flex-wrap">
        {CATEGORIES.map(cat => (
          <Button
            key={cat}
            size="sm"
            onClick={() => onSelect(cat)}
            aria-pressed={selected === cat}
            style={selected === cat
              ? { backgroundColor: '#c5050c', border: 'none', color: '#fff' }
              : { backgroundColor: '#fff', border: '1px solid #c5050c', color: '#c5050c' }
            }
          >
            {cat}
          </Button>
        ))}
      </Stack>
    </fieldset>
  )
}

export default CategoryFilter