import * as React from 'react';
import {Pressable, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class HogwartsButton extends React.Component {
  animatedPress = () => {
    this.setState({
      animation: 'rubberBand',
    });

    const {screen, navigation} = this.props;
    if (screen === 'Return') {
      navigation.goBack();
    } else {
      navigation.navigate(screen, {screen: screen});
    }
  };

  render() {
    const {title, screen, navigation} = this.props;
    return (
      <TouchableOpacity style={styles.mainTheme} onPress={() => this.animatedPress()}>
        <Text style={styles.text}>{`${title}`}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mainTheme: {
    backgroundColor: '#7711AA',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,},
  text: {
    color: 'white',
    fontWeight: '600',
  },
});