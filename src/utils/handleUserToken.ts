export const getUserToken: () => string | null = () => {
  return window.sessionStorage.getItem("userToken");
};

export const removeUserToken: () => void = () => {
  return window.sessionStorage.removeItem("userToken");
};
