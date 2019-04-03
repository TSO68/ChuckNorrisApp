import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

class CategoryItem extends React.Component {

    render() {
        const cat = this.props.category;
        const displayCategory = this.props.displayCategory;

        return (
            <TouchableOpacity
                onPress={() => displayCategory(cat.name)}
                style={styles.container_category}>
                    <Text style={styles.textItem}>
                        {cat.name}
                    </Text>
            </TouchableOpacity>
        )
    }
}

export default CategoryItem