export default eventHandler((event) => {
  return {
    message: "Hello World",
    method: event.method,
  };
});
