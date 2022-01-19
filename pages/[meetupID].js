import { MongoClient, ObjectId } from 'mongodb';
import Image from 'next/image';
import styles from '../components/meetups/MeetupDetails.module.css';
import Head from 'next/head';
const _PASSWORD = process.env.MONGO_PASS;

export async function getStaticPaths() {
  // get data  const meetupID = context.params.meetupID;
  const uri = `mongodb+srv://rishaan:${_PASSWORD}@cluster0.nektk.mongodb.net/meetup_database?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(uri);
  const db = client.db('MEETUP');
  const meetups_collection = db.collection('meetups');
  const meetups = await meetups_collection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: { meetupID: meetup._id.toString() },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  console.log(context.params, 'params');
  const meetupID = context.params.meetupID;
  console.log(typeof (meetupID, 'type'));
  console.log(meetupID, 'meetupID');
  const _PASSWORD = process.env.MONGO_PASS;
  const uri = `mongodb+srv://rishaan:${_PASSWORD}@cluster0.nektk.mongodb.net/meetup_database?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(uri);
  // const client = await MongoClient.connect(uri);
  try {
    await client.connect();
    const db = client.db('MEETUP');
    const meetups_collection = db.collection('meetups');
    const query = { _id: ObjectId(meetupID) };

    const meetup = await meetups_collection.findOne(query);

    console.log(meetup, 'this is meetup');
    return {
      props: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      },
    };
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

export default function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <section className={styles.details}>
        <Image src={props.image} width={600} height={600} alt={props.title} />
        <h1 className={styles.red}>Title: {props.title}</h1>
        <address>{props.title}</address>
        <p>{props.address}</p>
      </section>
    </>
  );
}
