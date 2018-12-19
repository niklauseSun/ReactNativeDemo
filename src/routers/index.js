import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import {
  HomeContainer,
  MyContainer,
  TestContainer
} from '../containers'

const TabNavigator = createBottomTabNavigator({
  Home: HomeContainer,
  My: MyContainer
})

const AppNavigator = createStackNavigator({
  Home: TabNavigator,
  Settings: TestContainer
});


export default AppNavigator
