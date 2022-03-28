import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class HeaderText extends React.Component {
  render() {
    return<Text style={styles.titleText}> {this.props.text} {this.props.end}</Text>;
  }
}

const styles = StyleSheet.create({
    titleText: {
      textAlignVertical: 'center',
      fontSize: 24,
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'flex-start',
      height: 40,
      margin: 8,
    },
});
