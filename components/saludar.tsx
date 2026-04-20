import React from "react";
import { Text } from "react-native";

export default function Saludar() {
  const firstname = "alex"
  return (
    <Text>
      Hola {firstname}
    </Text>
  );
}

//Saludar.defaultProps = {
//firstname: "Yeison",
//lastname: "Vargas",
//};

Saludar.defaultProps = {
  Saludar
};
