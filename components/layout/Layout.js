import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import Head from 'next/head';

function Layout(props) {
  return (
    <div>
      <Head>
        <title>Meetup Title metadata</title>
        <meta property="title" content="Meetup title meta" />
        <meta name="description" content="Testing description in metadata" />
      </Head>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
