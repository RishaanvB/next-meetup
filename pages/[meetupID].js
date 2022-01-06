import Image from "next/image"
import styles from '../components/meetups/MeetupDetails.module.css'


export default function MeetupDetails(props) {
    return (
        <section className={styles.details}>
            <Image src={'https://images.pexels.com/photos/9815542/pexels-photo-9815542.jpeg?cs=srgb&dl=pexels-chakravarthy-sayani-9815542.jpg&fm=jpg'} width={600} height={600} alt={props.title} />
            <h1 className={styles.red}>Title: {props.title}</h1>
            <address>address</address>
            <p>address</p>
        </section>
    )
}