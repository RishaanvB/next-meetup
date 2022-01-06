import NewMeetupForm from '../components/meetups/NewMeetupForm';
import styles from './New-Meetup.module.css';
import Link from 'next/link';
export default function NewMeetup(props) {
  const addMeetupHandler = (data) => {
    console.log(data);
  };
  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
        <Link href="/">
          <a className={styles.button}>Home</a>
        </Link>
    </>
  );
}
