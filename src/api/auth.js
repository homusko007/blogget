import {
  URL_AUTH,
  CLIENT_ID,
  RESPONSE_TYPE,
  RANDOM_STRING,
  REDIRECT_URI,
  SCOPE,
} from './const';

// собираем данные для запроса
const serchParams = new URLSearchParams('');

serchParams.append('client_id', CLIENT_ID);
serchParams.append('response_type', RESPONSE_TYPE);
serchParams.append('state', RANDOM_STRING);
serchParams.append('redirect_uri', REDIRECT_URI);
serchParams.append('scope', SCOPE);

export const urlAuth = `${URL_AUTH}${serchParams.toString()}`;
