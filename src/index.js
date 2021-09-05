import './sass/main.scss';

import getRefs from './js/getrefs';
import delay from './js/delay';

const refs = getRefs();

refs.inputRef.addEventListener('input', delay);
