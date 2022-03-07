const { request } = require('express');
const { response } = require('express');

const usersGet = (req = request, res = response) => {
  const { q, nombre, apikey } = req.query;
  res.json({ msg: 'get API - controlador', q, nombre, apikey });
};

const usersPost = (req, res = response) => {
  const body = req.body;

  res.json({ msg: 'post API - controlador', body });
};

const usersPut = (req, res = response) => {
  const { id } = req.params;
  res.json({ msg: 'put API- controlador', id });
};

const usersPatch = (req, res = response) => {
  res.json({ msg: 'patch API - controlador' });
};

const usersDelete = (req, res = response) => {
  res.json({ msg: 'delete API - controlador' });
};

module.exports = { usersGet, usersPost, usersPut, usersPatch, usersDelete };
