import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

class JokeItem extends React.Component {

    render() {
        return (
            <View style={styles.container_joke}>
                <Text style={styles.textItem}>
                    {this.props.text}
                </Text>
            </View>
        );
    }

}

export default JokeItem