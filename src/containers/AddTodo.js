import React from 'react'
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import { addTodo, fetchTodos } from '../actions'
 
class AddTodo extends React.Component{
  constructor(props){
    super(props);
    this.input;
  }

  componentWillMount(){
    this.props.fetchTodos();
  }
  render(){
    let input = this.input;
    return (
      <div className="addTodo">
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            this.props.addTodo(input.value)
            input.value = ''
          }}
        >
          <input
            ref={node => {
              input = node
            }}
          />
          <button type="submit">
            Add
          </button>
        </form>
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return (
    bindActionCreators({
      addTodo,
      fetchTodos
    }, dispatch) 
  )
}
export default connect(
  null,
  mapDispatchToProps
)(AddTodo)