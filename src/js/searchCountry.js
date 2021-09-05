import getRefs from './getrefs';
import renderCountry from './renderCountry';
import onFetchError from './errorRequest';
import API from './fetchCountries';

const refs = getRefs();

function searchCountry(e) {
  refs.inputRef.textContent = e.target.value;
  const searchQuery = e.target.value;

  API.fetchCountry(searchQuery).then(renderCountry).catch(onFetchError);
}

export default searchCountry;
