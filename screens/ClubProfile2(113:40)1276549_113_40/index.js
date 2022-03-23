import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_113_41}>
        <View style={styles.View_I113_41_105_820}>
          <Text style={styles.Text_I113_41_105_820}>Following</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cd0/64b5/637ed82204783f571533721a7d4dd0b6"
        }}
        style={styles.ImageBackground_113_42}
      />
      <View style={styles.View_113_43}>
        <View style={styles.View_113_44}>
          <Text style={styles.Text_113_44}>COMMUNITY CLUB</Text>
        </View>
      </View>
      <View style={styles.View_113_45}>
        <Text style={styles.Text_113_45}>People</Text>
      </View>
      <View style={styles.View_113_46}>
        <Text style={styles.Text_113_46}>Rooms</Text>
      </View>
      <View style={styles.View_113_47}>
        <Text style={styles.Text_113_47}>Admins (1)</Text>
      </View>
      <View style={styles.View_113_48}>
        <Text style={styles.Text_113_48}>Members (50442)</Text>
      </View>
      <View style={styles.View_113_49}>
        <Text style={styles.Text_113_49}>
          Admins can choose who to invite, add members, and start public
          Club-branded rooms
        </Text>
      </View>
      <View style={styles.View_113_50}>
        <Text style={styles.Text_113_50}>
          Members can nominate people to join Club and start private
          Club-branded rooms.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01d5/362b/efb193e292fa293aaa82b1740d7c36ff"
        }}
        style={styles.ImageBackground_113_51}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5630/465a/e512205cbeccf78ade4e752b67a14ec0"
        }}
        style={styles.ImageBackground_113_52}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a369/f023/8dcc5a3420549debfdfe4c0451f7ee99"
        }}
        style={styles.ImageBackground_113_53}
      />
      <View style={styles.View_113_54}>
        <Text style={styles.Text_113_54}>Shay Hemmingway</Text>
      </View>
      <View style={styles.View_113_55}>
        <Text style={styles.Text_113_55}>David Shapiro</Text>
      </View>
      <View style={styles.View_113_56}>
        <Text style={styles.Text_113_56}>Vishal Alan</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6270/115e/cb70ad61ed38b8cf5266bc2189770651"
        }}
        style={styles.ImageBackground_155_1523}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd64/2052/808c6798b7429cf8204090f564fe7eaf"
        }}
        style={styles.ImageBackground_155_1525}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(1, 26, 40, 1)" },
  View_2: { height: hp("100%") },
  View_113_41: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("37%"),
    backgroundColor: "rgba(252, 248, 238, 1)"
  },
  View_I113_41_105_820: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I113_41_105_820: {
    color: "rgba(1, 26, 40, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_42: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("12%"),
    resizeMode: "cover"
  },
  View_113_43: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_44: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_113_44: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_45: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_113_45: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_46: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_113_46: {
    color: "rgba(223, 225, 226, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_47: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_113_47: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_48: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("77%"),
    justifyContent: "flex-start"
  },
  Text_113_48: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_49: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("60%"),
    justifyContent: "flex-start"
  },
  Text_113_49: {
    color: "rgba(182, 189, 193, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_50: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("82%"),
    justifyContent: "flex-start"
  },
  Text_113_50: {
    color: "rgba(182, 189, 193, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_51: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("67%")
  },
  ImageBackground_113_52: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("89%")
  },
  ImageBackground_113_53: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("96%")
  },
  View_113_54: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_113_54: {
    color: "rgba(223, 225, 226, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_55: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_113_55: {
    color: "rgba(223, 225, 226, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_56: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_113_56: {
    color: "rgba(223, 225, 226, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_155_1523: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_155_1525: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
