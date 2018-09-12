// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  // Return an object containing the minimum number of coins needed to make change  
  let coins = {};
  let money, h, q, d, n, p;

  if (currency < 10000) {
    money = currency;

    if ((money % 50) >= 0) {
      h = Math.floor(money / 50);
      money -= h * 50;

      if (h > 0) {
        coins['H'] = h;
      }

    }

    if ((money % 25) >= 0) {
      q = Math.floor(money / 25);
      money -= q * 25;

      if (q > 0) {
        coins['Q'] = q;
      }

    }

    if ((money % 10) >= 0) {
      d = Math.floor(money / 10);
      money -= d * 10;

      if (d > 0) {
        coins['D'] = d;
      }

    }

    if ((money % 5) >= 0) {
      n = Math.floor(money / 5);
      money -= n * 5;

      if (n > 0) {
        coins['N'] = n;
      }

    }

    p = money;

    if (p > 0) {
      coins['P'] = p;
    }

  }
  else
    coins['error'] = "You are rich, my friend! We don't have so much coins for exchange";

  return coins;
}
