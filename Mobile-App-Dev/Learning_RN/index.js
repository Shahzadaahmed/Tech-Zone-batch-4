// Note: Root file...!

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from "./app";
import { Provider } from 'react-redux';
import store from './src/redux/store';

const RootComponent = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => RootComponent);