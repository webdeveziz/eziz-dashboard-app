import { Badge } from 'UI/Badge'
import { Card } from 'UI/Card'
import { Stack } from 'UI/Stack'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilterAction, removeFilterAC } from 'store/filters/filterActions'
import { selectAllFilters } from 'store/filters/filterSelectors'

const FilterPanel = () => {
  const dispatch = useDispatch()
  const filters = useSelector(selectAllFilters)

  const handleRemoveFilter = (filter) => {
    dispatch(removeFilterAC(filter))
  }

  if (filters.length === 0) return null

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filters?.length > 0 &&
            filters.map((filter) => (
              <Badge
                variant="clearable"
                key={filter}
                onRemoveFilter={handleRemoveFilter}
              >
                {filter}
              </Badge>
            ))}
        </Stack>

        <button className="link" onClick={() => dispatch(clearFilterAction)}>
          Clear
        </button>
      </div>
    </Card>
  )
}

export { FilterPanel }
