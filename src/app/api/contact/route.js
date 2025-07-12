import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const dbName = 'yourDatabaseName'; // replace with your DB name

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.name || !body.email || !body.message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
      });
    }

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('contacts');

    await collection.insertOne({
      ...body,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: 'Contact saved successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
    });
  } finally {
    await client.close();
  }
}
