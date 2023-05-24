import { collection, getDocs, query, where } from "firebase/firestore";
import { View, FlatList } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { styles } from "../utils/styles";
import { db } from "../config/firebase";

export default function PessoaSrc({ navigation }) {
  const [pessoa, setpessoa] = useState([]);
  const [NomeDaPessoa, setNomeDaPessoa] = useState("");

  async function queryCor(NomeDaPessoa = null) {
    try {
      if (!NomeDaPessoa) return;
      const pessoaRef = collection(db, "pessoa");
      const queryPessoa = query(
        pessoaRef,
        where("NomeDaPessoa", ">=", NomeDaPessoa),
        where("NomeDaPessoa", "<=", NomeDaPessoa + "\uf8ff")
      );

      const querySnapshot = await getDocs(queryPessoa);
      const pessoaTemp = [];
      querySnapshot.forEach((doc) => {
        corTemp.push(doc.data());
      });
      setCor(pessoaTemp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    queryCor(NomeDaPessoa);
  }, [NomeDaPessoa]);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TextInput
        label="Nome da Pessoa"
        value={NomeDaPessoa}
        onChangeText={setNomeDaPessoa}
      />

      <FlatList
        data={pessoa}
        renderItem={({ item }) => <Text key={item.id}>{item.NomeDaPessoa}</Text>}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
}
