import { useRef } from "react";
import Card from "../UI/Card";
import styles from "./NewMeetUpForm.module.css";

const NewMeetUpForm = (props) => {
  const titleInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meet Up Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meet Up Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Meet Up Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Meet Up Description</label>
          <textarea type="text" required id="description" rows="5" />
        </div>
        <div className={styles.actions}>
          <button>Add Meet Up</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetUpForm;
