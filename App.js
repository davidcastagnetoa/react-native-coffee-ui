import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "./app/config/colors"
import HomeScreen from "./app/screens/HomeScreen";
import CoffeeDetailsScreen from "./app/screens/CoffeeDetailsScreen";
import coffees from "./app/config/coffees";

const App = () => {
  return (
    <View style={{flex:1, backgroundColor: colors.dark}}>
      {/* <CoffeeDetailsScreen coffee={coffees[2]}/> */}
      <HomeScreen/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
