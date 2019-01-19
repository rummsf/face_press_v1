export function fetchWriters(writers) {
  return {
    type: "FETCH_WRITERS",
    payload: writers
  };
}

export function selectWriter(writer) {
  return {
    type: "SELECT_WRITER",
    payload: writer
  };
}
