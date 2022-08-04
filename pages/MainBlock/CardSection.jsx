import Card from "./Card"

export default function(props){
    return(
        <div className="cardSection">
            <h3 className="titleCardSection">{props.title}</h3>
            <div className="cardRow">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}