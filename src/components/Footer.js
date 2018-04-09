import React from 'react'
import FilterLink from '../containers/FilterLink'
import ResetLink from '../containers/ResetLink'
import { VisibilityFilters } from '../actions'
 
const Footer = () => (
  <p className="footer">
    Show:
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
    <ResetLink>
      Reset
    </ResetLink>
  </p>
)
 
export default Footer