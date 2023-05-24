import { View } from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-web";
import { db } from "../config/firebase";


export default function CorSrc() {
  const [Cor, setCor] = useState([]);
  const [nomeCor, setNomeCor] = useState("");

  async function queryCor(nomeCor = null) {
    try {
      const corRef = collection(db, "Cor");
      const queryCor = query(
        corRef,
        where("Nome", "==", nomeCor)
      );
      const querySnapshot = await getDocs(queryCor);
      
      const cores = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        cores.push(data);
      });
      
      setCor(cores);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    queryCor(nomeCor);
  }, [nomeCor]);

  return (
    <View style={{ paddingTop: 100, }}>
      <Text style={{ textAlign: "center", paddingBottom: 10, fontSize: 30, }}>Buscar Cor</Text> {/* Preto */}
      <TextInput
        label="Nome da Cor"
        value={nomeCor}
        onChangeText={setNomeCor}
      />
      <FlatList
        data={Cor}
        renderItem={({ item }) => <Text>{item.Nome}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}