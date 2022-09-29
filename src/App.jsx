import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import Card from "./components/UI/Card";
import "./App.css";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/UI/ErrorModal.jsx";

function App() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [datas, setDatas] = useState([]);

  const handleUserName = (input) => {
    setUsername(input);
  };

  const handleAges = (input) => {
    setAge(input);
  };
  const addUserHanlder = (username, age) => {
    setDatas((prevState) => {
      return [
        {
          id: Math.random(),
          age: age,
          username: username,
        },
        ...prevState,
      ];
    });

    console.log(datas);
    setUsername("");
    setAge("");
  };

  return (
    <div className="App">
      <AddUser
        addUserHanlder={addUserHanlder}
        handleUserName={handleUserName}
        handleAges={handleAges}
        username={username}
        age={age}
      />
      <UsersList datas={datas} />
    </div>
  );
}

export default App;
