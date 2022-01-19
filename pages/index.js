import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';


export async function getStaticProps(context) {
  const _PASSWORD = process.env.MONGO_PASS;
  const uri = `mongodb+srv://rishaan:${_PASSWORD}@cluster0.nektk.mongodb.net/meetup_database?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(uri);
  const db = client.db('MEETUP');
  const meetups_collection = db.collection('meetups');
  const meetups = await meetups_collection.find({}).toArray();
  client.close();
  const meetupData = meetups.map((meetup) => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    description: meetup.description,
    id: meetup._id.toString(),
  }));
  return {
    props: { meetupData },
  };
}
export default function Index(props) {
  return <MeetupList meetups={props.meetupData} />;
}
