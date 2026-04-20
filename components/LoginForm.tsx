import React from "react";
import { TextInput, Button } from "react-native";
import { ThemedView } from "./themed-view";

export default function LoginForm() {
  return (
    <ThemedView>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Contraseña" />
      <Button title="Enviar" onPress={() => console.log("Enviado")}></Button>
    </ThemedView>
  );
}
