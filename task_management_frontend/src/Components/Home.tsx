import React from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import TaskOperation from "./TaskOperation";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <AddTask />
      <TaskOperation />
    </div>
  );
};

export default Home;
