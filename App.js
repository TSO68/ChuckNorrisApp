import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Random } from "./Pages/Random";
import { Category } from "./Pages/Category";


const MainNavigator = createStackNavigator({
        Random: {
            screen: Random
        },
        Category: {
            screen: Category
        },
    },
    {
        initialRouteName: 'Random'
    }
);

const App = createAppContainer(MainNavigator);

export default App;