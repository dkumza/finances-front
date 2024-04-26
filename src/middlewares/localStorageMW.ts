export const localStorageMW = (store) => (next) => (action) => {
  let result = next(action);
  //  getting only the postcodes array from the store, and saving as JSON to local storage
  const token = store.getState().login.token;
  const tokenJSON = JSON.stringify(token);
  localStorage.setItem('token', tokenJSON);
  return result;
};
