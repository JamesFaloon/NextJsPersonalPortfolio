export default function Contact({ contact }) {
    return (
        <>
            <section className="dark:bg-[#454545] dark:text-white bg-white text-black">
                <h1 className="text-5xl"> {contact.title} </h1>
                <ul className="list-disc pl-5">
                    {contact.socials.map((items, id) => {
                        return <li key={id}> <a href={contact.links[id]} className="underline text-blue-500"> {items} </a> </li>
                    })}
                </ul>
                <br></br>
            </section>


            <div className="border-2 dark:border-b-[#D3D3D3] border-b-black"> </div>
        </>
    )
}