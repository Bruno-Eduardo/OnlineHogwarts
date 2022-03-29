import * as React from 'react';
import {FlatList, TouchableOpacity, Text, View, StyleSheet} from 'react-native';

export default class CharsList extends React.Component {
  renderItem = ({item}) => {
    return (
      <View style={styles.Touchable}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Details', {
              item,
              UserProps: this.props.UserProps,
            })
          }>
          <Text style={styles.TextTitle}> {`${item.name}`} </Text>
          <Text style={styles.TextSubTitle}>
            {' '}
            {`${item.house == '' ? 'Staff' : item.house}, ${
              item.species == '' ? '?' : item.species
            }${item.hogwartsStudent == true ? ', student' : ''}`}{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        style={{height: 570}}
        data={this.props.chars}
        renderItem={item => this.renderItem(item)}
      />
    );
  }
}

// TODO: identify with this list has padding and apply to all screens
const styles = StyleSheet.create({
  Touchable: {
    height: 100,
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
  TextSubTitle: {
    color: 'white',
    backgroundColor: 'rgba(211, 166, 37, 1)',
    margin: 2,
    textAlign: 'right',
    borderRadius: 2,
  },
});
