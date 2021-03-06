import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile77527Navigator from '../features/UserProfile77527/navigator';
import Tutorial77526Navigator from '../features/Tutorial77526/navigator';
import NotificationList77498Navigator from '../features/NotificationList77498/navigator';
import Settings77497Navigator from '../features/Settings77497/navigator';
import Settings77489Navigator from '../features/Settings77489/navigator';
import UserProfile77487Navigator from '../features/UserProfile77487/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile77527: { screen: UserProfile77527Navigator },
Tutorial77526: { screen: Tutorial77526Navigator },
NotificationList77498: { screen: NotificationList77498Navigator },
Settings77497: { screen: Settings77497Navigator },
Settings77489: { screen: Settings77489Navigator },
UserProfile77487: { screen: UserProfile77487Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
