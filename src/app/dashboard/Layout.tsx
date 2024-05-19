export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <div className={"top-72 bg-primary"}>tes 123123</div>

            {children}
        </section>
    )
}