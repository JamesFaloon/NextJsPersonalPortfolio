'use client'


export default function Header({header}) {
    return (
      <>
      <header className="m-0 dark:bg-black dark:text-white bg-[#D3D3D3]" > 
        <div className="text-6xl flex justify-center p-3"> 
            <h1 > {header.name} </h1>
        </div>
        <div className="text-5xl flex justify-around p-3">
            <h2> {header.role} </h2>
            <h2> {header.motto}</h2>
        </div> 

       
          
      </header>
      
      </>
      
  
    )
  }