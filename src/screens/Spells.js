import * as React from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import HogwartsButton from '../components/HogwartsButton';

export default class Spells extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/wand.jpg')}
        resizeMode="cover"
        style={{flex: 1, height: undefined, width: undefined}}>
        <View style={styles.container}>
          <Text>Spells</Text>
          <Text>Lista a ser implementada</Text>
          <HogwartsButton
            title="Return"
            screen="Return"
            navigation={this.props.navigation}
            UserProps={'I was at Spells, line 19'}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
