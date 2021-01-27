export const taskReducer = (state = [], action) => {

  switch (action.type) {
    case 'add':
      console.log('0ADD');
      return [...state, action.payload];


    case 'addTasks':

      return [...action.payload];


    case 'delete':

      return state.filter(task => task._id !== action.payload);

    case 'complete':
      console.log('PARLOAD');
      console.log(action.payload);
       return state.map(task =>
         task._id === action.payload ? { ...task, completed: true } : task
      );


    default:
      return state;
  }
};
