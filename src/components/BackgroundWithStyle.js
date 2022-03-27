import * as React from 'react';
import {StyleSheet, View} from 'react-native';

//Not used yet!
export default class BackgroundWithStyle extends React.Component {
  render() {
    return <View style={styles.mainTheme}></View>;
  }
}

const styles = StyleSheet.create({
  mainTheme: {
    height: 8,
  },
});
