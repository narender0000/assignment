import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 600px;
  width: 600px;
  margin: auto;
  background-color: #223a5f;
  padding: 10px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ScoreContainer = styled.div`
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 10px;
  width: 70%;
  display: flex;
  justify-content: space-between;
`

export const ChoicesBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60px;
`

export const ChoicesText = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 4px;
  color: #ffffff;
`

export const ScoreBoard = styled.div`
  width: 80px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ScoreText = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 8px;
  color: #223a5f;
  font-family: 'Roboto';
`
export const ResultText = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 8px;
  color: #ffffff;
  font-family: 'Roboto';
`

export const Score = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 8px;
  color: #223a5f;
  font-family: 'Roboto';
`

export const ScoreResult = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 8px;
  color: #ffffff;
  font-family: 'Roboto';
`

export const ChoicesList = styled.div`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  flex-wrap: wrap;
`

export const ChoiceBtn = styled.button`
  height: 80px;
  width: 80px;
  border: 0px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  curser: pointer;
`
export const ChoiceImg = styled.img`
  width: 80px;
  height: 80px;
`

export const ResultContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResultImgContainer = styled.div`
  width: 260px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ResultImgSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  text-align: center;
`

export const PlayAgainBtn = styled.button`
  padding: 8px 16px;
  font-size: 12px;
  font-weight: bold;
  background-color: #ffffff;
  color: #223a5f;
  border: 0px;
  border-radius: 8px;
`

export const TriggerBtn = styled.button`
  padding: 6px 12px;
  font-size: 10px;
  font-weight: bold;
  background-color: #ffffff;
  color: #223a5f;
  border: 0px;
  border-radius: 6px;
  margin-left: auto;
`

export const ModalContainer = styled.div`
  height: 450px;
  width: 450px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #ffffff;
`

export const ModalBtn = styled.button`
  border: 0px;
  background-color: transparent;
  height: 20px;
  width: 20px;
  align-self: flex-end;
`

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
`
