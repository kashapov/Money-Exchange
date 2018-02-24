// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  // Return an object containing the minimum number of coins needed to make change
  var monets = {};

  if (currency < 10000) {
    if ((currency % 50) >= 0) {
      h = Math.floor(currency/50);
      currency -= h*50;
      if (h > 0)
        monets['H'] = h;
    }
    if ((currency % 25) >= 0) {
      q = Math.floor(currency/25);
      currency -= q*25;
      if (q > 0)
        monets['Q'] = q;
    }
    if ((currency % 10) >= 0) {
      d = Math.floor(currency/10);
      currency -= d*10;
      if(d > 0)
        monets['D'] = d;
    }
    if ((currency % 5) >= 0) {
      n = Math.floor(currency/5);
      currency -= n*5;
      if(n > 0)
        monets['N'] = n;
    }
    
    
    p = currency;
    if(p > 0)
      monets['P'] = p;

    
  }
  else
    monets['error'] = "You are rich, my friend! We don't have so much coins for exchange";

  return monets;
}
