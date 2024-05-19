"use client"
import Button from "@/components/tokens/button";

export default function Tes(){
    return (
        <>
            <div className="container mt-7">
                <Button className={"btn btn-primary"} typeName={"button"} name={"Primary"} handler={()=>alert("Primary")}/>
            </div>
        </>
    )
}