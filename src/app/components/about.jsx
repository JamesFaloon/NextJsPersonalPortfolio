'use client'


export default function About({about}) {
    return (
        <>
            <section className="dark:bg-[#454545] dark:text-white bg-white text-black">
                <h1 className="text-5xl pb-3"> {about.title} </h1>
                <p> {about.description} </p>
            </section>  
            <div className="border-2 border-black"> </div>
        </>
    )
}