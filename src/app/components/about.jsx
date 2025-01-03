'use client'


export default function About({ about }) {
    return (
        <>
            <section className="dark:bg-[#454545] dark:text-white bg-white text-black">
                <h1 className="text-5xl flex justify-center pb-3"> {about.title} </h1>
                <p className="text-xl text-center"> {about.description} </p>
            </section>
            <div className="border-2 dark:border-b-[#D3D3D3] border-b-black"> </div>
        </>
    )
}