import { useHistory } from "react-router-dom";
import NewMeetUpForm from "../components/MeetUps/NewMeetupForm";

const NewMeetUpsPage = () => {
  const history = useHistory();

  const addMeetUpHandler = (meetUpData) => {
    fetch("someURLhere...", {
      method: "POST",
      body: JSON.stringify(meetUpData),
      headers: {
        "Content-Type": "applicaiton/json",
      },
    })
      .then(() => {
        history.replace("/");
      })
      .catch((err) => {
        console.error(err);
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
