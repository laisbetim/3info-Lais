import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config /firebase";

export default function HomeScreen() {
  const [nomeDoProduto, setNomeDoProduto] = useState("");
  const [busca, setBusca] = useState([]);

  async function queryProduto(nomeDoProduto = null) {
    const produtosRef = collection(db, "produto");
    const buscaProduto = query(
      produtosRef,
      where("NomeDoProduto", "==", busca)
    );
    const resultadoSnapshot = await getDocs(buscaProduto);

    const listaDeProdutos = resultadoSnapshot.docs.map((doc) => doc.data());

    console.log(listaDeProdutos);
  }

  useEffect(() => {
    console.log("busca", busca);
  }, [busca]);

  return (
    <View>
      <Text>Home Screen</Text>
      <TextInput
        label="Nome do Produto"
        value={busca}
        onChangeText={setBusca}
      />
      <FlatList
        data={busca}
        renderItem={({ item }) => (
          <Text key={item.id}>{item.NomeDoProduto}</Text>
        )}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
}
