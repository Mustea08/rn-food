import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect= {false}
        placeholder="search"
        value={term}
        onChangeText={ onTermChange}
        onEndEditing={ onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: "row",
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    padding: 3,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
