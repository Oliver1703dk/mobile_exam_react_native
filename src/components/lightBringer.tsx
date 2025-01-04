import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { EmptyStatement } from 'typescript';
import { nightTheme } from '../constants/colors';

export enum Material {
  Fire = "Fire",
  ValyrianSteel = "ValyrianSteel",
  DragonGlass = "DragonGlass",
}

export enum SwordType {
  Greatsword = "Greatsword",
  Longsword = "Longsword",
  Shortsword = "Shortsword",
}

type LightbringerProps = {
  material: Material;
  swordType: SwordType;
};

const swordImages: { [key in SwordType]: any } = {
  [SwordType.Greatsword]: require("../../assets/images/swordIcons/greatsword.png"),
  [SwordType.Longsword]: require("../../assets/images/swordIcons/longsword.png"),
  [SwordType.Shortsword]: require("../../assets/images/swordIcons/shortsword.png"),
};


export const Lightbringer: React.FC<LightbringerProps> = ({material, swordType}) => {
 
  const imageSource = swordImages[swordType];
  return (
    <View style={styles.container}>
      {imageSource ? (
        <Image source={imageSource} style={styles.icon} />
      ) : (
        <Text style={styles.placeholderText}>No sword type selected</Text>
      )}
      <Text style={styles.text}>Material: {material}</Text>
      <Text style={styles.text}>Sword Type: {swordType}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10, 
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
    backgroundColor: nightTheme.background,
  },

  placeholderText: {
    fontSize: 16,
    color: "gray",
  },
  
});

export default Lightbringer;