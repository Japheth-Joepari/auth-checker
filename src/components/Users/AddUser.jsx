import { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({
  addUserHanlder,
  handleUserName,
  handleAges,
  username,
  age,
}) => {
  const [error, setError] = useState();

  const handleUsername = (e) => {
    handleUserName(e.target.value);
  };

  const handleAge = (e) => {
    handleAges(e.target.value);
  };

  const addAuser = (e) => {
    e.preventDefault();
    if (
      username.trim().length < 0 ||
      +age.trim().length === 0 ||
      username === ""
    ) {
      setError({
        title: "Invalid input",
        mesage: "Pls enter a valid non empty values are not allowed",
      });
      return;
    }

    if (+age < 1 || age.trim().length === 0) {
      setError({
        title: "Invalid age",
        mesage: "Pls enter a valid age empty values are not allowed",
      });
      return;
    }
    addUserHanlder(username, age);
  };

  const handleClosedModal = (e) => {
    setError("");
    console.log("why did you close me");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.mesage}
          handleClosedModal={handleClosedModal}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addAuser}>
          <label htmlFor="name"> Username </label>
          <input
            type="text"
            id="username"
            onChange={handleUsername}
            value={username}
          />
          <label htmlFor="age"> Age</label>
          <input type="number" id="age" onChange={handleAge} value={age} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
