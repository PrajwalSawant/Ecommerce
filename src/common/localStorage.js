export const setLocalStorage = (email, password) => {
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
};

export const getLocalStorage = () => {
  return {
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password"),
  };
};

export const setAdminCheck = (check) => {
  localStorage.setItem("adminCheck", check);
};
export const getAdminCheck = () => {
  return { adminCheck: localStorage.getItem("adminCheck") };
};
