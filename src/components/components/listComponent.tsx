import ListItem from "@/components/tokens/listItem";

export default function ListComponent(props: { list: any[]; }) {
       return(
        <>
            <ul>
                {props.list.map(item => (
                    <ListItem key={item.id} itemName={item.name} />
                ))}
            </ul>
        </>
    )
}