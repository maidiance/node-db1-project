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
    .then(account => {
      res.json(account);
    })
    .catch(() => {
      res.status(500).json({message: 'could not get account'});
    })
})

router.post('/', (req, res, next) => {
  Accounts.create(req.body)
    .then(account => {
      res.status(201).json(account);
    })
    .catch(() => {
      res.status(500).json({message: 'could not create account'});
    })
})

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  Accounts.updateById(id, req.body)
    .then(account => {
      res.status(200).json(account);
    })
    .catch(() => {
      res.status(500).json({message: 'could not create account'});
    })
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
