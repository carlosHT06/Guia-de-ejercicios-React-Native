import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function App() {
  const [usuario, setUsuario] = useState({ nombre: "", edad: "" });

  const handleNombre = (texto: string) => {
    setUsuario({ ...usuario, nombre: texto });
  };

  const handleEdad = (texto: string) => {
    // Solo acepta números
    if (/^[0-9]*$/.test(texto)) {
      setUsuario({ ...usuario, edad: texto });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulario de Usuario</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={usuario.nombre}
        onChangeText={handleNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Escribe tu edad"
        value={usuario.edad}
        onChangeText={handleEdad}
        keyboardType="numeric"
      />

      {usuario.nombre && usuario.edad ? (
        <Text style={styles.mensaje}>
          Hola, {usuario.nombre}. Tienes {usuario.edad} años.
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  mensaje: {
    marginTop: 20,
    fontSize: 18,
  },
});
