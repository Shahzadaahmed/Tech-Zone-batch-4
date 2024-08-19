// import React, { useState } from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { NavigationContainer } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/Entypo";

// // Note: For Stack Navigation
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // const StackNavigator = createNativeStackNavigator();
// // const { Navigator, Screen } = StackNavigator;


// // Note: For Bottom Tabs Navigation
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// // const TabNavigator = createBottomTabNavigator();
// // const { Navigator, Screen } = TabNavigator;
// import { BottomNavigation } from "react-native-paper";

// // Screens...!
// import Home from './src/navigation/home/home';
// import About from './src/navigation/about/about';
// import Contact from './src/navigation/contact/contact';
// import Profile from './src/navigation/profile/profile';

// const App = () => {

//     // States...!
//     const [index, setIndex] = useState(0);
//     const [routes] = useState([
//         {
//             key: "home",
//             title: "Home",
//             focusedIcon: () => {
//                 return (
//                     <Icon
//                         name="home"
//                         color="blue"
//                         size={20}
//                     />
//                 );
//             }
//         },

//         {
//             key: "about",
//             title: "About",
//             focusedIcon: () => {
//                 return (
//                     <Icon
//                         name="info-with-circle"
//                         color="blue"
//                         size={20}
//                     />
//                 );
//             }
//         },

//         {
//             key: "contact",
//             title: "Contact",
//             focusedIcon: () => {
//                 return (
//                     <Icon
//                         name="book"
//                         color="blue"
//                         size={20}
//                     />
//                 );
//             }
//         },

//         {
//             key: "profile",
//             title: "Profile",
//             focusedIcon: () => {
//                 return (
//                     <Icon
//                         name="user"
//                         color="blue"
//                         size={20}
//                     />
//                 );
//             }
//         },
//     ]);

//     // Handler to render bottom navigation...!
//     const renderScene = BottomNavigation.SceneMap({
//         home: Home,
//         about: About,
//         contact: Contact,
//         profile: Profile
//     });

//     return (
//         <SafeAreaProvider>
//             <BottomNavigation
//                 navigationState={{ index, routes }}
//                 onIndexChange={setIndex}
//                 renderScene={renderScene}
//                 activeColor='navy'
//                 barStyle={{
//                     backgroundColor: '#8AD1C9',
//                     overflow: 'scroll',
//                     borderTopLeftRadius: 30,
//                     borderTopRightRadius: 30,
//                 }}
//             />
//         </SafeAreaProvider>
//     );
// };

// export default App;



import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
const DrawerStack = createDrawerNavigator();
const { Navigator, Screen } = DrawerStack;

// Screens...!
import Home from './src/navigation/home/home';
import About from './src/navigation/about/about';
import Contact from './src/navigation/contact/contact';
import Profile from './src/navigation/profile/profile';
import ProductsList from './src/navigation/products/products';
import Crud from './src/screens/crud/crud';
import Users from './src/screens/users/users';
import ControlPerformance from './src/screens/performance/performance';

const App = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='control-performance' component={ControlPerformance} />
                <Screen name='users' component={Users} />
                <Screen name='crud' component={Crud} />
                <Screen name='home' component={Home} />
                <Screen name='about' component={About} />
                <Screen name='profile' component={Profile} />
                <Screen name='products-list' component={ProductsList} />
                {/* <Screen name='contact' component={Contact} /> */}
            </Navigator>
        </NavigationContainer>
    );
}


export default App;