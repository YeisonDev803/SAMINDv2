import React from "react";
import { TextInput, Button } from "react-native";
import { ThemedView } from "./themed-view";

export default function Prompt() {
  return (
    <ThemedView>
      <TextInput placeholder="pon tu pregunta en este espacio" />
      <Button title="Enviar pregunta" onPress={() => console.log("Enviado")}></Button>
    </ThemedView>
  );
}