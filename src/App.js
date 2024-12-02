import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  MainContainer,
  ScoreContainer,
  ChoicesBoard,
  ChoicesText,
  ScoreBoard,
  ScoreText,
  Score,
  ChoicesList,
  ChoicItem,
  ChoiceBtn,
  ChoiceImg,
  ResultContainer,
  ResultImgContainer,
  ResultImgSubContainer,
  PlayAgainBtn,
  TriggerBtn,
  ModalContainer,
  ModalBtn,
  ModalImg,
  ScoreResult,
  ResultText,
} from './styledComponents'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const displayStatusConstanst = {
  game: 'GAME',
  results: 'RESULTS',
}

class App extends Component {
  state = {
    selectedChoiceIndex: '',
    opponentsChoiceIndex: '',
    displayStatus: displayStatusConstanst.game,
    score: 0,
    result: '',
    choicesList,
  }

  onClickChoice = event => {
    event.preventDefault()
    const {choicesList} = this.state
    const selectedChoiceIndex = choicesList.findIndex(
      each => each.id === event.target.alt,
    )
    const opponentsChoiceIndex = Math.floor(Math.random() * choicesList.length)

    const playerSelection = choicesList.find((each, index) => {
      if (index === selectedChoiceIndex) {
        return each
      }
    }).id

    const computerSelection = choicesList.find((each, index) => {
      if (index === opponentsChoiceIndex) {
        return each
      }
    }).id

    let result

    if (playerSelection === computerSelection) {
      result = 'IT IS DRAW'
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
      result = 'YOU WON'
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
      result = 'YOU LOST'
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
      result = 'YOU WON'
    } else if (
      playerSelection === 'PAPER' &&
      computerSelection === 'SCISSORS'
    ) {
      result = 'YOU LOST'
    } else if (
      playerSelection === 'SCISSORS' &&
      computerSelection === 'PAPER'
    ) {
      result = 'YOU WON'
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
      result = 'YOU LOST'
    }

    const points = result === 'IT IS DRAW' ? 0 : result === 'YOU WON' ? 1 : -1

    this.setState(prevstate => ({
      score: prevstate.score + points,
      result,
      selectedChoiceIndex,
      opponentsChoiceIndex,
      displayStatus: displayStatusConstanst.results,
    }))
  }

  onClickPlayAgain = () => {
    this.setState({displayStatus: displayStatusConstanst.game})
  }

  renderGame = () => {
    const {choicesList} = this.state

    return (
      <ChoicesList>
        {choicesList.map(each => (
          <ChoiceBtn
            key={each.id}
            type="button"
            onClick={this.onClickChoice}
            data-testid={each.id.toLowerCase().concat('Button')}
          >
            <ChoiceImg src={each.imageUrl} alt={each.id} />
          </ChoiceBtn>
        ))}
      </ChoicesList>
    )
  }

  GameResultsView = () => {
    const {selectedChoiceIndex, opponentsChoiceIndex, result} = this.state

    const yourImageUrl = choicesList.find((each, index) => {
      if (index === selectedChoiceIndex) {
        return each
      }
    }).imageUrl
    const oppenentImageUrl = choicesList.find((each, index) => {
      if (index === opponentsChoiceIndex) {
        return each
      }
    }).imageUrl

    return (
      <ResultContainer>
        <ResultImgContainer>
          <ResultImgSubContainer>
            <ResultText>YOU</ResultText>
            <ChoiceImg src={yourImageUrl} alt="your choice" />
          </ResultImgSubContainer>
          <ResultImgSubContainer>
            <ResultText>OPPONENT</ResultText>
            <ChoiceImg src={oppenentImageUrl} alt="opponent choice" />
          </ResultImgSubContainer>
        </ResultImgContainer>
        <ScoreResult>{result}</ScoreResult>
        <PlayAgainBtn type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainBtn>
      </ResultContainer>
    )
  }

  renderGameOrResults = () => {
    const {displayStatus} = this.state
    switch (displayStatus) {
      case displayStatusConstanst.game:
        return this.renderGame()
      case displayStatusConstanst.results:
        return this.GameResultsView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <MainContainer>
        <ScoreContainer>
          <ChoicesBoard>
            <ChoicesText>Rock Paper Scissors</ChoicesText>
          </ChoicesBoard>
          <ScoreBoard>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreBoard>
        </ScoreContainer>
        {this.renderGameOrResults()}
        <Popup modal trigger={<TriggerBtn type="button">RULES</TriggerBtn>}>
          {close => (
            <ModalContainer>
              <ModalBtn type="button" onClick={() => close()}>
                <RiCloseLine />
              </ModalBtn>
              <ModalImg
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </ModalContainer>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default App
