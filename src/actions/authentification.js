export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export function login(userInfo) {
  return {
    type: LOG_IN,
    userInfo,
  };
}

export function logout() {
  return {
    type: LOG_OUT,
   };
}