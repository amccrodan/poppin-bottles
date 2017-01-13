myInput = process.argv.slice(2);

function poppinBottles(initialBottles, currentEmpties, currentCaps) {
  if(initialBottles === 0) {
    return;
  }
  poppinBottles.bottleDepot.fullBottles += initialBottles;
  poppinBottles.bottleDepot.backFromEmpties += Math.floor(initialBottles / 2);
  poppinBottles.bottleDepot.backFromCaps += Math.floor(initialBottles / 4);

  poppinBottles(Math.floor(initialBottles / 2) + Math.floor(initialBottles / 4),
    initialBottles % 2, initialBottles % 4);
}

poppinBottles.bottleDepot = {
  fullBottles: 0,
  backFromEmpties: 0,
  backFromCaps: 0
}

// $20
poppinBottles(Number(myInput)/2);
console.log(poppinBottles.bottleDepot);
