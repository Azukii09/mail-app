"use client"
import Button from "@/components/tokens/button";
import {useRouter} from "next/navigation";
import ListComponent from "@/components/components/listComponent";

export default function Dashboard(){
    const router = useRouter()
    function goToDashboard(){
        router.push("/")
    }
    const data = [
        {
            id:1,
            name:"item 1",
        },
        {
            id:2,
            name:"item 2",
        },
        {
            id: 3,
            name: "item 3",
        },
        {
            id:4,
            name:"item 4",
        },
        {
            id:5,
            name:"item 5",
        },
    ]
    return (
        <>
            <div className="container mt-7">
                <Button className={"btn btn-primary"} typeName={"button"} name={"Primary"} handler={()=>alert("Primary")}/>
                <Button className={"btn btn-info"} typeName={"button"} name={"Info"} handler={goToDashboard}/>
                <Button className={"btn btn-success"} typeName={"button"} name={"Success"}/>
                <Button className={"btn btn-warning"} typeName={"button"} name={"Warning"}/>
                <Button className={"btn btn-danger"} typeName={"button"} name={"Danger"}/>
            </div>
            <div className="container mt-7 border-2">
                <ListComponent list={data}/>
            </div>
        </>
    )
}