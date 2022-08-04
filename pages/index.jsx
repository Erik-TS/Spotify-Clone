import Sidebar from './Sidebar/Sidebar'
import TopControls from './MainBlock/TopControls'
import BottomBar from './BottomBar/BottomBar'
import HeadGrid from './MainBlock/HeadGrid'
import CardSection from './MainBlock/CardSection'

export default function Main() {

  function getGreetings() {
    let greetings = ''
    const hour = new Date().getHours()

    if (hour >= 12 && hour < 18) {
      greetings = 'Boa tarde'
    }
    else if (hour >= 6 && hour < 12) {
      greetings = 'Bom dia'
    }
    else {
      greetings = 'Boa noite'
    }

    return greetings
  }

  return (
    <div className="pageContainer">
      <Sidebar />
      <div className='content'>
        <TopControls />
        <p className='greetings'>{getGreetings()}</p>
        <HeadGrid />
        <CardSection title={'Seus programas'} />
      </div>
      <BottomBar />
      <footer>
        <a target="_blank" href="https://icons8.com/icon/JVODBQsYTB2C/list">List icon</a>
        <a target="_blank" href="https://icons8.com/icon/87532/multiple-devices">Multiple Devices icon</a>
        <a target="_blank" href="https://icons8.com/icon/Y7bX8bbHI42N/volume">Volume icon</a>
        <a target="_blank" href="https://icons8.com/icon/59756/circled-play">Circled Play icon</a>
        <a target="_blank" href="https://icons8.com/icon/414/shuffle">Shuffle icon</a>
        <a target="_blank" href="https://icons8.com/icon/4EZgQQtoHj3A/previous">Previous icon</a>
        <a target="_blank" href="https://icons8.com/icon/GNlidkyOr48O/next-button">Next Button icon</a>
        <a target="_blank" href="https://icons8.com/icon/mCEfICjQYzYB/repeat">Repeat icon</a>
      </footer>
    </div>
  )
}