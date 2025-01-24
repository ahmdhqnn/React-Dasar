import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import Container from "./Container.jsx";
import TodoList from "../todo/TodoList.jsx";
import Table from "../table/Table.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";


createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld />
                <TodoList />
                <Table />
                <AlertButton text="click me" message="You click me" />
                <MyButton text="Smash me" onSmash={() => alert("You smash me")} />
            </Container>
        </StrictMode>
    );