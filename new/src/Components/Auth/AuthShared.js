export const localStorageUserName = "template_userName";

export const rememberUser = (remember, email) => {
  console.log(remember, email);
  if (remember) {
    localStorage.setItem(localStorageUserName, email);
  } else {
    localStorage.clear(localStorageUserName);
  }
};
