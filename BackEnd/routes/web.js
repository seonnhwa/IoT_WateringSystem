const express = require("express");

const router = express.Router();

const { Humidity, Plant } = require('../models');


router.get("/plant/:id", async (req, res,next) => {
  try {
    console.log('req.params.id : ',req.params.id);

    let plant = await Plant.findOne({
      where: { id: req.params.id },
    })
    console.log(plant)
    res.status(200).json({ success: true, data: plant })

  } catch (err) {
    res.status(400).json({ success: false, message : '해당 식물이 없습니다.'})
  }
})

router.get("/humidity/:id" , async (req, res)=> {
  try {
    console.log('req.params.id : ',req.params.id);

    let humidityInfos = await Humidity.findAll({
      where: { PlantId: req.params.id },
    })
    console.log(humidityInfos)
    res.status(200).json({ success: true, data: humidityInfos })

  } catch (err) {
    res.status(400).json({ success: false, message : '해당 식물의 습도 정보가 없습니다.'})
  }
})

module.exports = router;