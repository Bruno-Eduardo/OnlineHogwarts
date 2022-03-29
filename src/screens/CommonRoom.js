import * as React from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {CharsApi} from '../services/HarryCharsApi';

import CharsList from '../components/CharsList';
import HogwartsButton from '../components/HogwartsButton';
import EmptySpace from '../components/EmptySpace';
import {getHouse} from '../services/UserInforProvider';

export default class CommonRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseChars: [],
      house: getHouse(),
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

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    CharsApi.get(`/characters/house/${this.state.house}`)
      .then(response => {
        this.setState({houseChars: response.data});
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <ImageBackground
        source={this.state.backgroundImage}
        resizeMode="cover"
        style={{flex: 1, height: undefined, width: undefined}}>
        <View style={styles.container}>
          <Text>Common Room</Text>
          <CharsList
            chars={this.state.houseChars}
            navigation={this.props.navigation}
          />
          <EmptySpace />
          <HogwartsButton
            title="Return"
            screen="Return"
            navigation={this.props.navigation}
            UserProps={this.props.route.params.UserProps}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    height: 200,
    fontSize: 20,
    color: 'white',
  },
});
