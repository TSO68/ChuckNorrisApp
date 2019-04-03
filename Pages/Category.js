import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'native-base';
import { styles } from './styles';
import JokeItem from "../Components/JokeItem";
import { getJokeByCategory } from "../API/chucknorris_api";

export class Category extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            joke: '',
        };
    }

    componentDidMount() {
        this._getJoke();
    }

    _getJoke() {
        const cat =  this.props.navigation.getParam('nameCat', 'null');
        getJokeByCategory(cat).then(res => {
            this.setState({
                joke: res.value,
            })
        })
    }

    _renderItem = ({ item }) => {
        return (
            <JokeItem
                text={this.state.joke}
            />
        );
    };

    render() {
        const {goBack} = this.props.navigation;
        const titleCat =  this.props.navigation.getParam('nameCat', 'null');

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
                        {titleCat}
                    </Text>
                </View>

                <View style={styles.container_jokes_list}>
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