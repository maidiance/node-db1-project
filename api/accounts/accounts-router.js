const router = require('express').Router()
const Accounts = require('./accounts-model');

router.get('/', (req, res, next) => {
  Accounts.getAll()
    .then(data => {
      res.json(data);
    })
    .catch(() => {
      res.status(500).json({message: 'could not get accounts'});
    });
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Accounts.getById(id)
    .then(data => {
      res.json(data);
    })
    .catch(() => {
      res.status(500).json({message: 'could not get account'});
    })
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
