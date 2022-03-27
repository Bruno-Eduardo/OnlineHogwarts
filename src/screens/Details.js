import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import HogwartsButton from '../components/HogwartsButton';

export default class Details extends React.Component {
  render() {
    const {item, navigation} = this.props.route.params;
    return (
      <View style={{backgroundColor: 'rgba(68,95,36,0.4)', height: '100%'}}>
        <View style={styles.itemDetail}>
          <Text>{`Details do item: ${item.name}`}</Text>
          <Text>{`${item.size}`}</Text>
          <View style={styles.space}></View>
          <HogwartsButton
            title="Return"
            screen="Return"
            navigation={this.props.navigation}
          />
        </View>
      </View>
    );
  }
}

styles = StyleSheet.create({
  itemDetail: {
    backgroundColor: 'rgba(138,90,162,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 180,
    marginHorizontal: 80,
    borderWidth: 1,
    borderColor: 'black',
  },
  space: {
    marginVertical: 20,
  },
  returnButton: {
    marginVertical: 10,
    backgroundColor: '#7711AA',
    height: 40,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
});
