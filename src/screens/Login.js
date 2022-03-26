import * as React from 'react';
import {
  ImageBackground, StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';

const screenSizeHeight = Dimensions.get('window').height;

import HogwartsButton from '../components/HogwartsButton';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      failed_to_log: false,
    };
  }

  render() {
    return (
      <View  style={styles.mainView}>
        <ImageBackground
          source={this.state.background}
          resizeMode="cover"
          style={styles.imageBackground}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{`WELCOME TO HOGWARTS`}</Text>
          </View>
          <View style={styles.dogface}></View>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInput}
              keyboardType="email-address"
              placeholder={'WIZARD NAME'}
            />
            <TextInput style={styles.textInput}  placeholder={'PASSWORD'} />
            <HogwartsButton
              title="LOGIN"
              screen="Home"
              navigation={this.props.navigation}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    backgroundColor: 'black',
  },
  imageBackground: {
    height: screenSizeHeight,
    padding: 32,
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  textInputView: {
    flex: 2,
  },
  dogface: {
    flex: 0.5,
  },
  textInput: {
    borderColor: '#777777',
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  button: {
    backgroundColor: '#7711AA',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
