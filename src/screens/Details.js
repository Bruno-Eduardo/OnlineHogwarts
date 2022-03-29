import * as React from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import HogwartsButton from '../components/HogwartsButton';
import TextIfDefined from '../components/TextIfDefined';

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
          `GreatHall` +
          `.jpg`);
        break;
    }
  }
  //source={{uri: item.image}}
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

            <View style={{flexDirection: 'row'}}>
              <View style={{flex: item.image == '' ? 0.01 : 1}}>
                <Image
                  style={styles.tinyLogo}
                  source={
                    item.image == ''
                      ? require('../assets/images/empty.jpg')
                      : {uri: item.image}
                  }
                />
              </View>
              <View style={{flex: 1}}>
                <TextIfDefined textKey="House" textValue={item.house} />
                <TextIfDefined textKey="Species" textValue={item.species} />
                <TextIfDefined textKey="Gender" textValue={item.gender} />
                <TextIfDefined
                  textKey="Birth year"
                  textValue={item.yearOfBirth}
                />
                <TextIfDefined textKey="Wizard" textValue={item.wizard} />
                <TextIfDefined textKey="Ancestry" textValue={item.ancestry} />
                <TextIfDefined textKey="Eye" textValue={item.eyeColour} />
                <TextIfDefined textKey="Hair" textValue={item.hairColour} />
                <TextIfDefined textKey="Patronus" textValue={item.patronus} />
                <TextIfDefined
                  textKey="Student"
                  textValue={item.hogwartsStudent}
                />
                <TextIfDefined textKey="Staff" textValue={item.hogwartsStaff} />
                <TextIfDefined textKey="Alive" textValue={item.alive} />
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <HogwartsButton
                title="Return"
                screen="Return"
                navigation={this.props.navigation}
                UserProps={this.props.route.params.UserProps}
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
    textAlign: 'center',
  },
  infoText: {
    color: 'white',
    fontSize: 16,
  },
  tinyLogo: {
    width: '90%',
    height: '70%',
    padding: 4,
  },
});
