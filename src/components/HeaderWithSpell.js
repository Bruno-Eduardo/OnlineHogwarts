import * as React from 'react';
import {FlatList, TouchableOpacity, Text, View, StyleSheet} from 'react-native';

export default class HeaderWithSpell extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Spells here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 30,
    textAlign: 'right',
  },
  headerText: {
    fontSize: 30,
    textAlign: 'right',
  },
  headerIcon: {
    fontSize: 30,
  },
});
