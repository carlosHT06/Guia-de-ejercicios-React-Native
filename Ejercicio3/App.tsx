import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    // Limpieza al desmontar el componente
    return () => clearInterval(intervalo);
  }, []);

  const formatoHora = hora.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🕒 Reloj Digital</Text>
      <Text style={styles.hora}>{formatoHora}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    marginBottom: 15,
    fontWeight: "bold",
  },
  hora: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
