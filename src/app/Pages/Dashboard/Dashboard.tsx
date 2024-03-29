import React from "react";

import {
  useGetThingToDoQuery,
  useGetUserQuery,
  useLazyGetUserQuery,
} from "../../api/user-api";
import Card from "../../components/card/Card";
import CardHeader from "../../components/card/CardHeader";

import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const userResponse = useGetUserQuery();
  const thingResponse = useGetThingToDoQuery();

  const [manualQuery] = useLazyGetUserQuery();

  const todo = thingResponse?.data?.activity;
  console.log(todo);

  const person = userResponse?.data?.results?.[0];

  const personName = person ? `${person.name.first} ${person.name.last}` : "";
  const image = person?.picture?.large;

  return (
    <div className={styles.dashboard}>
      <Card>
        <CardHeader text={"I am a header"} className={styles.cardHeader} />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className={styles.randomUserSection}>
          <div>Your Random User is:</div>
          <div className={styles.bold}>{personName}</div>
          <img src={image} alt={personName} />
          <button onClick={() => manualQuery()}>Reroll</button>
        </div>
        <div className={styles.randomUserSection}>
          <div>You should:</div>
          <div className={styles.bold}>{todo}</div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
