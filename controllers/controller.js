const controller = {

// Display objects of arrays with units to convert
  getUnits: (req, res) => {
    unitsObject = {
      distance: ["km", "mile"],
      temperature: ["celcius", "farenheit"],
    };
    res.json(unitsObject);
  },

// convert distances for miles and kms
  convertDistance: (req, res) => {
    const { unit, convertTo, value } = req.body;

    if (value === NaN) {
      res.status(422).json({
        sucess: false,
        message: "Veuillez soumettre un nombre pour effectuer la conversion",
      });
    }

    if (unit === "km" && convertTo === "mile") {
      let result = value / 1.609;
      res.json(result);
    } else if (unit === "mile"  && convertTo === "km") {
      let result = value * 1.609;
      res.json(result);
    } else {
      res.status(422).json({
        sucess: false,
        message: "Veuillez soumettre des unités en 'km' ou 'mile'. la conversion en unité cacahuète n'est pas possible pour l'instant ",
      });
    }
  },

  // Convert temperatures for celsius and farenheit
  convertTemperature: (req, res) => {

    const { unit, convertTo, value } = req.body;

    if (value === NaN) {
      res.status(422).json({
        sucess: false,
        message: "Veuillez soumettre un nombre pour effectuer la conversion.",
      });
    }

    if (unit === "farenheit" && convertTo === "celsius") {
      let result = ((value - 32)*(5/9))  ;
      res.json(result);
    } else if (unit === "celsius"  && convertTo === "farenheit") {
      let result = (value * (9/5) + 32)
      res.json(result);
    } else {
      res.status(422).json({
        sucess: false,
        message: "Veuillez soumettre des unités en 'farenheit' ou 'celsius'. la conversion en unité cacahuète n'est pas possible pour l'instant ",
      });
    }
  },
  };

module.exports = controller;
