import { View, StyleSheet, Text, ScrollView } from "react-native";
import AccordionContent from "../components/UI/AccordionContent";
import SecondaryText from "../components/UI/SecondaryText";
import { Divider } from "react-native-paper";
import Header from "../components/UI/Header";
import lightTheme from "../themes/lightTheme";
import darkTheme from "../themes/darkTheme";
import CurrentTheme from "../contexts/ThemeContext";
import { useContext } from "react";

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
          title="למה יש חשיבות רבה לבקיאות במונחים כלכליים בסיסיים?"
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
            title="מה המטרה שלנו?"
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
            title="קצת עלינו"
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
            title="ספרים מומלצים בנושא כלכלת בית"
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
  });
