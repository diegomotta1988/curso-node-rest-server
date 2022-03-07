const { Router } = require('express');

const {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete,
} = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.post('/', usersPost);

router.patch('/', usersPatch);

router.put('/:id', usersPut);

router.delete('/:id', usersDelete);

module.exports = router;
