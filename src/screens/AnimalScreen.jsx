import { View } from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-web";
import { db } from "../config /firebase";

export default function AnimalSrc() {
  const [animal, setAnimal] = useState([]);
  const [NomeDoAnimal, setNomeDoAnimal] = useState("");

  async function queryAnimal(nomeAnimal = null) {
    try {
      const animalRef = collection(db, "animal");
      const queryAnimal = query(
        animalRef,
        where("NomeDoAnimal", "==", NomeDoAnimal)
      );
      const querySnapshot = await getDocs(queryAnimal);
      
      const animais = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        animais.push(data);
      });
      
      setAnimal(animais);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    queryAnimal(NomeDo);
  }, [nomeAnimal]);

  return (
    <View style={{ paddingTop: 100, }}>
      <Text style={{ textAlign: "center", paddingBottom: 10, fontSize: 30, }}>Buscar Animal</Text> {/* Cachorro */}
      <TextInput
        label="Nome do Animal"
        value={nomeAnimal}
        onChangeText={setNomeAnimal}
      />
      <FlatList
        data={Animal}
        renderItem={({ item }) => <Text>{item.NomeAnimal}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}