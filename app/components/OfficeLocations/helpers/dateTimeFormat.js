import areIntlLocalesSupported from 'intl-locales-supported';

let DateTimeFormat;

if (areIntlLocalesSupported(['en'])) {
    DateTimeFormat = global.Intl.DateTimeFormat;
} else {
    // const IntlPolyfill = require('intl');
    // DateTimeFormat = IntlPolyfill.DateTimeFormat;
    // require('intl/locale-data/jsonp/ru');
    // require('intl/locale-data/jsonp/en');
}

export default DateTimeFormat;
