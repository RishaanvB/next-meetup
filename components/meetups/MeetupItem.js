import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

function MeetupItem(props) {
  const router = useRouter();
  
  const showDetails = () => {
    console.log('showdetails');
    router.push('/' + props.id);
  };
  
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.image} alt={props.title} width={800} height={800} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetails}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
