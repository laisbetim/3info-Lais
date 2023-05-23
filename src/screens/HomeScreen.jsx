import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-web";

export default function HomeSrc({ navigation }) {
  return(
    <View style={{
      textAlign: "center",
      paddingTop: 100,
    }}>
      <Text style={{ fontSize: 30, }}>Página Inicial</Text>
      <Text style={{ fontSize: 20, paddingTop: 5, paddingBottom: 10, }}> Navegue pelas páginas de busca: </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Produtos")}>Produtos</TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cores")}>Cores</TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Animais")}>Animais</TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Frutas")}>Frutas</TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Pessoas")}>Pessoas</TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Carros")}>Carros</TouchableOpacity>
    </View>
  )
}