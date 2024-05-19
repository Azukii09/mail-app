export default function ListItem(props: {
    key?: number;
    itemName: string | number | bigint | boolean | null | undefined; }){
    return(
        <li>{props.itemName}</li>
    )
}