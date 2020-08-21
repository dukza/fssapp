import React, {useLayoutEffect} from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import fms from '../screens/fms';
import service from '../screens/service';
import pay from '../screens/pay';
import my from '../screens/my';
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();
// 4 undifined 이면 Movies
const getHeaderName = route =>
  route?.state?.routeNames[route.state.index] || "내 물류";
// 3
// export default ({ route }) => {
    // console.log(navigation.setOptions)
    // navigation.setOptions({title:'hello'})
    // console.log(route)

export default ({ navigation, route }) => {
    // useEffect(() => { 
        // console.log("the route change")
        // console.log(route.state.routeNames[route.state.index])
        // navigation.setOptions({
            // title: "the route change"
    //     });
    // },[route])
    const name = getHeaderName(route);
    useLayoutEffect(() => {
        navigation.setOptions({
            // title: getHeaderName(route)
            title: name
        });
    }, [route]);
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                let iconName = Platform.OS === "ios" ? "ios-" : "md-";
                if (route.name === "내 물류") {
                    iconName += "film";
                } else if (route.name === "추천 서비스") {
                    iconName += "tv";
                } else if (route.name === "내 물류비") {
                    iconName += "search";
                } else if (route.name === "설정") {
                    iconName += "heart";
                }
                return (
                    <Ionicons
                    name={iconName}
                    color={focused ? "navy" : "black"}
                    size={26}
                    />
                );
                }
            })}
            tabBarOptions={() => ({
                showLabel: true,
                labelStyle:({ focused }) => {
                    return(
                        `color: focused ? 'white' : '#222'`
                    )
                },
                style: {
                backgroundColor: "white",
                borderTopColor: "lightgray",
                color:'red'
                }
            })}
        >
            <Tab.Screen name="내 물류" component={fms} />
            <Tab.Screen name="추천 서비스" component={service} />
            <Tab.Screen name="내 물류비" component={pay} />
            <Tab.Screen name="설정" component={my} />
        </Tab.Navigator>
    )   
}