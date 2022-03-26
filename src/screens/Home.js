import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import EmptySpace from '../components/EmptySpace';
import HogwartsButton from '../components/HogwartsButton';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <HogwartsButton
            title="Spells"
            screen="Spells"
            navigation={this.props.navigation}
          />
        </View>
        <Text>Home</Text>
        <Text>Tela a ser implementada</Text>

        <HogwartsButton
          title="Join Common Room"
          screen="CommonRoom"
          navigation={this.props.navigation}
        />
        <EmptySpace/>
        <HogwartsButton
          title="Join Great Hall"
          screen="GreatHall"
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
