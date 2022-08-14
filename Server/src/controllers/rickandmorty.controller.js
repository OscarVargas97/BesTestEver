const { ResponseTest } = require('../services/Api/rickandmorty/respondtest.services')

const RickandMorty = {

  answers: async (req, res) => {
    res.send(await ResponseTest())
  }
}

module.exports = RickandMorty
