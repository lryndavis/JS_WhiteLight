import Ember from 'ember';

export function convertCurrency(params) {
  var value = params[0].get('price'),
     dollars = Math.floor(value / 100),
     cents = value % 100,
     noChange = (value % 100) + '0',
     sign = '$';

     if (cents.toString().length === 1) {
       return `${sign}${dollars}.${noChange}`;
      } else {
        return `${sign}${dollars}.${cents}`;
      }
    }

export default Ember.Helper.helper(convertCurrency);
