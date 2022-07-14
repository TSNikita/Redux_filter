
import { JobPosition } from './JobPosition';
import { useDispatch, useSelector } from 'react-redux';
import { positionSelectorAll, selectVisiblePosition } from 'store/positions/positions-selectors';
import { addFilter } from 'store/filters/filter-action';
import { selectorFilter } from 'store/filters/filter-selector';

const JobList = () => {
const currentFilters = useSelector(selectorFilter);
const position = useSelector(state => selectVisiblePosition(state, currentFilters));
const dispatch = useDispatch();

const handleAddFilter = (filter) => {
  dispatch(addFilter(filter))
}

  return (
    <div className='job-list'>
      {position.map(item => (
        <JobPosition 
        key={item.id} 
        handleAddFilter={handleAddFilter}
        {...item} 
        />
      ))}
    </div>
  )
}

export {JobList};