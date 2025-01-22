export default function HelloWorld() {
    const props = {
        text: 'Hello World Spread Syntax'
    }
    return (
        <div>
            <HeaderHelloWorld {...props} />
            <ParagraphHeloWorld />
        </div>
    )
}

function HeaderHelloWorld({text = "ups lupa"}) {
    return (
            <h1 style={{ 
                color: "red",
                backgroundColor: "green"
             }}>{text}</h1>
    )
}

function ParagraphHeloWorld() {
    const style = {
        color: "blue",
        backgroundColor: "red"
    }
    return (
            <p style={style}>omaga gantengnya</p>
    )
}