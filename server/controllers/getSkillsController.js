const fs = require('fs');
const path = require('path');

const getSkillsController = (req, res) => {
  const dataPath = path.join(__dirname, '../data/data.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al leer los datos');
      }
      const portfolioData = JSON.parse(data);
      res.status(200).json(portfolioData.skills);
  });
}

module.exports = getSkillsController