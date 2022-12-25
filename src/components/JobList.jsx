import { useDispatch, useSelector } from 'react-redux'
import { JobPosition } from './JobPosition'
import { selectVisiblePositions } from 'store/positions/positionSelectors'
import { addFilterAC } from 'store/filters/filterActions'
import { selectAllFilters } from 'store/filters/filterSelectors'

const JobList = () => {
  const currentFilters = useSelector(selectAllFilters)
  const data = useSelector((state) =>
    selectVisiblePositions(state, currentFilters),
  )
  const dispatch = useDispatch()

  const handleAddFilter = (filter) => {
    dispatch(addFilterAC(filter))
  }

  return (
    <div className="job-list">
      {currentFilters?.length > 0 && <h3>Found {data.length} items</h3>}
      {data.map((item) => (
        <JobPosition key={item.id} {...item} onAddFilter={handleAddFilter} />
      ))}
    </div>
  )
}

export { JobList }
