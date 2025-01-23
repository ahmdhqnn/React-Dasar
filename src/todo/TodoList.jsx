import Todo from "./Todo.jsx"

export default function TodoList() {

    const data = [
        {
            id: 0,
            text: "Learn Java",
            isCompleted: true
        },
        {
            id: 1,
            text: "Learn JavaScript",
            isCompleted: true
        },
        {
            id: 2,
            text: "Learn React",
            isCompleted: true
        },
        {
            id: 3,
            text: "Learn AI",
            isCompleted: true
        },
        {
            id: 4,
            text: "Learn Python",
            isCompleted: false
        },
    ]

    // const todos = data.map((todo) => <Todo key={todo.id} {...todo} />)
    return (
        <ul>
            {data.map((todo) => (

                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    )
}