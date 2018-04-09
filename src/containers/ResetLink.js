import { connect } from 'react-redux'
import { deleteAll } from '../actions'
import Link from '../components/Link'
 
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(deleteAll())
    }
  }
}
 
const FilterLink = connect(
  null,
  mapDispatchToProps
)(Link)
 
export default FilterLink