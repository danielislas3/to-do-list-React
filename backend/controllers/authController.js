const User = require('../models/User')


exports.signup = async (req, res, next) => {

  try {
    const user = await User.register(req.body, req.body.password)
    console.log('Usuario creado');
    res.status(201).json({ user })
  } catch (error) {
    console.log('Error:**', error);
    res.status(303).json( {message:'Usuario ya existe'} )
  }
}

exports.login = async (req, res, next) => {
  try {
    
    const { _id } = req.user
    console.log('LOG',req.user);
    const user = await User.findById(_id).populate('Task')
    res.status(200).json({ user })
  } catch (err) {
    res.status(500).json({err,message:'Usuario o contraseña incorrecto'})
  }
 
}

exports.logout = (req, res, nex) => {
  req.logout()
  res.status(200).json({ msg: 'Logged out' })
}