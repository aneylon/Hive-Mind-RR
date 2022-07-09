import React from 'react'
import cx from 'classnames'
import {connect} from 'react-redux'
import { setFilter } from '../../redux/actions/actions'
import { VISIBILITY_FILTERS } from '../../redux/constants'

const ToDoFilters = ({activeFilter, setFilter}) => {
  console.log(activeFilter)
  return (
    <div className='visibility-filters'>
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey]
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              'filter',
              currentFilter === activeFilter && 'filter--active'
            )}
            onClick={() => {
              console.log('clicked', currentFilter)
              setFilter(currentFilter)
            }}
          >
            {currentFilter}
          </span>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return { activeFilter: state.visibilityFilter }
}

export default connect(mapStateToProps, {setFilter})(ToDoFilters)
