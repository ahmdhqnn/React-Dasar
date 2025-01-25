export default function ToolBar({onClick}) {
    return (
        <div onClick={onClick} style={{backgroundColor:"yellow"}}>
            <button onClick={onClick}>First</button>
            <button onClick={onClick}>Second</button>
        </div>
    )
}