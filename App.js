import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/Screens/SearchScreen'
import ResultShow from './src/Screens/ResultShow'
const navigator = createStackNavigator({
  SearchScreen,
  ResultShow
}, {
  initialRouteName: 'SearchScreen',
  defaultNavigationOptions: {
    title: "Business Search"
  }
}
)

export default createAppContainer(navigator)