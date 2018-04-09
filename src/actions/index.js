import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL;

export const fetchTodos = () => {
  return(dispatch) => {
    axios.get(api_url).then( response => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        todos: response.data
      });
    });
  }
}

export const addTodo = text => {
  return (dispatch) => {
    axios.post( api_url, { text }).then( response => {
      let todo = response.data;
      dispatch({
        type: 'ADD_TODO',
        id: todo.id,
        text: todo.text
      })
    }).catch(err => console.log(err));
  }
}
 
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
 
export const toggleTodo = id => {
  return (dispatch) => {
    // Optimistic update
    dispatch({
      type: 'TOGGLE_TODO',
      id
    });
    axios.patch( api_url , { id } ).catch( err => {
      // If request failed, return todo to original state
      dispatch({
        type: 'TOGGLE_TODO',
        id
      });
    });
  }
}

export const deleteAll = () => {
  return (dispatch) => {
    axios.delete( api_url ).then( response => {
      dispatch({
        type: 'RESET_TODOS'
      });
    })
  }
}
 
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}