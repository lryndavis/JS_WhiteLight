import Ember from 'ember';

export function convertCurrency(params) {
  let value = params[0].get('price'),
     dollars = Math.floor(value / 100),
     cents = value % 100,
     sign = '$';

 if (cents.toString().length === 1) { cents = '0' + cents; }
 return `${sign}${dollars}.${cents}`;
}


export default Ember.Helper.helper(convertCurrency);
