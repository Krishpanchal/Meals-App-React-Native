import React from "react";
import { Text, View } from "react-native";

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;

  return (
    <View>
      <Text>Meals Overview = {catId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;
