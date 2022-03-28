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
        <View style={{backgroundColor: 'rgba(1, 1, 1, 0.3)', height: '100%'}}>
          <View style={styles.itemDetail}>
            <Text style={styles.nameText}>{`${item.name}`}</Text>
            <Text
              style={
                styles.infoText
              }>{`Details do item: ${this.state.house}`}</Text>
            <Text style={styles.infoText}>{`${item.size}`}</Text>
            <View style={styles.space}></View>
            <View style={styles.buttonContainer}>
              <HogwartsButton
                title="Return"
                screen="Return"
                navigation={this.props.navigation}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  itemDetail: {
    backgroundColor: 'rgba(1, 1, 1, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 100,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: 'black',
    padding: 32,
  },
  space: {
    marginVertical: 20,
  },
  buttonContainer: {
    width: '100%',
  },
  nameText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 36,
  },
  infoText: {
    color: 'white',
  },
});
