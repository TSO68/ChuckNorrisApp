import { StyleSheet } from 'react-native';

//Random + Category
const main_container = {
    flex: 4,
    backgroundColor: '#20e140',
};

//Random
const container_app = {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    justifyContent: 'space-between'
};

//Random + Category
const title_app = {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFFFFF'
};

//Random + Category
const logo_app = {
    width: 60,
    height: 60,
};

//Random
const container_joke = {
    flex: 3,
    alignItems: 'center',
    paddingTop: 25,
};

//Random
const button_random = {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3a90dd',
    padding: 10,
    width: 250,
    height: 70,
};

//Random
const joke_text = {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 70
};

//Category
const header_category = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 30,
};

//Category
const back_container = {
    width: 60,
    height: 60,
};

//Category
const back_button = {
    fontSize: 60,
    color: '#ff0000',
};

//Category
const container_jokes_list = {
    flex: 5,
    alignItems: 'center',
};

//Category
const jokes_list = {
    paddingTop: 20,
};

export const styles = StyleSheet.create({
    main_container,
    container_app,
    title_app,
    logo_app,
    container_joke,
    button_random,
    joke_text,
    header_category,
    back_container,
    back_button,
    container_jokes_list,
    jokes_list,
});