import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class TextIfDefined extends React.Component {
  // If the text prop is not empty, render the text, otherwise render nothing

  render() {
    if (this.props.textValue != "") {
      return <Text style={styles.titleText}> {this.props.textKey}: {String(this.props.textValue)}</Text>;
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  titleText: {
    color: 'white',
    fontSize: 14,
  },
});