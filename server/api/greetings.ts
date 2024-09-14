export default eventHandler((event) => {
  const name = getQuery(event).name;

  return {
    message: `Hello ${name ?? "World"}`,
    method: event.method,
  };
});
