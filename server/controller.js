const bcrypt = require('bcrypt')

module.exports = {
  createUser: async (req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body

    const existingUser = await db.check_user(username)
    if(existingUser[0]){
      return res.status(409).send('This one is not available :(')
    }

    const salt = bcrypt.genSalt(9)
    const hash = bcrypt.hashSync(password, salt)
    const newUser = await db.create_user([username, hash])

    req.session.user = {
      userId: newUser[0].user_id,
      username: newUser[0].username
    }

    res.status(200).send(req.session.user)

  },
  
  deleteUser: async (req, res) => {},
  updateUser: async (req, res) => {},

  createHobby: async (req, res) => {},
  deleteHobby: async (req, res) => {},
  updateHobby: async (req, res) => {}
}