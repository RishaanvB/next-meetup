import NewMeetupForm from '../components/meetups/NewMeetupForm';
import styles from './New-Meetup.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';

export default function NewMeetup(props) {
  const router = useRouter();

  const addMeetupHandler = async (form_body) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(form_body),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch('/api/new-meetup', options);
    const data = await response.json();

    console.log(data);

    router.push('/');
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
