import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import params from './src/params'
import MineField from './src/components/MineField'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag
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
      won:false,
      lost:false
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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.welcome}>Tamanho da grade:
          {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
