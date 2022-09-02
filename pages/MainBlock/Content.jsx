import TopControls from "./TopControls"
import HeadGrid from "./HeadGrid"
import CardSection from "./CardSection"

export default function Content(props) {

    function getGreetings() {
        const hour = new Date().getHours()

        if (hour >= 12 && hour < 18) return 'Boa tarde'
        else if (hour >= 6 && hour < 12) return 'Bom dia'
        else return 'Boa noite'
    }

    return (
        <div className='content'>
            <div className='mainContainer'>
                <TopControls />
                <p className='greetings'>{getGreetings()}</p>
                <HeadGrid />
                <CardSection title={'Seus programas'} />
            </div>
        </div>
    )
}