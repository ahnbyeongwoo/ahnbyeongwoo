const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const router = express.Router();

const url='mongodb://localhost:27777';

const client = new MongoClient(url);

const locationStorage = {
  locations: []
};

router.post('/add-location', (req, res, next) => {
  const id= Math.random();
  locationStorage.locations.push({
    id: id,
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng }
  });
  res.json({message: 'Stored location!', locId: id});//클라이언트에 id가 포함된 링크를 생성
});

router.get('/location', (req, res, next) => {
  const locationId = +req.params.lid;
  const location = locationStorage.locations.find(loc => {
    return loc.id === locationId;//맞는 위치를 찾으면 참을 반환
  });
  if(!location){
    return res.status(404).json({message: 'Not found!'});//오류 응답을 프론트엔드에 반환
  }
  res.json({address: location.address, coordinates: location.coords });
});

module.exports = router;








