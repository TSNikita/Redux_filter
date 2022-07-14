import { useDispatch, useSelector } from 'react-redux';
import { clearFilter, removeFilter } from 'store/filters/filter-action';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { selectorFilter } from './../store/filters/filter-selector';


const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectorFilter);

  if(currentFilter.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilter.map(filter => (
          <Badge 
            key={filter}
            onClear={()=> dispatch(removeFilter(filter))}
            variant="clearable">
            {filter}
            </Badge>
          ))}
          
        </Stack>

        <button className='link' onClick={()=> dispatch(clearFilter) }>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};