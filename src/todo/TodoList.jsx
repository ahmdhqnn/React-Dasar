import Todo from "./Todo.jsx"

export default function TodoList() {
    return (
        <ul>
            <Todo isCompleted={true} text="Learn JavaScript"/>
            <Todo isCompleted={true} isDeleted={true} text="Learn Pyhton"/>
            <Todo isCompleted={true} text="Learn ReactJs"/>
            <Todo isCompleted={false} text="Learn AI"/>
        </ul>
    )
}