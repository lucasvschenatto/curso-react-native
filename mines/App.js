import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native'
import params from './src/params'
import MineField from './src/components/MineField'
import Header from './src/components/Header'
import LevelSelection from './src/screens/LevelSelection'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/functions'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const rows = params.getRowsAmount()
    const cols = params.getColumnsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const rows = params.getRowsAmount()
    const cols = params.getColumnsAmount()
    const minesAmount = this.minesAmount()
    return {
      board:createMinedBoard(rows,cols,minesAmount),
      won: false,
      lost: false,
      showLevelSelection: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    openField(board, row, column)

    if (lost){
      showMines(board)
      Alert.alert('Perdeu', 'Tente outra vez!')
    }
    if (won) {
      Alert.alert('Parabéns', 'Você venceu!')
    }

    this.setState({board,lost,won})
  }

  onSelectField = (row,column) => {
    if(!this.state.board[row][column].opened){
      const board = cloneBoard(this.state.board)
      const won = wonGame(board)
      invertFlag(board, row, column)

      if (won){
        Alert.alert('Parabéns', 'Você venceu!')
      }
      this.setState({board})
    }
  }

  onLevelSelected = level =>{
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <View style={styles.container}>
        <LevelSelection
          isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={()=> this.setState({showLevelSelection:false})}
          />
        <Header 
          flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true})}
          />
        <View style={styles.board}>
          <MineField
            board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board:{
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
