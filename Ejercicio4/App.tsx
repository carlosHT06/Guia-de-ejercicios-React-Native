import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default function App() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setCargando(false);
    }, 3000); // 3 segundos

    // Limpieza al desmontar
    return () => clearTimeout(temporizador);
  }, []);

  return (
    <View style={styles.container}>
      {cargando ? (
        <>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.texto}>Cargando...</Text>
        </>
      ) : (
        <Text style={styles.texto}>Bienvenido a la aplicación 🎉</Text>
      )}
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
    fontSize: 22,
    marginTop: 15,
  },
});
