import * as React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import EmptySpace from '../components/EmptySpace';

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
      <View style={styles.mainView}>
        <ImageBackground
          source={require('../assets/images/background.jpg')}
          resizeMode="cover"
          style={styles.imageBackground}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{height: '100%'}}>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>{`WELCOME TO HOGWARTS`}</Text>
              </View>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
              </KeyboardAvoidingView>
              <View style={{height: 100}} />
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  keyboardType="email-address"
                  placeholder={'WIZARD NAME'}
                />
                <TextInput style={styles.textInput} placeholder={'PASSWORD'} />
                <HogwartsButton
                  title="LOGIN"
                  screen="Home"
                  navigation={this.props.navigation}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
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
  space: {
    flex: 0.5,
  },
  textInputView: {
    flex: 2,
  },
  textInput: {
    borderColor: '#777777',
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
});
