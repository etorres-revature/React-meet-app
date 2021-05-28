import NewMeetUpForm from "../components/MeetUps/NewMeetupForm";

const NewMeetUpsPage = () => {
  const addMeetUpHandler = (meetUpData) => {
    fetch("someURLhere...", {
      method: "POST",
      body: JSON.stringify(meetUpData),
      headers: {
        "Content-Type": "applicaiton/json",
      },
    });
  };

  return (
    <section>
      <h1>Add New Meet Up</h1>
      <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
    </section>
  );
};

export default NewMeetUpsPage;
