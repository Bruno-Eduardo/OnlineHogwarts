import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import CharsList from '../components/CharsList';
import HogwartsButton from '../components/HogwartsButton';
import {CharsApi} from '../services/HarryCharsApi';

export default class GreatHall extends React.Component {
  constructor(props) {
    super(props);
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
      <View style={styles.container}>
        <Text>GreatHall</Text>
        <CharsList
          chars={this.state.allChars}
          navigation={this.props.navigation}
        />
        <View style={{height: 8}}></View>
        <HogwartsButton
          title="Return"
          screen="Return"
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
