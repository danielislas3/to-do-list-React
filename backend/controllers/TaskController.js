const User = require('../models/User')
const Task = require('../models/Task')


exports.createTast = async (req, res, next) => {
  try {

    const task = await Task.create({ ...req.body })
    console.log(req.body.creator);
    await User.findOneAndUpdate(req.body.author, { $push: { tasks_completed: task.id } })

    console.log('Tarea creada');
    res.status(201).json({ task })
  } catch (error) {
    console.log('Error', error);
    res.status(500).json(error)
  }

}
exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find()

    res.status(200).json({ tasks })
  } catch (error) {
    console.log('Error', error);
    res.status(500).json(error)
  }

}
exports.setCompleted = async (req, res, next) => {
  const { id } = req.params
  try {
    const tasks = await Task.findOneAndUpdate(id, { completed: true }, { new: true })


    res.status(200).json({ tasks })
  } catch (error) {
    console.log('Error', error);
    res.status(500).json(error)
  }


}
exports.deleteTask = async (req, res, next) => {
  const { id } = req.params
  try {
    const task = await Task.findByIdAndDelete(id)
    res.status(200).json({ task, message: 'Task deleted' })
  } catch (error) {
    console.log('Error', error);
    res.status(500).json(error)
  }

}



