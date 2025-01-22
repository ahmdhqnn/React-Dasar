import './HelloWorld.css';

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
            <h1 className='title'>{text}</h1>
    )
}

function ParagraphHeloWorld() {
    const text = 'omaga gantengnya';
    return (
            <p className='content'>{text}</p>
    )
}
