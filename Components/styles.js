import { StyleSheet } from 'react-native';

//CategoryList
const category_list = {
    marginTop: 20,
    marginBottom: 10,
    paddingTop: 20,
};

//CategoryItem
const container_category = {
    width: 300,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#ffc71b',
    borderRadius: 10,
    elevation: 4,
};

//JokeItem
const container_joke = {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#ffc71b',
    borderRadius: 10,
    elevation: 4,
};

//CategoryItem + JokeItem
const textItem = {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
};

export const styles = StyleSheet.create({
    category_list,
    container_category,
    container_joke,
    textItem,
});