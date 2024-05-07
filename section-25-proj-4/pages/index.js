import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" constent="Browse a huge list of meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const meetups = await getMeetups();
  return {
    props: {
      meetups: meetups,
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const resp = context.res;
//   //server side code
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

async function getMeetups() {
  const dbUrl =
    "https://react-course-proj-e9722-default-rtdb.firebaseio.com/meetups.json";
  try {
    const response = await fetch(dbUrl);
    if (response.ok) {
      const data = await response.json();
      const arrayData = Object.entries(data).map(([id, data]) => ({
        id,
        ...data,
      }));
      return arrayData;
    } else {
      throw new Error({ message: "Error getting meetups from server" });
    }
  } catch (e) {
    //error
    console.log("Error");
  }
}
