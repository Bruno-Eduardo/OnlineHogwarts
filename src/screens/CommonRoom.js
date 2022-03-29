import * as React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {CharsApi} from '../services/HarryCharsApi';

import CharsList from '../components/CharsList';
import HogwartsButton from '../components/HogwartsButton';
import EmptySpace from '../components/EmptySpace';
import HeaderText from '../components/HeaderText';

export default class CommonRoom extends React.Component {
  constructor(props) {
    super(props);
    this.props.route.params.UserProps.spellCount =
      this.props.route.params.UserProps.spellCount + 1;
    this.state = {
      houseChars: [],
      house: this.props.route.params.UserProps.house,
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
          <HeaderText> Common Room </HeaderText>
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
    height: '100%',
  },
});
