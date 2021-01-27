import { api } from '../utils/Api'

export const taskReducer = (state = [], action) => {

  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'delete':
    
      return state.filter(task => task.id !== action.payload);
    case 'add':
      return state.map(task =>
        task.id === action.payload ? { ...task, done: true } : task
      );
   
    case 'complete':
      
      return state.map(task =>
        task.id === action.payload.id
          ? {
            ...task,
            duration: action.payload.newDuration,
          }
          : task
      );

    default:
      return state;
  }
};
