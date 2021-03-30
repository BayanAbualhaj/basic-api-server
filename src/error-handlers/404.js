'use strict';

module.exports = ( req, res) => {
  res.status(404);
  res.json({message:'NOT FOUND'});
};