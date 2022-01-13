import Image from 'next/image';
import styles from '../components/meetups/MeetupDetails.module.css';
import { dummy_list } from '../data/dummy_data';

console.log(dummy_list.map((n) => console.log(n.id, 'id')));

export async function getStaticPaths() {
  // get data

  return {
    paths: [{ params: { meetupID: 'm1' } }, { params: { meetupID: 'm2' } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupID = context.params.meetupID;
  return {
    props: {
      image:
        'https://images.pexels.com/photos/9815542/pexels-photo-9815542.jpeg?cs=srgb&dl=pexels-chakravarthy-sayani-9815542.jpg&fm=jpg',
      title: 'title 1',
      id: meetupID,
    },
  };
}

export default function MeetupDetails(props) {
  console.log(props, 'props in meetupdetails');
  return (
    <section className={styles.details}>
      <Image src={props.image} width={600} height={600} alt={props.title} />
      <h1 className={styles.red}>Title: {props.title}</h1>
      <address>{props.title}</address>
      <p>{props.address}</p>
    </section>
  );
}
