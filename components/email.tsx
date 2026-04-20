import React from "react";
import { Text } from "react-native";

export default function Email() {
  const Email = "yeison.vargasbernal@gmail.com";
  return <Text>correo {Email}</Text>;
}
Email.defaultProps = {
  Email,
};
