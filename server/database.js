// Just a mock DB connection, no SQL/NoSQL here yet
module.exports = {
    connect: () => {
      console.log("Yo, DB connected!");
    },
    query: (sql) => {
      console.log(`Executing query: ${sql}`);
      return [{ id: 1, value: 42 }]; // Mock data
    },
  };