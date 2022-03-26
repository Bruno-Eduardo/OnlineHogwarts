import * as React from 'react';
import {FlatList, TouchableOpacity, Text, View, StyleSheet} from 'react-native';

export default class CharsList extends React.Component {
  renderItem = ({item}) => {
    return (
      <View style={styles.Touchable}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Details', {item})}>
          <Text style={styles.TextTitle}> {`${item.name}`} </Text>
          <Text style={styles.TextSubTitle}>
            {' '}
            {`colocar props encurtadas`}{' '}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        style={{height: 500}}
        data={this.props.chars}
        renderItem={item => this.renderItem(item)}
      />
    );
  }
}

const styles = StyleSheet.create({
  Touchable: {
    height: 100,
    backgroundColor: 'rgba(138,90,162,0.4)',
    margin: 8,
  },
  TextTitle: {
    height: 40,
    marginVertical: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7711AA',
  },
  TextSubTitle: {
    color: 'rgba(68,95,36,1)',
    backgroundColor: 'rgba(255,255,255,0.4)',
    margin: 2,
    textAlign: 'right',
    borderRadius: 2,
  },
});
