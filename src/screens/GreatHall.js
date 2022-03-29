import * as React from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import CharsList from '../components/CharsList';
import EmptySpace from '../components/EmptySpace';
import HeaderText from '../components/HeaderText';
import HogwartsButton from '../components/HogwartsButton';
import {CharsApi} from '../services/HarryCharsApi';

export default class GreatHall extends React.Component {
  constructor(props) {
    super(props);
    this.props.route.params.UserProps.spellCount =
      this.props.route.params.UserProps.spellCount + 1;
    this.state = {
      allChars: [],
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    CharsApi.get('/characters')
      .then(response => {
        this.setState({allChars: response.data});
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/GreatHall.jpg')}
        resizeMode="cover"
        style={{flex: 1, height: undefined, width: undefined}}>
        <View style={styles.container}>
          <HeaderText > Great Hall  </HeaderText>
          <CharsList
            chars={this.state.allChars}
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
