import { useImmer } from "use-immer"

const initialData = {
    name: "",
    message: ""
}

export default function ContactForm() {
    const [contact, setContact] = useImmer(initialData)

    function handleNameChanges(e) {
        setContact(draf => {
            draf.name = e.target.value;
        })
    }

    function handleMessageChanges(e) {
        setContact(draf => {
            draf.message = e.target.value;
        })
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form>
                <input type="text" placeholder="Name" value={contact.name} onChange={handleNameChanges} />
                <br />
                <input type="text" placeholder="Message" value={contact.message} onChange={handleMessageChanges} />
            </form>
            <h1>Contact Detail</h1>
            <p>Name: {contact.name}</p>
            <p>Message: {contact.message}</p>
        </div>
    )
}