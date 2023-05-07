import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import Navbar from "../components/Navbar.js";
import Header from "../components/UI/Header.js";
import SubHeader from "../components/UI/SubHeader.js";
import PrimaryButton from "../components/UI/PrimaryButton.js";
import SecondaryButton from "../components/UI/SecondaryButton.js";
import Card from "../components/UI/Card/Card.js";
import CardContent from "../components/UI/Card/CardContent.js";
import { Searchbar } from "react-native-paper";

export default function Home() {
  const noResults = <Text>אין תוצאות.</Text>;
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const resultsJSX = noResults;
  if (results !== null && results.length > 0) {
    // if some results were found after entering the search query
    resultsJSX = results.map((result) => {
      <Card>
        <CardContent title={result.name} text={result.description} />
      </Card>;
    });
  }

  const popularTerms = [
    {
      id: 1,
      name: "ריבית",
      description:
        "ריבית היא משהו מאוד מעניין שכרגע אין לי הגדרה מדויקת אליו. אבל עדיין אני צריך שיהיה תוכן כאן לצרכים עיצוביים אז אין ברירה.",
    },
    {
      id: 2,
      name: "ריבית",
      description:
        "ריבית היא משהו מאוד מעניין שכרגע אין לי הגדרה מדויקת אליו. אבל עדיין אני צריך שיהיה תוכן כאן לצרכים עיצוביים אז אין ברירה.",
    },
    {
      id: 3,
      name: "ריבית",
      description:
        "ריבית היא משהו מאוד מעניין שכרגע אין לי הגדרה מדויקת אליו. אבל עדיין אני צריך שיהיה תוכן כאן לצרכים עיצוביים אז אין ברירה.",
    },
  ];
  const renderTerm = ({ item }) => {
    return (
      <View style={{ width: 325, marginRight: 20 }}>
        <Card>
          <CardContent title={item.name} text={item.description} />
        </Card>
      </View>
    );
  };
  const onChangeSearchQueryHandler = (query) => {
    // update the search query state in each keystroke
    setSearchQuery(query);
    //TODO update the results - fetch them from a JSON file here asynchronously
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.popularHeaderContainer}>
          <Header>פופולרים</Header>
        </View>
      </View>
      <View style={styles.termsListContainer}>
        <FlatList
          data={popularTerms}
          renderItem={renderTerm}
          horizontal={true}
          keyExtractor={(term) => term.id}
          contentContainerStyle={styles.popularTermsContainer}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.searchHeaderContainer}>
          <SubHeader>חפש</SubHeader>
        </View>
        <Searchbar
          placeholder="חפש"
          onChangeText={onChangeSearchQueryHandler}
          style={{
            backgroundColor: "#fff",
            borderRadius: 15,
            borderColor: "#8F8F8F",
          }}
        />
        <View style={styles.resultsHeaderContainer}>
          <SubHeader>תוצאות</SubHeader>
        </View>
        {resultsJSX}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.backgroundColor,
    textAlign: "right",
    backgroundColor: "#FBFBFB",
  },
  contentContainer: {
    marginRight: 30,
    marginLeft: 30,
  },
  popularHeaderContainer: {
    marginTop: 25,
    marginBottom: 10,
  },
  popularTermsContainer: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 4,
    paddingLeft: 4,
  },
  termsListContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  searchHeaderContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  resultsHeaderContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
});
