import React from 'react'
import { FlatList } from 'react-native'
import CategoryItem from './CategoryItem'
import { styles } from './styles';

class CategoryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    _displayCategory = (nameCat) => {
        this.props.navigation.navigate('Category', {nameCat: nameCat})
    };

    render() {
        return (
            <FlatList
                style={styles.category_list}
                data={this.props.categories}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <CategoryItem
                        category={item}
                        displayCategory={this._displayCategory}
                    />
                )}
            />
        )
    }
}

export default CategoryList