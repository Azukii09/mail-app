"use client"
import Hamburger from "@/components/tokens/hamburger";
import {useState} from "react";

export default function Navbar(){
    const [state, setState] = useState(false);
    const [hamburger, setHamburger] = useState("");

    const HandleHamburger = () => {
        setHamburger("hamburger-active");
        setState(!state);
    }

    return(
        <nav className="py-5 px-4 bg-warning flex items-center justify-between">
            <div className="flex items-center justify-between relative">
                <Hamburger
                    handler={HandleHamburger}
                    action={state ? hamburger + " block absolute lg:hidden":"block absolute lg:hidden"}
                />
            </div>
            <div>2</div>
        </nav>
    )
}