// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from 'mongodb';

const _PASSWORD = process.env.MONGO_PASS;

// set connection string

// set

async function handler(req, res) {
  if (req.method === 'POST') {
    const uri = `mongodb+srv://rishaan:${_PASSWORD}@cluster0.nektk.mongodb.net/meetup_database?retryWrites=true&w=majority`;
    const data = req.body;
    const client = new MongoClient(uri);
    try {
      await client.connect();

      const database = client.db('MEETUP');

      const meetups_collection = database.collection('meetups');

      await meetups_collection.insertOne(data);
      console.log(`document inserted as ${data}`);
    } finally {
      // Ensures that the client will close when you finish/error

      await client.close();
    }

    res.status(201).json({ message: 'meetup inserted ' });
  }
}

export default handler;
