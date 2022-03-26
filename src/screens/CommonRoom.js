import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {CharsApi} from '../services/HarryCharsApi';

import CharsList from '../components/CharsList';
import HogwartsButton from '../components/HogwartsButton';

export default class CommonRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseChars: [],
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    CharsApi.get('/characters')
      .then(response => {
        this.setState({houseChars: response.data});
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Common Room</Text>
        <CharsList
          chars={this.state.houseChars}
          navigation={this.props.navigation}
        />
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
