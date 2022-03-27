import * as React from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import HogwartsButton from '../components/HogwartsButton';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseChars: [],
      house: this.props.route.params.item.house.toLowerCase(),
    };
    // switch case over houses and set background image with require to the background attribute
    switch (this.state.house) {
      case 'ravenclaw':
        this.state.backgroundImage = require(`../assets/images/` +
          `ravenclaw` +
          `.jpg`);
        break;
      case 'hufflepuff':
        this.state.backgroundImage = require(`../assets/images/` +
          `hufflepuff` +
          `.jpg`);
        break;
      case 'gryffindor':
        this.state.backgroundImage = require(`../assets/images/` +
          `gryffindor` +
          `.jpg`);
        break;
      case 'slytherin':
        this.state.backgroundImage = require(`../assets/images/` +
          `slytherin` +
          `.jpg`);
        break;
      default:
        this.state.backgroundImage = require(`../assets/images/` +
          `ravenclaw` +
          `.jpg`);
        break;
    }
  }

  render() {
    const {item, navigation} = this.props.route.params;
    return (
      <ImageBackground
        source={this.state.backgroundImage}
        resizeMode="cover"
        style={{flex: 1, height: undefined, width: undefined}}>
        <View style={{backgroundColor: 'rgba(68,95,36,0.4)', height: '100%'}}>
          <View style={styles.itemDetail}>
            <Text>{`Details do item: ${item.name}`}</Text>
            <Text>{`Details do item: ${this.state.house}`}</Text>
            <Text>{`${item.size}`}</Text>
            <View style={styles.space}></View>
            <HogwartsButton
              title="Return"
              screen="Return"
              navigation={this.props.navigation}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
// TODO: change purple style to Hogwarts color
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
