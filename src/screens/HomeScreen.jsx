import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-web";

export default function HomeSrc({ navigation }) {
  return (
    <View
      style={{
        textAlign: "center",
        paddingTop: 100,
      }}
    >
      <Text style={{ fontSize: 30 }}>Página Inicial</Text>
      <Text style={{ fontSize: 20, paddingTop: 5, paddingBottom: 10 }}>
        {" "}
        Navegue pelas páginas de busca:{" "}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("ProdutoScreen")}>
      <Text>Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CorScreen")}>
      <Text>Cores</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("AnimailScreen")}>
        <Text>Animais</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FrutaScreen")}>
        <Text>Frutas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("PessoaScreen")}>
       <Text>Pessoas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CarroScreen")}>
      <Text>Carros</Text>
      </TouchableOpacity>
    </View>
  );
}
