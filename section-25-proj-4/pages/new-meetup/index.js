import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupDara) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredMeetupDara),
    });
    if (response.ok) {
      router.push("/");
    }
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
