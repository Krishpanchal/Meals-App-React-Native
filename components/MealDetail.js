import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDetail = ({
  duration,
  affordability,
  complexity,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability}</Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
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
