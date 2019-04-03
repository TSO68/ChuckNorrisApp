import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, FlatList } from 'react-native';
import { styles } from './styles';
import { getRandomJoke } from "../API/chucknorris_api";
import CategoryList from "../Components/CategoryList";

export class Random extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            titleText: "Chuck Norris Jokes",
            joke: '',
            categories: [],
        };
    }

    _getJoke() {
        getRandomJoke().then(res => {
            this.setState({
                joke: res.value,
            })
        })
    }

    _displayCategory = (nameCat) => {
        this.props.navigation.navigate('Category', {nameCat: nameCat})
    };

    render() {
        //const { navigate } = this.props.navigation;

        return(
            <View style={styles.main_container}>
                <View style={styles.container_app}>
                    <Text style={styles.title_app}>
                        {this.state.titleText}
                    </Text>

                    <Image
                        style={styles.logo_app}
                        source={{uri: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png'}}
                    />
                </View>

                <View style={styles.container_joke}>
                    <TouchableOpacity
                        style={styles.button_random}
                        activeOpacity={0.9}
                        onPress={()=> this._getJoke()}
                    >
                        <Text style={{color: 'white', fontSize: 25}}>Random joke</Text>
                    </TouchableOpacity>

                    <Text style={styles.joke_text}>
                        {this.state.joke}
                    </Text>

                    <CategoryList
                        categories={this.state.categories}
                        navigation={this.props.navigation}
                    />
                </View>
            </View>

        )
    }
}