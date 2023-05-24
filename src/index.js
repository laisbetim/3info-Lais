import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AnimalSrc from "./screens/AnimalScreen";
import CarroSrc from "./screens/CarroScreen";
import CorSrc from "./screens/CorScreen";
import FrutaSrc from "./screens/FrutaScreen";
import PessoaSrc from "./screens/PessoaScreen";
import HomeSrc from "./screens/HomeScreen";
import ProdutoSrc from "./screens/ProdutoScreen";

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
        <Stack.Screen name="AnimalSrc" component={AnimalSrc} />
        <Stack.Screen name="CarroSrc" component={CarroSrc} />
        <Stack.Screen name="CorSrc" component={CorSrc} />
        <Stack.Screen name="FrutaSrc" component={FrutaSrc} />
        <Stack.Screen name="PessoaSrc" component={PessoaSrc} />
        <Stack.Screen name="ProdutoSrc" component={ProdutoSrc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
