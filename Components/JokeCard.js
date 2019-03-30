import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

class JokeCard extends React.Component {

    render() {
        return (
            <View style={styles.container_joke}>
                <Text style={styles.text}>
                    {this.props.text}
                </Text>
            </View>
        );
    }

}

export default JokeCard