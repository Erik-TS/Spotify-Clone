export default function SidebarList(props){
    return(
        <ul className="sidebarList">
            {
                props.list.map( (value, index) => {
                    return (
                        <li key={Math.random()}>
                            {
                                props.img[index] !== '' && <img alt={''} className="listIcon" src={props.img[index]} />}{<p>{value}</p>
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}