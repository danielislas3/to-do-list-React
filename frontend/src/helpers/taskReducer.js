export const taskReducer = (state = [], action) => {

  switch (action.type) {
    case 'add':
      console.log('0ADD');
      return [...state, action.payload];


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
