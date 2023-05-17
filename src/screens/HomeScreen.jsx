import { View } from "react-native"
import { Text } from "react-native-paper"
import { db } from "../config /firebase";
import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";


export default function HomeScreen() {
 

const [produtos, setProdutos] = useState([]);

async function queryProdutos(nomeDoProduto = null) {
    try{
       const produtosRef = collection(db, "produtos");
       const queryProdutos = query(produtosRef, where("NomeDoProduto", "==", "abacaxi"));
       // execute query 
       const querySnapshot = await getDocs(query);
    } catch (error) {
        console.log(error);
    }
}

   return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}