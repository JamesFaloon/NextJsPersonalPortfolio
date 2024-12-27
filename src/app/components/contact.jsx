export default function Contact({contact}) {
    return (
        <> 
            <section className="dark:bg-[#454545] dark:text-white bg-white text-black">
                <h1 className="text-5xl"> {contact.title} </h1>
                <ul>
                    {contact.socials.map((items, id) => {
                        return <li key={id}> {items} </li>
                    })}
                </ul>
                <br></br>
            </section>


            <div className="border-2 border-black"> </div>
        </>
    )
}