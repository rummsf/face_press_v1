export function createUser(user) {
  return {
    type: CREATE_USER,
    payload: user
  };
}

export function viewUserDetails(user) {
  return {
    type: CURRENT_USER_DETAILS,
    payload: user
  };
}
