myInput = process.argv.slice(2);

function poppinBottles(initialBottles, currentEmpties, currentCaps) {
  if(initialBottles === 0) {
    return;
  }
  poppinBottles.bottleDepot.fullBottles += initialBottles;
  poppinBottles.bottleDepot.backFromEmpties += Math.floor(initialBottles / 2);
  poppinBottles.bottleDepot.backFromCaps += Math.floor(initialBottles / 4);

  poppinBottles.bottleDepot.leftEmpties = initialBottles % 2;
  poppinBottles.bottleDepot.leftCaps = initialBottles % 4;

  poppinBottles(Math.floor(initialBottles / 2) + Math.floor(initialBottles / 4),
    initialBottles % 2, initialBottles % 4);
}

poppinBottles.bottleDepot = {
  fullBottles: 0,
  backFromEmpties: 0,
  backFromCaps: 0,
  currentEmpties: 0,
  currentCaps: 0,
  leftEmpties: 0,
  leftCaps: 0
}

// $20
poppinBottles(Number(myInput)/2);
console.log("You will get " + poppinBottles.bottleDepot.fullBottles + " bottles total.");
console.log("This includes " + poppinBottles.bottleDepot.backFromEmpties + " bottles from empties, and " +
  poppinBottles.bottleDepot.backFromCaps + " from caps.");
console.log("You have " + poppinBottles.bottleDepot.leftEmpties + " empty bottle(s) and " +
  poppinBottles.bottleDepot.leftCaps + " cap(s) left.");

// 10 bottles - 5 + 2 bottles - 3 + 1 bottles - 2 + 1 bottles - 1 bottle