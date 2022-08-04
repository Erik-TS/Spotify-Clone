import HeadGridContent from "./HeadGridContent"

export default function HeadGrid(props) {
    return (
        <div className="HeadGrid">
            <div className="row">
                <HeadGridContent />
                <HeadGridContent />
                <HeadGridContent />
            </div>
            <div className="row">
                <HeadGridContent />
                <HeadGridContent />
                <HeadGridContent />
            </div>
        </div>
    )
}