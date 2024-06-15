const fs = require('fs');
const path = require('path');

const getProjectsController = (req, res) => {
  const dataPath = path.join(__dirname, '../data/data.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err); // Registra el error completo en la consola del servidor
        const errorMessage = err.message; // Extrae el mensaje de error para enviarlo como respuesta
        return res.status(500).json({ error: true, message: errorMessage }); // Envía un objeto JSON con detalles del error
      }
      const portfolioData = JSON.parse(data);
      res.status(200).json(portfolioData.projects);
  });
}

module.exports = getProjectsController;