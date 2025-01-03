import Link from "next/link"
import loadJsonData from "../loadJsonData/loadData"
import { GitHub, LinkedIn } from "@mui/icons-material";


export default async function Nav({nav}) {
    return (
        <>
            <nav  className="m-0 dark:bg-black dark:text-white bg-[#D3D3D3]">
                <div className="flex justify-around items-center p-6">
                    <a href={nav.socials[0].Linkedin} target="_blank"> <LinkedIn className = "dark:text-white dark:hover:text-gray-300 text-black hover:text-slate-700" /> </a> 
                    <a href={nav.socials[1].Github} > <GitHub  className = "dark:text-white dark:hover:text-gray-300 text-black hover:text-slate-700"/> </a>
                </div>
                

                
            </nav>

            <div className="border-2 dark:border-b-[#D3D3D3] border-b-black"> </div>

        
        </>
    )
}