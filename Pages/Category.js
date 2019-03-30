import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'native-base';
import { styles } from './styles';
import JokeCard from "../Components/JokeCard";
import {getRandomJoke} from "../API/chucknorris_api";

export class Category extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            titleText: 'Movies',
            joke: '',
        };
    }

    _getJoke() {
        getRandomJoke().then(res => {
            this.setState({
                joke: res.value,
            })
        })
    }

    _renderItem = ({ item }) => {
        return (
            <JokeCard
                text={this.state.joke}
            />
        );
    };

    render() {
        const {goBack} = this.props.navigation;

        return(
            <View style={styles.main_container}>
                <View style={styles.header_category}>
                    <TouchableOpacity
                        style={styles.back_container}
                        activeOpacity={1}
                        onPress={() => goBack()}>
                        <Icon
                            style={styles.back_button}
                            type='FontAwesome'
                            name='arrow-left'
                        />
                    </TouchableOpacity>

                    <Image
                        style={styles.logo_app}
                        source={{uri: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png'}}
                    />

                    <Text style={styles.title_app}>
                        {this.state.titleText}
                    </Text>
                </View>

                <View style={styles.container_jokes_list}>
                    <TouchableOpacity
                        style={styles.button_random}
                        activeOpacity={0.9}
                        onPress={()=> this._getJoke()}
                    >
                        <Text style={{color: 'white', fontSize: 25}}>Random joke</Text>
                    </TouchableOpacity>

                    <FlatList
                        style={styles.jokes_list}
                        data={this.state.joke}
                        keyExtractor={(item, index) => item.id}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>

        )
    }

}