import * as React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class HogwartsButton extends React.Component {
  onPressedButton = () => {
    const {screen, navigation, UserProps} = this.props;
    if (screen === 'Return') {
      navigation.goBack();
    } else {
      navigation.navigate(screen, {screen: screen, UserProps: UserProps});
    }
  };

  render() {
    const {title, screen, navigation} = this.props;
    return (
      <TouchableOpacity
        style={styles.mainTheme}
        onPress={() => this.onPressedButton()}>
        <Text style={styles.text}>{`${title}`}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mainTheme: {
    backgroundColor: '#D3A625',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#946b2f',
    borderWidth: 2,
    margin: 8,
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
});
