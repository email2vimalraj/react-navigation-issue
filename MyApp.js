import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import { Header, Icon } from "react-native-elements";

class HamburgerMenu extends React.Component {
  render() {
    return (
      <Icon
        name="menu"
        color="#fff"
        onPress={() => {
          this.props.navigation.toggleDrawer();
        }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    console.log(this.props.navigation);
    return (
      <View>
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          leftComponent={<HamburgerMenu navigation={this.props.navigation} />}
          centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
          outerContainerStyles={{ height: 80 }}
        />
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View>
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          leftComponent={<HamburgerMenu navigation={this.props.navigation} />}
          centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
          outerContainerStyles={{ height: 80 }}
        />
        <Text>Settings Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
});

export default createAppContainer(AppNavigator);
