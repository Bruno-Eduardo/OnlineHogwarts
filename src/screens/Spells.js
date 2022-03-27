import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import HogwartsButton from '../components/HogwartsButton';

export default class Spells extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Spells</Text>
        <Text>Lista a ser implementada</Text>
        <HogwartsButton
          title="Return"
          screen="Return"
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {},
});
