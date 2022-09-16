import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetail from "./MealDetail";

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  id,
}) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("MealDetails", { mealId: id });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={pressHandler}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetail
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 24,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    margin: 8,
    textAlign: "center",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 14,
  },
});
