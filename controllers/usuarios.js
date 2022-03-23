const Usuario = require('../models/usuario')

const getUsuarios = async(req, res) => {
  const posts = await Usuario.find({}, '_id title text image tag date');
  res.json({
    ok: true,
    posts
  });
};

const crearUsuario = async (req, res) => {

const {id, title, text, image, tag, date} = req.body;

const post = new Usuario (req.body);

await post.save();

  res.json({
    ok: true,
    msg: "Usuario Creado",
    post
  });
};

module.exports = {
  getUsuarios,
  crearUsuario,
};
