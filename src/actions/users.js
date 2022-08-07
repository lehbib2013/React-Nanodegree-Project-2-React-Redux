export const RECEIVE_USERS = "RECEIVE_USERS";
export const USERS_COMPLETED= "USERS_COMPLETED";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
export function notifyComplete(info) {
  return {
    type: USERS_COMPLETED,
    info,
  };
}
