"use client"
import ListComponent from "@/components/components/listComponent";

export default function Dashboard(){
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
                ini profile
            </div>
            <div className="container mt-7 border-2">
                <ListComponent list={data}/>
            </div>

        </>
    )
}