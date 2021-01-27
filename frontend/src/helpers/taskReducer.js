import { api } from '../utils/Api'

export const taskReducer = (state = [], action) => {


  const getAlltasks = async () => {
    let res = await api.getAllTasks()
    if (res.status == 200) {
      const { tasks } = res.data
      return tasks
    } else {
      return []
    }
  };

  switch (action.type) {
    case 'add':
      return { ...state, ...action.payload };


    case 'addTasks':

      return [...action.payload];


    case 'delete':

      return state.filter(task => task._id !== action.payload);
    
    case 'add':
      return state.map(task =>
        task.id === action.payload ? { ...task, done: true } : task
      );


    default:
      return state;
  }
};
