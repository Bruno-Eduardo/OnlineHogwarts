import * as React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';

export default class SpellsList extends React.Component {
  renderItem = ({item}) => {
    return (
      <View style={styles.Touchable}>
        <Text style={styles.TextTitle}> {`${item.name}`} </Text>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        style={{height: 540}}
        data={this.props.chars}
        renderItem={item => this.renderItem(item)}
      />
    );
  }
}

// TODO: identify with this list has padding and apply to all screens
const styles = StyleSheet.create({
  Touchable: {
    backgroundColor: 'rgba(255,255,255,0.75)',
    margin: 8,
  },
  TextTitle: {
    height: 40,
    marginVertical: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#D3A625',
  },
});
