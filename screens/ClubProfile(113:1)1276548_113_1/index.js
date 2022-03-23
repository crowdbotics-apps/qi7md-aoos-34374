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
      <View style={styles.View_113_2}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99fc/4398/8aee13da5031d6962adf97ba9e6aafe1"
          }}
          style={styles.ImageBackground_113_3}
        />
        <View style={styles.View_113_4}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/283c/a745/899b0cce357289e3b5b301e587419859"
            }}
            style={styles.ImageBackground_113_5}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/283c/a745/899b0cce357289e3b5b301e587419859"
            }}
            style={styles.ImageBackground_113_6}
          />
          <View style={styles.View_113_7}>
            <View style={styles.View_113_8}>
              <Text style={styles.Text_113_8}>Moderated by:</Text>
            </View>
            <View style={styles.View_113_9}>
              <Text style={styles.Text_113_9}>Shay Hemmingway,</Text>
            </View>
            <View style={styles.View_113_10}>
              <Text style={styles.Text_113_10}>Antonio X,</Text>
            </View>
            <View style={styles.View_113_11}>
              <Text style={styles.Text_113_11}>Jamila Pierre, </Text>
            </View>
            <View style={styles.View_113_12}>
              <Text style={styles.Text_113_12}>Ed</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_113_13}>
          <Text style={styles.Text_113_13}>
            Our weekly series w/ LinkedIn experts to help you build a thought
            leadership brand with strong organic growth. Bring a friend!
          </Text>
        </View>
        <View style={styles.View_113_14}>
          <View style={styles.View_113_15}>
            <View style={styles.View_113_16}>
              <Text style={styles.Text_113_16}>Welcome to Clubhouse! 🎉</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_113_17}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c425/7548/df448cced904bfdfbc6b9c9549c2be98"
            }}
            style={styles.ImageBackground_113_18}
          />
          <View style={styles.View_113_23}>
            <Text style={styles.Text_113_23}>261</Text>
          </View>
        </View>
        <View style={styles.View_113_24}>
          <Text style={styles.Text_113_24}>TOMORROW, 9:00 AM</Text>
        </View>
      </View>
      <View style={styles.View_113_25}>
        <View style={styles.View_I113_25_105_820}>
          <Text style={styles.Text_I113_25_105_820}>Following</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cd0/64b5/637ed82204783f571533721a7d4dd0b6"
        }}
        style={styles.ImageBackground_113_26}
      />
      <View style={styles.View_113_27}>
        <View style={styles.View_113_28}>
          <Text style={styles.Text_113_28}>COMMUNITY CLUB</Text>
        </View>
      </View>
      <View style={styles.View_113_29}>
        <Text style={styles.Text_113_29}>People</Text>
      </View>
      <View style={styles.View_113_30}>
        <Text style={styles.Text_113_30}>Rooms</Text>
      </View>
      <View style={styles.View_113_31}>
        <View style={styles.View_113_32}>
          <Text style={styles.Text_113_32}>Upcoming</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3821/f552/335eea430e7144f9620f2426dc349ec2"
          }}
          style={styles.ImageBackground_113_33}
        />
      </View>
      <View style={styles.View_113_151}>
        <View style={styles.View_113_152}>
          <View style={styles.View_113_153}>
            <View style={styles.View_113_154} />
          </View>
          <View style={styles.View_113_155}>
            <Text style={styles.Text_113_155}>Cancel</Text>
          </View>
        </View>
        <View style={styles.View_113_156}>
          <View style={styles.View_113_157}>
            <View style={styles.View_113_158} />
          </View>
          <View style={styles.View_113_159}>
            <Text style={styles.Text_113_159}>Past (113)</Text>
          </View>
        </View>
        <View style={styles.View_113_160}>
          <View style={styles.View_113_161}>
            <View style={styles.View_113_162} />
          </View>
          <View style={styles.View_113_163}>
            <Text style={styles.Text_113_163}>Recurring (4)</Text>
          </View>
        </View>
        <View style={styles.View_113_164}>
          <View style={styles.View_113_165}>
            <View style={styles.View_113_166} />
          </View>
          <View style={styles.View_113_167}>
            <Text style={styles.Text_113_167}>Upcoming (6)</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6270/115e/cb70ad61ed38b8cf5266bc2189770651"
        }}
        style={styles.ImageBackground_155_1517}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd64/2052/808c6798b7429cf8204090f564fe7eaf"
        }}
        style={styles.ImageBackground_155_1519}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(1, 26, 40, 1)" },
  View_2: { height: hp("100%") },
  View_113_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58%")
  },
  ImageBackground_113_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_4: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("11%")
  },
  ImageBackground_113_5: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_113_6: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_113_7: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_113_8: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_113_8: {
    color: "rgba(182, 189, 193, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_9: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_113_9: {
    color: "rgba(223, 225, 226, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_10: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_113_10: {
    color: "rgba(223, 225, 226, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_11: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_113_11: {
    color: "rgba(223, 225, 226, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_12: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_113_12: {
    color: "rgba(223, 225, 226, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_13: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_113_13: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_14: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_15: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_16: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_113_16: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_17: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%")
  },
  ImageBackground_113_18: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_113_23: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_113_23: {
    color: "rgba(115, 134, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_24: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_113_24: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_25: {
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
  View_I113_25_105_820: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I113_25_105_820: {
    color: "rgba(1, 26, 40, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_26: {
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
  View_113_27: {
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
  View_113_28: {
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
  Text_113_28: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_29: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_113_29: {
    color: "rgba(223, 225, 226, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_30: {
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
  Text_113_30: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_113_31: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("54%")
  },
  View_113_32: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_113_32: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_113_33: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_113_151: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("62%")
  },
  View_113_152: {
    width: wp("96%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(69, 82, 89, 1)"
  },
  View_113_153: {
    width: wp("96%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_154: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(17, 17, 17, 1)",
    opacity: 0.5
  },
  View_113_155: {
    flexGrow: 1,
    width: wp("90%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_113_155: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_113_156: {
    width: wp("96%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(69, 82, 89, 1)"
  },
  View_113_157: {
    width: wp("96%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_158: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(17, 17, 17, 1)",
    opacity: 0.5
  },
  View_113_159: {
    flexGrow: 1,
    width: wp("90%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_113_159: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_113_160: {
    width: wp("96%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(69, 82, 89, 1)"
  },
  View_113_161: {
    width: wp("96%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_162: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(17, 17, 17, 1)",
    opacity: 0.5
  },
  View_113_163: {
    flexGrow: 1,
    width: wp("90%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_113_163: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_113_164: {
    width: wp("96%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 101, 110, 1)"
  },
  View_113_165: {
    width: wp("96%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_113_166: {
    flexGrow: 1,
    width: wp("96%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(17, 17, 17, 1)",
    opacity: 0.5
  },
  View_113_167: {
    flexGrow: 1,
    width: wp("90%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_113_167: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  ImageBackground_155_1517: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_155_1519: {
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
