export default function HelloWorld() {
    return (
        <div>
            <HeaderHelloWorld />
            <ParagraphHeloWorld />
        </div>
    )
}

function HeaderHelloWorld() {
    const text = 'Hello World';
    return (
        <div>
            <h1 style={{ 
                color: "red",
                backgroundColor: "green"
             }}>{text}</h1>
        </div>
    )
}

function ParagraphHeloWorld() {
    const style = {
        color: "blue",
        backgroundColor: "red"
    }
    return (
        <div>
            <p style={style}>omaga gantengnya</p>
        </div>
    )
}