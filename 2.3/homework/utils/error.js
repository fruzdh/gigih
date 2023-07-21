class EmptyDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "EmptyDataError";
  }
}

module.exports = EmptyDataError;
