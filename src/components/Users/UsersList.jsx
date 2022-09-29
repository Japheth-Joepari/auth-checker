import React from "react";
import User from "./User";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = ({ datas }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {datas.map((data, i) => {
          return (
            <li key={data.id}>
              {" "}
              {data.username}({data.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default UsersList;
