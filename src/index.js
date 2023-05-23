
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AnimalSrc from "./screens/AnimalScreen";
import CarroSrc from "./screens/CarroScreen";
import CorSrc from "./screens/CorScreen";
import FrutaSrc from "./screens/FrutaScreen";
import PessoaSrc from "./screens/PessoaScreen";
import ProdutoScreen from "./screens/ProdutoScreen";
import HomeSrc from "./screens/HomeScreen";


const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeSrc}
          options={{
            title: "HomeSrc",
          }}
        />
        <Stack.Screen
          name="AnimalScreen"
          component={AnimalSrc}
        />
        
        <Stack.Screen
          name="CarroScreen"
          component={CarroSrc}
        />
           <Stack.Screen
          name="CorScreen"
          component={CorSrc}
        />
           <Stack.Screen
          name="FrutaScreen"
          component={FrutaSrc}
        />
           <Stack.Screen
          name="PessoaScreen"
          component={PessoaSrc}
        />
           <Stack.Screen
          name="ProdutoScreen"
          component={ProdutoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
