import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";
import { parseString } from "xml2js";

export default function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const convertNumberToWords = async () => {
    const soapRequest = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:web="http://www.dataaccess.com/webservicesserver/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:NumberToWords>
            <web:ubiNum>${number}</web:ubiNum>
          </web:NumberToWords>
        </soapenv:Body>
      </soapenv:Envelope>`;

    try {
      const { data } = await axios.post(
        "http://www.dataaccess.com/webservicesserver/NumberConversion.wso",
        soapRequest,
        {
          headers: {
            "Content-Type": "text/xml; charset=utf-8",
            SOAPAction:
              "http://www.dataaccess.com/webservicesserver/NumberToWords",
          },
        }
      );

      parseString(data, (err, result) => {
        if (err) {
          console.error("Erro ao processar XML:", err);
          return;
        }

        const responseText =
          result["soap:Envelope"]["soap:Body"][0][
            "m:NumberToWordsResponse"
          ][0]["m:NumberToWordsResult"][0];

        setResult(responseText);
      });
    } catch (error) {
      console.error("Erro ao chamar o serviço SOAP:", error);
      setResult("Erro ao obter resposta.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Número para Texto</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um número"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <Button title="Converter" onPress={convertNumberToWords} />
      <Text style={styles.result}>Resultado: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});
