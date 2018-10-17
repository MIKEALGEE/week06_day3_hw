const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) =>{
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport)  {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) =>{
    return journey.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
 return this.journeys.reduce((total, journey) =>{
   return total + journey.distance;
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  mapped = this.journeys.map(journey => journey.transport);
    return mapped.filter((x,i) =>mapped.indexOf(x) === i);
};


module.exports = Traveller;
