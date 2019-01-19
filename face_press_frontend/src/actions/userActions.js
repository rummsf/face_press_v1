export function createUser(user) {
  return {
    type: "CREATE_USER",
    payload: user
  };
}

export function viewUserDetails(user) {
  return {
    type: "VIEW_USER_DETAILS",
    payload: user
  };
}
