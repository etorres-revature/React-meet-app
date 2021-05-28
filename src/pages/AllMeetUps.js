import MeetUpList from "../components/MeetUps/MeetUpList";
import { DUMMY_DATA } from "../utils/meetUpData";

const AllMeetUpsPage = () => {
  return (
    <section>
      <h1>All Meet Ups </h1>
      <MeetUpList meetups={DUMMY_DATA} />
    </section>
  );
  {
  }
};

export default AllMeetUpsPage;
