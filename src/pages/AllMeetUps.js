import { useState, useEffect } from "react";
import MeetUpList from "../components/MeetUps/MeetUpList";
// import { DUMMY_DATA } from "../utils/meetUpData";

const AllMeetUpsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetUps, setMeetUps] = useState([]);

  useEffect(() => {
    fetch("enterURLhere...")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setMeetUps(meetups);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Your Meet Ups are currently loading ...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meet Ups </h1>
      <MeetUpList meetups={meetUps} />
    </section>
  );
};

export default AllMeetUpsPage;
