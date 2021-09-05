import onFetchError from './errorRequest';

const BASE_URL = 'https://restcountries.eu/rest/v2';

async function fetchCountry(searchQuery) {
  const response = await fetch(`${BASE_URL}/name/${searchQuery}`);
  const dataResponse = await response.json();
  return dataResponse;
}

export default { fetchCountry };
