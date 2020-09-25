const { Router } = require('express');
const router = Router();

const { postTest } = require('../controllers/products/index.controller');

const { postSearch } = require('../controllers/search/index.controller');
const { postCar } = require('../controllers/car/index.controller');

router.post('/api/search', postSearch);
router.post('/api/car', postCar);

// const { authenticateToken } = require('../middleware/auth')

// Login
router.post('/api/test', postTest);
// router.post('/api/login', loginUser);

// Products
// router.get('/products', getUsers);
// router.post('/users', createUsers);
// router.get('/users/:id', getUsersById);
// router.put('/users/:id', updateUsersById);


// router.get('/users', getUsers);
// router.post('/users', createUsers);
// router.get('/users/:id', getUsersById);
// router.delete('/users/:id', deleteUsersById);
// router.put('/users/:id', updateUsersById);

module.exports = router;
