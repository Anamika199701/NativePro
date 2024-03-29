/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from './src/components/ThemeProvider';
import MyStore from './src/redux/storetool/MyStore';

const appRedux = () =>(
    <Provider store={store}>
        <ThemeProvider>
        <App/>
        </ThemeProvider>
    </Provider>
)

AppRegistry.registerComponent(appName, () => appRedux);
