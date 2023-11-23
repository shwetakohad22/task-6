class UberCalculator {
  constructor(distance, duration, surgeMultiplier = 1) {
    this.distance = distance; // in miles or kilometers
    this.duration = duration; // in minutes
    this.surgeMultiplier = surgeMultiplier; // surge pricing multiplier, default is 1
  }

  calculatePrice(baseRatePerMile, baseRatePerMinute) {
    // Assuming a simple pricing model: base rate per mile and per minute, multiplied by surge multiplier
    const price =
      (this.distance * baseRatePerMile + this.duration * baseRatePerMinute) *
      this.surgeMultiplier;

    return price;
  }
}

const distanceTraveled = 10; // in miles
const durationOfRide = 20; // in minutes
const surgeMultiplier = 1.5; // example surge pricing

const uberCalculator = new UberCalculator(
  distanceTraveled,
  durationOfRide,
  surgeMultiplier
);

// Example pricing model (adjust as needed)
const baseRatePerMile = 2.5; // example base rate per mile
const baseRatePerMinute = 0.3; // example base rate per minute

const totalPrice = uberCalculator.calculatePrice(
  baseRatePerMile,
  baseRatePerMinute
);

console.log(`The estimated Uber price is $${totalPrice.toFixed(2)}`);
