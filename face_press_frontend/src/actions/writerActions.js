export function fetchWriters() {
  return dispatch => {
    dispatch({ type: FETCH_WRITERS });
    return fetch("https://localhost:3005/api/v1/writers")
      .then(resp => resp.json())
      .then(writers => dispatch({ type: FETCH_WRITERS, payload: writers }));
  };
}

export function selectWriter(selectedWriterId) {
  return { type: SELECT_WRITER, payload: selectedWriterId };
}
