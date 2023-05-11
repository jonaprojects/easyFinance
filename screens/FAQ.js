import { View, StyleSheet, Text, ScrollView } from "react-native";
import AccordionContent from "../components/UI/AccordionContent";
import SecondaryText from "../components/UI/SecondaryText";
import { Divider } from "react-native-paper";
import Header from "../components/UI/Header";
import lightTheme from "../themes/lightTheme";
import darkTheme from "../themes/darkTheme";
import CurrentTheme from "../contexts/ThemeContext";
import { Fragment, useContext } from "react";
//? loading some icons for the accordion components

export default function FAQ(props) {
  const [themeContext, setThemeContext] = useContext(CurrentTheme);
  const theme = themeContext === "light" ? lightTheme : darkTheme;
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header>שאלות נפוצות</Header>
      </View>
      <ScrollView>
        <AccordionContent
          openAtStart={true}
          title={
            themeContext === "light" ? (
              "למה יש חשיבות רבה לבקיאות במונחים כלכליים"
            ) : (
              <Fragment>
                <Text>למה יש </Text>
                <Text style={styles.highlight}>חשיבות רבה </Text>
                <Text>לבקיאות במונחים כלכליים ? </Text>
              </Fragment>
            )
          }
          text="במצב הכלכלי ובשל יוקר המחיה בישראל כיום,
          אין לאף אחד יותר את היכולת להישאר שאנן. 
          בסופו של דבר אנחנו אחראים על הכסף שלנו, 
          שעבורו אנו עומלים כה קשה, לכן כדאי שנתפוס
          את המושכות ולא נסמוך על הבנקים ועל בתי
          ההשקעות בעיניים עצומות, אלא נגלה חשיבה
          ביקורתית וננסה להוזיל את העלויות ואת העמלות."
        />

        <View style={styles.accordionContainer}>
          <AccordionContent
            icon="bullseye-arrow"
            title={
              themeContext === "light" ? (
                "מה המטרה שלנו?"
              ) : (
                <Fragment>
                  <Text>מה </Text>
                  <Text style={styles.highlight}>המטרה </Text>
                  <Text>שלנו ?</Text>
                </Fragment>
              )
            }
            text="במצב הכלכלי ובשל יוקר המחיה בישראל כיום,
          אין לאף אחד יותר את היכולת להישאר שאנן. 
          בסופו של דבר אנחנו אחראים על הכסף שלנו, 
          שעבורו אנו עומלים כה קשה, לכן כדאי שנתפוס
          את המושכות ולא נסמוך על הבנקים ועל בתי
          ההשקעות בעיניים עצומות, אלא נגלה חשיבה
          ביקורתית וננסה להוזיל את העלויות ואת העמלות."
          />
        </View>
        <View style={styles.accordionContainer}>
          <AccordionContent
            title={
              themeContext === "light" ? (
                 "קצת עלינו..."
              ) : (
                <Fragment>
                  <Text> קצת </Text>
                  <Text style={styles.highlight}>עלינו...</Text>
                </Fragment>
              )
            }
            icon="information"
            text="במצב הכלכלי ובשל יוקר המחיה בישראל כיום,
          אין לאף אחד יותר את היכולת להישאר שאנן. 
          בסופו של דבר אנחנו אחראים על הכסף שלנו, 
          שעבורו אנו עומלים כה קשה, לכן כדאי שנתפוס
          את המושכות ולא נסמוך על הבנקים ועל בתי
          ההשקעות בעיניים עצומות, אלא נגלה חשיבה
          ביקורתית וננסה להוזיל את העלויות ואת העמלות."
          />
        </View>
        <View style={styles.accordionContainer}>
          <AccordionContent
            icon="book-open-blank-variant"
            title={
              themeContext === "light" ? (
                "ספרים מומלצים בנושא כלכלת בית"
              ) : (
                <Fragment>
                  <Text>ספרים </Text>
                  <Text style={styles.highlight}>מומלצים</Text>
                  <Text> בנושא כלכלת בית</Text>
                </Fragment>
              )
            }
            text="במצב הכלכלי ובשל יוקר המחיה בישראל כיום,
          אין לאף אחד יותר את היכולת להישאר שאנן. 
          בסופו של דבר אנחנו אחראים על הכסף שלנו, 
          שעבורו אנו עומלים כה קשה, לכן כדאי שנתפוס
          את המושכות ולא נסמוך על הבנקים ועל בתי
          ההשקעות בעיניים עצומות, אלא נגלה חשיבה
          ביקורתית וננסה להוזיל את העלויות ואת העמלות."
          />
        </View>
      </ScrollView>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 25,
    },
    accordionContainer: {
      marginTop: 10,
    },
    highlight: {
      color: theme.highlight,
    },
  });
