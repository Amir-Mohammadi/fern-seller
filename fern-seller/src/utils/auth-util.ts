import Cookies from 'js-cookie';

export const isTokenExistAndValid = (): boolean => {
  var token = Cookies.get('__token');
  return !!token && !isTokenExpired(token);
};

export const getToken = (): string => {
  var token = Cookies.get('__token');

  return `Bearer ${token}`;
};

export const setToken = (data: string): void => {
  Cookies.set('__token', data);
};

export const removeToken = (): void => {
  Cookies.remove('__token');
};

const isTokenExpired = (token: string): boolean => {
  const state = false; // TODO mr gaffari double encrypt the token, so we cant access to the expiration date
  if (state) console.log('token is expired');
  return state;
};
