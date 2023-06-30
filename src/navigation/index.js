import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import AuthStack from './navigationStacks';
import {Provider} from 'react-redux';
import {store} from 'store/setup';
import {useColorScheme} from 'react-native';
import Toast from 'react-native-toast-message';
import {toastConfig} from 'components/ToastView';
import {StackNames} from 'constants/navigationConstants';
import {createStackNavigator} from '@react-navigation/stack';
import {theme} from 'constants/theme';

console.log(store, 'storestore');
RNBootSplash.hide();
const RootStack = createStackNavigator();

function App() {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme[scheme]}>
        <RootStack.Navigator>
          <RootStack.Group>
            {/* This will have all screens related to auth like Login & Forgot password */}
            <RootStack.Screen
              name={StackNames.AuthenticationStack}
              component={AuthStack}
              options={{headerShown: false}}
            />
            {/* Create new if required */}
          </RootStack.Group>
        </RootStack.Navigator>
        <Toast config={toastConfig} />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
