const Usuario = require("../models/usuario");

const getUsuarios = async (req, res) => {
  const posts = await Usuario.find({}, "_id title text image tag date");
  res.json({
    ok: true,
    posts,
  });
};

const crearUsuario = async (req, res) => {
  const { id, title, text, image, tag, date } = req.body;

  const post = new Usuario(req.body);

  await post.save();

  res.json({
    ok: true,
    msg: "Post Creado",
    post,
  });
};

const actualizarUsuario = async (req, res) => {
  const id = req.params.id;
  const uid = req.uid;
  try {
    const usuario = await Usuario.findById(id);

    if (!usuario) {
      return res.status(400).json({
        ok: true,
        msg: "No se encontro el post por id",
      });
    }

    const changeUsuario = {
      ...req.body,
      usuario: uid,
    }

    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      id,
      changeUsuario,
      { new: true }
    )

    res.json({
      ok: true,
      msg: "Post Actualizado",
      post: usuarioActualizado,
    })

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};
module.exports = {
  getUsuarios,
  crearUsuario,
  actualizarUsuario,
};
