import { useState } from "react";

export default function TaskForm({ setItems }) {
    const [item, setItem] = useState("");

    function handleNameChanges(e) {
        setItem(e.target.value);
    }
    function handleClick(e) {
        e.preventDefault();
        setItems((draft => {
            draft.push(item);
        }))
        setItem("");
    }
    return (
        <div>
            <h1>Create Task</h1>
            <form action="">
                <input value={item} onChange={handleNameChanges} />
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}