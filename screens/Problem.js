import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

function Problem() {
  let [state, setState] = useState({answer: ''});

  const enterDigit = (digit: string): void => {
    if (state.answer.length < 5) {
      setState({answer: state.answer + digit});
    }
  };

  const deleteDigit = (): void => {
    setState({answer: ''});
  };

  const submitAnswer = (): void => {
    setState({...state, correct: true});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Problem #1</Text>
      <Text style={styles.problem}>1 + 1 =</Text>
      <Text style={styles.problem}>{state.correct ? "CORRECT" : state.answer || '?'}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            enterDigit('1');
          }}>
          <View>
            <Text style={styles.numeral}>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            enterDigit('2');
          }}>
          <View>
            <Text style={styles.numeral}>2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            enterDigit('3');
          }}>
          <View>
            <Text style={styles.numeral}>3</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            enterDigit('4');
          }}>
          <View>
            <Text style={styles.numeral}>4</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            enterDigit('5');
          }}>
          <View>
            <Text style={styles.numeral}>5</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            enterDigit('6');
          }}>
          <View>
            <Text style={styles.numeral}>6</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            enterDigit('7');
          }}>
          <View>
            <Text style={styles.numeral}>7</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            enterDigit('8');
          }}>
          <View>
            <Text style={styles.numeral}>8</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            enterDigit('9');
          }}>
          <View>
            <Text style={styles.numeral}>9</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            deleteDigit();
          }}>
          <View>
            <Text style={styles.del}>DEL</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            enterDigit('0');
          }}>
          <View>
            <Text style={styles.numeral}>0</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            submitAnswer();
          }}>
          <View>
            <Text style={styles.del}>=</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
  },
  button: {
    borderStyle: 'solid',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    width: 64,
    height: 64,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  blankButton: {
    width: 64,
    height: 64,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  title: {
    color: '#101010',
    fontSize: 24,
  },
  problem: {
    color: '#101010',
    fontSize: 72,
    fontWeight: 'normal',
    marginBottom: 48,
  },
  numeral: {
    color: '#101010',
    fontSize: 36,
    fontWeight: 'bold',
  },
  del: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Problem;
