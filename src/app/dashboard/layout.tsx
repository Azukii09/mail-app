import React from "react";
import Sidebar from "@/components/feature/sidebar";

export default function DashboardLayout({children,}: Readonly<{ children: React.ReactNode; }>){
    return(
        <section className={"flex overflow-hidden h-screen bg-white"}>
            <Sidebar/>
            <div className={"container overflow-y-auto"}>
                <div className={" flex flex-1 flex-col bg-secondary mt-5 p-2 "}>{children}</div>
            </div>
        </section>
    )
}