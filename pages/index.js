import MeetupList from '../components/meetups/MeetupList';
const dummy_list = [
  {
    id: 'm1',
    title: 'first-meetup',
    image:
      'https://images.pexels.com/photos/9815542/pexels-photo-9815542.jpeg?cs=srgb&dl=pexels-chakravarthy-sayani-9815542.jpg&fm=jpg',
    address: 'eiffeltowerstreet 12',
    description: 'first-meetup',
  },
  {
    id: 'm2',
    title: 'second-meetup',
    image:
      'https://images.pexels.com/photos/9815542/pexels-photo-9815542.jpeg?cs=srgb&dl=pexels-chakravarthy-sayani-9815542.jpg&fm=jpg',
    address: 'eiffeltowerstreet 12',
    description: 'second-meetup',
  },
];

export async function getStaticProps(context) {
  return {
    props: { dummy_list },
  };
}
export default function Index(props) {
  return <MeetupList meetups={props.dummy_list} />;
}
