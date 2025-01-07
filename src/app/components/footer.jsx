'use client'

export default function Footer({ footer }) {
    return (
        <footer className="dark:bg-[#454545] dark:text-white bg-white text-black">
            <h1 className="text-5xl "> {footer.title} </h1>
            <ul className="list-disc pl-5">
                {footer.tech.map((items, id) => {
                    return <li key={id}> {items} </li>

                })}

            </ul>

            {footer.credits}
        </footer>
    );
}
