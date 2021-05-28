import { DUMMY_DATA } from "../utils/meetUpData";

const AllMeetUpsPage = () => {
  return (
    <section>
      <h1>All Meet Ups </h1>
      <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li>{meetup.title}</li>;
        })}
      </ul>
    </section>
  );
  {
  }
};

export default AllMeetUpsPage;
