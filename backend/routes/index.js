const router = require('express').Router()
const passport = require('../config/passport')
const { login, logout, signup } = require('../controllers/authController')
const { createTast,getAllTasks,setCompleted,deleteTask } = require('../controllers/TaskController')

router.post('/signup', signup)
router.post('/login', passport.authenticate('local'), login)
router.get('/logout', logout)

router.post('/task/create', createTast)
router.post('/tasks', getAllTasks)
router.put('/tasks/completed/:id', setCompleted)
router.delete('/tasks/delete/:id', deleteTask)

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' })
})

module.exports = router