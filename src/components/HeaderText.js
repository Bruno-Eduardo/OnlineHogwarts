import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default class HeaderText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={[styles.defaultStyle, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  // ... add your default style here
  defaultStyle: {
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
