import Link from "next/link"
import loadJsonData from "../loadJsonData/loadData"
import { GitHub, LinkedIn } from "@mui/icons-material";


export default async function Nav({nav}) {
    return (
        <>
            <nav  className="m-0 dark:bg-black dark:text-white bg-[#D3D3D3]">
                <div className="flex justify-around items-center p-6">
                    <a href={nav.github} target="_blank"> <GitHub  className = "dark:text-white dark:hover:text-gray-300 text-black hover:text-slate-700"/> </a>
                    <a href={nav.Linkedin} target="_blank"> <LinkedIn className = "dark:text-white dark:hover:text-gray-300 text-black hover:text-slate-700" /> </a> 
                </div>
                

                
            </nav>

            <div className="border-2 border-black"> </div>
        </>
    )
}