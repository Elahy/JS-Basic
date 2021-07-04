/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function abid(khan, jhon) {
  let a = khan,
    b = jhon,
    c;
  c = a + b;
  return c;
}

const Mack = function (che, ese) {
  let ponir = che - ese;
  return ponir;
};

const Hi = (hel, lo) => {
  let bye;
  bye = hel * lo;
  return bye;
};

(function (hei, bye) {
  let chai = bye / hei;
  console.log("IIFE", chai);
})(5, 10);

console.log(abid(4, 5));
console.log(Mack(12, 8));
console.log(Hi(10, 5));
