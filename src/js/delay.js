import searchCountry from './searchCountry';

var debounce = require('lodash.debounce');
const delay = debounce(searchCountry, 600);

export default delay;
