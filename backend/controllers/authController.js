const User = require('../models/User')


exports.signup = async (req, res, next) => {
  console.log('sigup');
  console.log(req.body, req.body.password);
  try {
    const user = await User.register(req.body, req.body.password)
    console.log('Usuario creado');
    res.status(201).json({ user })
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ error })
  }
}

exports.login = async (req, res, next) => {
  const { _id } = req.user
  const user = await User.findById(_id).populate('Task')
  res.status(200).json({ user })
}

exports.logout = (req, res, nex) => {
  req.logout()
  res.status(200).json({ msg: 'Logged out' })
}