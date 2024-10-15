// CVTemplate.tsx
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  
  Font,
  Link,
} from "@react-pdf/renderer";

Font.register({
  family: "FontName",

  fonts: [
    { src: "Raleway-Regular.ttf" }, // Regular
    { src: "Raleway-SemiBold.ttf", fontWeight: "semibold" },
    { src: "Raleway-Light.ttf", fontWeight: "light" },
    { src: "Raleway-Medium.ttf", fontWeight: "medium" }, // Bold
  ],
});

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 25,
    fontFamily: "FontName",
  },
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
  },
  headerLeft: {
    height: "100%",
    width: "31%",
  },
  headerRight: {
    height: "100%",
    width: "69%",
  },
  headerTitle: {
    flexDirection: "column",
    marginTop: "40pt",
  },
  headerTitleName: {
    fontWeight: "semibold",
    fontSize: "24",
    marginBottom: "3pt",
    color: "#C96868",
  },
  headerTitleDescription: {
    fontSize: "11",
    lineHeight: "1.5pt",
  },
  PersonalDetailArea: {
    flexDirection: "column",
  },
  PersonalDetailRow: {
    flexDirection: "row",
    marginTop: 5,
  },
  PersonalDetailRight: {
    fontSize: 11,
    width: "69%",
  },

  Area: {
    flexDirection: "row",
    marginTop: 10,
  },
  AreaTitle: {
    borderBottom: 0.7,
    borderColor: "#758694",
    lineHeight: 1.3,
    marginTop: 15,
  },
  AreaContentLeft: {
    width: "31%",
    color: "#C96868",
    fontSize: 11,
    fontWeight: "semibold",
  },
  AreaContentRight: {
    width: "69%",
    flexDirection: "column",
  },
  AreaContentRight1: {
    fontSize: 11,
    fontWeight: "semibold",
    width: "69%",
  },
  AreaContentRight2: {
    fontSize: 11,
    fontWeight: "semibold",
    width: "69%",
  },
  AreaContentRight3: {
    fontSize: 11,
    width: "69%",
  },
  ListContent: {
    fontSize: 11,
    flexDirection: "row",
  },
  ListDecoration: {
    height: 10,
    width: 10,
    backgroundColor: "#3A6D8C",
  },
  ListContentArea: {
    flexDirection: "column",
    marginTop: 6,
  },
});

const Template3: React.FC = () => {
  return (
    <Document>
      <Page style={styles.page} size={"A4"}>
        <View style={styles.header}>
          <View style={styles.headerLeft}></View>
          <View style={styles.headerRight}>
            <View style={styles.headerTitle}>
              <Text style={styles.headerTitleName}>Ali Yıldırım</Text>
              <Text style={styles.headerTitleDescription}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                quae ad quas officiis fugit, distinctio eligendi aspernatur
                provident accusantium quam! Lorem ipsum dolor sit amet.
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.AreaTitle}>Kişisel Bilgiler</Text>
        <View style={styles.PersonalDetailArea}>
          <View style={styles.PersonalDetailRow}>
            <Text style={styles.AreaContentLeft}>İsim</Text>
            <Text style={styles.PersonalDetailRight}>Ali Yıldırım</Text>
          </View>
          <View style={styles.PersonalDetailRow}>
            <Text style={styles.AreaContentLeft}>E-posta adresi</Text>
            <Text style={styles.PersonalDetailRight}>
              aliyildirim@gmail.com
            </Text>
          </View>
          <View style={styles.PersonalDetailRow}>
            <Text style={styles.AreaContentLeft}>Telefon Numarası</Text>
            <Text style={styles.PersonalDetailRight}>05550361620</Text>
          </View>
          <View style={styles.PersonalDetailRow}>
            <Text style={styles.AreaContentLeft}>Adres</Text>
            <Text style={styles.PersonalDetailRight}>
              Serintepe mahallesi 183. Sokak no:13 Marmaris/Muğla
            </Text>
          </View>
          <View style={styles.PersonalDetailRow}>
            <Text style={styles.AreaContentLeft}>Doğum tarihi</Text>
            <Text style={styles.PersonalDetailRight}>12.08.1990</Text>
          </View>
          <View style={styles.PersonalDetailRow}>
            <Text style={styles.AreaContentLeft}>Doğum yeri</Text>
            <Text style={styles.PersonalDetailRight}>Antalya</Text>
          </View>
          <View style={styles.PersonalDetailRow}>
            <Text style={styles.AreaContentLeft}>Cinsiyet</Text>
            <Text style={styles.PersonalDetailRight}>Erkek</Text>
          </View>
          <View style={styles.PersonalDetailRow}>
            <Text style={styles.AreaContentLeft}>Medeni durum</Text>
            <Text style={styles.PersonalDetailRight}>Bekar</Text>
          </View>
          <View style={styles.PersonalDetailRow}>
            <Text style={styles.AreaContentLeft}>Askerlik</Text>
            <Text style={styles.PersonalDetailRight}>Tecilli</Text>
          </View>
          <View style={styles.PersonalDetailRow}>
            <Text style={styles.AreaContentLeft}>Website</Text>
            <Link src="https://react.dev/" style={styles.PersonalDetailRight}>
              www.quickcv.com
            </Link>
          </View>
          <View style={styles.PersonalDetailRow}>
            <Text style={styles.AreaContentLeft}>Linkedin</Text>
            <Link src="https://react.dev/" style={styles.PersonalDetailRight}>
              www.quickcv.com
            </Link>
          </View>
        </View>
        {/* Eğitimler */}
        <Text style={styles.AreaTitle}>Eğitimler</Text>

        <View style={styles.Area} wrap={false}>
          <Text style={styles.AreaContentLeft}>Eyl 2004 - Haz 2008</Text>
          <View>
            <Text style={styles.AreaContentRight1}>Lise</Text>
            <Text style={styles.AreaContentRight2}>
              Cengiz Topel Anadolu Lisesi, İstanbul
            </Text>
            <Text style={styles.AreaContentRight3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus necessitatibus obcaecati minima nihil commodi ex.
            </Text>
          </View>
        </View>
        <View style={styles.Area} wrap={false}>
          <Text style={styles.AreaContentLeft}>Tem 2009 - Haz 2014</Text>
          <View>
            <Text style={styles.AreaContentRight1}>
              Bilgisayar Muhendisliği
            </Text>
            <Text style={styles.AreaContentRight2}>
              İstanbul Teknik Üniversitesi, İstanbul
            </Text>
            <Text style={styles.AreaContentRight3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus necessitatibus obcaecati minima nihil commodi ex.
            </Text>
          </View>
        </View>

        {/* İş Deneyimi */}
        <Text style={styles.AreaTitle}>İş Deneyimi</Text>
        <View style={styles.Area} wrap={false}>
          <Text style={styles.AreaContentLeft}>Tem 2015 - Haz 2023</Text>
          <View>
            <Text style={styles.AreaContentRight1}>Yazılım Mühendisliği</Text>
            <Text style={styles.AreaContentRight2}>Akınsoft, İstanbul</Text>
            <Text style={styles.AreaContentRight3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus necessitatibus obcaecati minima nihil commodi ex.
            </Text>
          </View>
        </View>

        {/* Sertifikalar */}
        {/* <View wrap={false}>
          <Text style={styles.AreaTitle}>Sertifikalar</Text>
          <View style={styles.Area} wrap={false}>
            <Text style={styles.AreaContentLeft}>Tem 2018-Kas 2019</Text>
            <View>
              <Text style={styles.AreaContentRight1}>.Net core MVC</Text>
              <Text style={styles.AreaContentRight2}>BTK Akademi</Text>
              <Text style={styles.AreaContentRight3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus necessitatibus obcaecati minima nihil commodi ex.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.Area} wrap={false}>
          <Text style={styles.AreaContentLeft}>Tem 2019-Kas 2019</Text>
          <View>
            <Text style={styles.AreaContentRight1}>.Net core MVC</Text>
            <Text style={styles.AreaContentRight2}>BTK Akademi</Text>
            <Text style={styles.AreaContentRight3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus necessitatibus obcaecati minima nihil commodi ex.
            </Text>
          </View>
        </View> */}
        {/* Yetenekler */}
        <View wrap={false}>
          <Text style={styles.AreaTitle}>Yetenekler</Text>
          <View style={styles.PersonalDetailRow}>
            <Text style={styles.AreaContentLeft}>Javascript</Text>
            <Text style={styles.PersonalDetailRight}>iyi</Text>
          </View>
        </View>
        <View style={styles.PersonalDetailRow}>
          <Text style={styles.AreaContentLeft}>React</Text>
          <Text style={styles.PersonalDetailRight}>Çok iyi</Text>
        </View>
        {/* <View wrap={false}>
          <Text style={styles.AreaTitle}>Diller</Text>
          <View style={styles.PersonalDetailRow}>
            <Text style={styles.AreaContentLeft}>İngilizce</Text>
            <Text style={styles.PersonalDetailRight}>Orta</Text>
          </View>
        </View>
        <View style={styles.PersonalDetailRow}>
          <Text style={styles.AreaContentLeft}>Almanca</Text>
          <Text style={styles.PersonalDetailRight}>Başlangıç</Text>
        </View> */}
        {/* refernaslar */}
        <Text>aaaaaaaaaaaa</Text>
        <View wrap={false}>
          <Text style={styles.AreaTitle}>Referanslar</Text>

          <View style={{ marginTop: 8 }}>
            <Text style={styles.AreaContentRight1}>Ahmet Kayacı</Text>
            <Text style={styles.AreaContentRight2}>
              Süleyman Demirel Üniversitesi, Isparta
            </Text>
            <Text style={styles.AreaContentRight3}>
              05319369720 furkann.guler13@gmail.com
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 8 }} wrap={false}>
          <Text style={styles.AreaContentRight1}>Ahmet Kayacı</Text>
          <Text style={styles.AreaContentRight2}>
            Süleyman Demirel Üniversitesi, Isparta
          </Text>
          <Text style={styles.AreaContentRight3}>
            05319369720 furkann.guler13@gmail.com
          </Text>
        </View>
        <View style={{ marginTop: 8 }}>
          <Text style={styles.AreaContentRight1}>Ahmet Kayacı</Text>
          <Text style={styles.AreaContentRight2}>
            Süleyman Demirel Üniversitesi, Isparta
          </Text>
          <Text style={styles.AreaContentRight3}>
            05319369720 furkann.guler13@gmail.com
          </Text>
        </View>
        {/* Hobi ve ilgi alanları */}
        <View wrap={false}>
          <Text style={styles.AreaTitle}>İlgi Alanları</Text>
          <View style={styles.PersonalDetailRow}>
            <Text style={styles.PersonalDetailRight}>Denizcilik</Text>
          </View>
        </View>
        <View style={styles.PersonalDetailRow}>
          <Text style={styles.PersonalDetailRight}>Doğa yürüyüş2</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Template3;
