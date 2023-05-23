import { View } from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-web";
import { db } from "../config /firebase";

export default function CarroSrc() {
  const [carro, setCarro] = useState([]);
  const [NomeDOCarro, setNomeDoCarro] = useState("");

  async function queryCarro(nomeCarro = null) {
    try {
      const carroRef = collection(db, "carro");
      const queryCarro = query(
        carroRef,
        where("NomeDoCarro", "==", NomeDoCarro)
      );
      const querySnapshot = await getDocs(queryCarro);
      
      const carros = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        carros.push(data);
      });
      
      setCarro(carros);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    queryCarro(nomeCarro);
  }, [nomeCarro]);

  return (
    <View style={{ paddingTop: 100, }}>
      <Text style={{ textAlign: "center", paddingBottom: 10, fontSize: 30, }}>Buscar Carro</Text> {/* Nissan GT R35 */}
      <TextInput
        label="Nome do Carro"
        value={nomeCarro}
        onChangeText={setNomeCarro}
      />
      <FlatList
        data={Carro}
        renderItem={({ item }) => <Text>{item.NomeCarro}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}