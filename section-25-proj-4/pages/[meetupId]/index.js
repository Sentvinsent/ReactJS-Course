import Head from "next/head";
import MeetupDetails from "../../components/meetups/MeetupDetail";

export default function MeetupDetailPage(props) {
  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.description} />
      </Head>
      <MeetupDetails
        image={props.meetup.image}
        title={props.meetup.title}
        description={props.meetup.description}
        address={props.meetup.address}
      />
    </>
  );
}

export async function getStaticPaths() {
  const meetups = await getIDs();
  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({ params: { meetupId: meetup.id } })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const meetupData = await getMeetup(meetupId);
  return {
    props: {
      meetup: meetupData,
    },
    revalidate: 10,
  };
}

async function getIDs() {
  const dbUrl =
    "https://react-course-proj-e9722-default-rtdb.firebaseio.com/meetups.json";
  try {
    const response = await fetch(dbUrl);
    if (response.ok) {
      const data = await response.json();
      const arrayIds = Object.entries(data).map(([id]) => ({
        id,
      }));
      return arrayIds;
    } else {
      throw new Error({ message: "Error getting meetup IDs from server" });
    }
  } catch (e) {
    //error
    console.log("Error");
  }
}

async function getMeetup(id) {
  const dbUrl = "https://react-course-proj-e9722-default-rtdb.firebaseio.com";
  try {
    const response = await fetch(`${dbUrl}/meetups/${id}.json`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error({ message: "Error getting meetup IDs from server" });
    }
  } catch (e) {
    //error
    console.log("Error");
  }
}
