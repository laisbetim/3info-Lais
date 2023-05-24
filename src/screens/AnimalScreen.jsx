import { View } from "react-native";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { FlatList } from "react-native-web";
import { db } from "../config/firebase";

export default function AnimalSrc() {
  const [animal, setAnimal] = useState([]);
  const [NomeDoAnimal, setNomeDoAnimal] = useState("");

  async function queryAnimal(NomeDoAnimal = null) {
    if (!NomeDoAnimal) return
    try {
      const animalRef = collection(db, "animal");
      const queryAnimal = query(
        animalRef,
        where("NomeDoAnimal", "==", NomeDoAnimal)
      );
      const querySnapshot = await getDocs(queryAnimal);

      const animais = [];
      querySnapshot.forEach((doc) => {
        animais.push(doc.data());
      },
      setAnimal(animais)     
      );

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    queryAnimal(NomeDoAnimal);
  }, [NomeDoAnimal]);

  return (
    <View style={{ paddingTop: 100 }}>
      <Text style={{ textAlign: "center", paddingBottom: 10, fontSize: 30 }}>
        Buscar Animal
      </Text>
      <TextInput
        label="Nome do Animal"
        value={NomeDoAnimal}
        onChangeText={setNomeDoAnimal}
      />
      <FlatList
        data={animal}
        renderItem={({ item }) => <Text>{item.NomeDoAnimal}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
