import { error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import countryTemplate from '../templates/country.hbs';
import listCountriesTemplate from '../templates/list-countries.hbs';
import getRefs from './getrefs';
import onFetchError from './errorRequest';

const refs = getRefs();

function renderCountry(country) {
  if (country.length > 1 && country.length <= 10) {
    const markupList = listCountriesTemplate(country);
    refs.cardContainer.innerHTML = markupList;
  } else if (country.length === 1) {
    const markupCountry = countryTemplate(country);
    refs.cardContainer.innerHTML = markupCountry;
  } else if (country.length > 10) {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
    });
  } else {
    onFetchError();
  }
}

export default renderCountry;
