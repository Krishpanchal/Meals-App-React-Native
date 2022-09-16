import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "./components/MealItem";
import { CATEGORIES, MEALS } from "./data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catergoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    const backgroundColor = CATEGORIES.find(
      (category) => category.id === catId
    ).color;

    navigation.setOptions({
      title: catergoryTitle,
    });
  }, [catId, navigation]);

  const renderMealItem = (itemData) => {
    const item = itemData.item;

    const mealProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity.toUpperCase(),
      affordability: item.affordability.toUpperCase(),
    };

    return <MealItem {...mealProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
