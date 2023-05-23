import { View } from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { db } from "../config /firebase";

export default function FrutaSrc() {
  const [Fruta, setFruta] = useState([]);
  const [nomeFruta, setNomeFruta] = useState("");

  async function queryFruta(nomeFruta = null) {
    try {
      const frutaRef = collection(db, "Fruta");
      const queryFruta = query(
        frutaRef,
        where("NomeFruta", "==", nomeFruta)
      );
      const querySnapshot = await getDocs(queryFruta);
      
      const frutas = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        frutas.push(data);
      });
      
      setFruta(frutas);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    queryFruta(nomeFruta);
  }, [nomeFruta]);

  return (
    <View style={{ paddingTop: 100,}}>
      <Text style={{ textAlign: "center", paddingBottom: 10, fontSize: 30, }}>Buscar Fruta</Text> { /* Laranja */ }
      <TextInput
        label="Nome da Fruta"
        value={nomeFruta}
        onChangeText={setNomeFruta}
      />
      <FlatList
        data={Fruta}
        renderItem={({ item }) => <Text>{item.NomeFruta}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}