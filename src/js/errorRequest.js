import getRefs from './getrefs';

const refs = getRefs();

function onFetchError() {
  const markupError = `<h1>Enter the correct country name</h1>`;
  refs.cardContainer.innerHTML = markupError;
}

export default onFetchError;
