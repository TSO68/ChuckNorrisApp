import { StyleSheet } from 'react-native';

//Search.js

const main_container = {
    flex: 4,
    backgroundColor: '#20e140',
};

const container_app = {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    justifyContent: 'space-between'
};

const title_app = {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFFFFF'
};

const logo_app = {
    width: 60,
    height: 60,
};

const container_joke = {
    flex: 3,
    alignItems: 'center',
    paddingTop: 25,
};

const button_random = {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3a90dd',
    padding: 10,
    width: 250,
    height: 70,
};

const joke_text = {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 70
};


export const styles = StyleSheet.create({
    main_container,
    container_app,
    title_app,
    logo_app,
    container_joke,
    button_random,
    joke_text,
});