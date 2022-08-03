import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Board from "react-trello";
import { setTasks } from "../../store/task/action";
import axios from "axios";
import "./HomePage.scss";

export default function HomePage() {
  const { tasks } = useSelector((state) => state.tasksData);
  const dispatch = useDispatch();

  const data = {
    lanes: [
      {
        id: "1",
        title: "Planned Tasks",
        editable: true,
        style: {
          boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.75)",
          width: 280,
        },
        cards: tasks?.slice(0, 10).map((todo) => ({
          style: {
            backgroundColor: "#eec",
          },
          id: todo.id.toString(),
          title: todo.title,
          description: todo.title,
          draggable: true,
        })),
      },
      {
        id: "2",
        title: "in Progress",
        style: {
          boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.75)",
          width: 280,
        },
        cards: tasks?.slice(20, 25).map((todo) => ({
          id: todo.id.toString(),
          title: todo.title,
          description: todo.title,
          draggable: true,
          tags: [
            {
              bgcolor: "#EB5A46",
              color: "white",
              title: "High",
            },
            {
              bgcolor: "#0079BF",
              color: "white",
              title: "Tech Debt",
            },
            {
              bgcolor: "#61BD4F",
              color: "white",
              title: "Very long tag that is",
            },
          ],
        })),
      },
      {
        id: "3",
        title: "Completed",
        style: {
          backgroundColor: "#3179ba",
          boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.75)",
          width: 280,
        },
        cards: tasks?.slice(100, 102).map((todo) => ({
          id: todo.id.toString(),
          title: todo.title,
          description: todo.title,
          draggable: true,
        })),
      },
    ],
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      dispatch(setTasks(res.data));
    });
  }, [dispatch]);

  return (
    <div>
      <Board
        collapsibleLanes
        canAddLanes
        data={data}
        draggable
        editable
        onCardClick={function noRefCheck() {
          alert("you've clicked on Card");
        }}
        style={{
          backgroundColor: "#eee",
        }}
      />
    </div>
  );
}
