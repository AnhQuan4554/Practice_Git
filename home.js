const arrayCoupon = ["ReferralNTUC"];
const regex = /[^+/]+(?=[+/]|$)/;
const string1 = "28 Days Double MMJan23-COMBO A+2 PTV/$288+ $1302";
const string2 = "28 Days Double MMJan23-COMBO B/$288+ $1302";
////
const main_and_promocode = string1.match(regex)[0];
const isMatch = arrayCoupon.find((coupon) =>
  main_and_promocode.includes(coupon)
);

if (isMatch) {
  console.log("Promo code is");
  console.log(isMatch);
} else {
  console.log("Promo code doesn't exit");
}
