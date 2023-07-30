//islogged in
export const isLogged = () => {
  let data = localStorage.getItem("data");
  if (data == null) {
    return false;
  } else {
    return true;
  }
};

export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next(); // cal back function hai
};

export const doLogout = (next) => {
  localStorage.removeItem("data");

  next(); // call back function hai;
};

export const getLoginUserDetail = () => {
  if (isLogged()) {
    
    return JSON.parse(localStorage.getItem("data")).user;
  } else {
    return undefined;
  }
};
export const getToken = () => {
  if (isLogged) {
    return JSON.parse(localStorage.getItem("data")).token;
  } else {
    return null;
  }
};
