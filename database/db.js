const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: 1,
  connectTimeoutMS: 30000,
});

async function connectToDatabase() {
  try {
    await client.connect();

    await client.db(process.env.MONGO_DBNAME).command({ ping: 1 });
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  } finally {
    client.close;
  }
}

async function getTransactionData(dbName, collection) {
  try {
    await client.connect();
    const result = [];
    const cursor = client.db(dbName).collection(collection).find({});

    if ((await cursor.count()) === 0) {
      console.log("No docs found");
      return;
    }

    await cursor.forEach((doc) => result.push(doc));
    console.log("Fetching data from db");

    return result;
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
}

module.exports = { connectToDatabase, getTransactionData };
