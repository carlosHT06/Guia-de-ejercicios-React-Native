import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`El contador cambió a: ${contador}`);
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador: {contador}</Text>

      <Button title="Aumentar" onPress={() => setContador(contador + 1)} />

      {contador !== 0 && contador % 5 === 0 ? (
        <Text style={styles.mensaje}>¡Ha alcanzado un múltiplo de 5!</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
  mensaje: {
    marginTop: 20,
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
});
