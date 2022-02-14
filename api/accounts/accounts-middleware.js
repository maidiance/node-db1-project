const Accounts = require('./accounts-model');
const db = require('../../data/db-config');

exports.checkAccountPayload = (req, res, next) => {
  const account = req.body;
  if(!account.name || !account.budget){
    res.status(400).json({message: 'name and budget are required'});
  } else if (account.name.trim().length < 3 || account.name.trim().length > 100){
    res.status(400).json({message: 'name of account must be between 3 and 100'});
  } else if (typeof(account.budget) != 'number') {
    res.status(400).json({message: 'budget of account must be a number'});
  } else if (account.budget < 0 || account.budget > 1000000) {
    res.status(400).json({message: 'budget of account is too large or too small'});
  } else {
    next();
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  const toMatch = req.body.name.trim();
  const matches = db('accounts').where({ name: toMatch });
  console.log(matches);
  if (matches.length > 1){
    res.status(400).json({message: 'that name is taken'});
  } else {
    next();
  }
}

exports.checkAccountId = async (req, res, next) => {
  let account = await Accounts.getById(req.params);
    if(account == null || account.length < 1){
      res.status(404).json({message: 'account not found'});
    } else {
      next();
    }
}
