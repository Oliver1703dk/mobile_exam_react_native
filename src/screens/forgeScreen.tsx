import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Button } from "react-native";
import GOTHeader from "../components/GOTComponents/GOTHeader";
import Lightbringer, { Material, SwordType } from "../components/lightBringer";
import { nightTheme } from "../constants/colors";

const ForgeScreen: React.FC = () => {
  const [material, setMaterial] = useState<Material>(Material.Fire);
  const [swordType, setSwordType] = useState<SwordType>(SwordType.Greatsword);


  const handleForge = () => {
    console.log(`Forged a ${material} ${swordType}!`);
  };
  

  return (
    <View style={styles.container}>
      <GOTHeader />
      <ImageBackground
        source={require("../../assets/images/forge.png")}
        style={styles.background}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Select Material:</Text>
          <View style={styles.buttonRow}>
            <View style={styles.button}>
            <Button title="Fire" onPress={() => setMaterial(Material.Fire)} />
            </View>
            <View style={styles.button}>
            <Button title="Valyrian Steel" onPress={() => setMaterial(Material.ValyrianSteel)} />
            </View>
            <View style={styles.button}>
            <Button title="Dragon Glass" onPress={() => setMaterial(Material.DragonGlass)} />
            </View>
          </View>

          <Text style={styles.title}>Select Sword Type:</Text>
          <View style={styles.buttonRow}>
            <View style={styles.button}>
            <Button title="Greatsword" onPress={() => setSwordType(SwordType.Greatsword)} />
            </View>
            <View style={styles.button}>
            <Button title="Longsword" onPress={() => setSwordType(SwordType.Longsword)} />
            </View>
            <View style={styles.button}>
            <Button title="Shortsword" onPress={() => setSwordType(SwordType.Shortsword)} />
            </View>
          </View>

          <Lightbringer material={material} swordType={swordType} />
          <View style={styles.button}>
          <Button title="Forge" onPress={() => handleForge()} />
          </View> 
        </View>
      </ImageBackground>
    </View>
  );
};

export default ForgeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    backgroundColor: nightTheme.background,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  button: {
    backgroundColor: nightTheme.background,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  
});
