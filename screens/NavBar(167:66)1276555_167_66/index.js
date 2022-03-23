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
      <View style={styles.View_167_67} />
      <View style={styles.View_167_68}>
        <View style={styles.View_167_69}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d61/236a/7f27e9d9bb53832c48f84632e4111613"
            }}
            style={styles.ImageBackground_167_70}
          />
        </View>
      </View>
      <View style={styles.View_167_73}>
        <View style={styles.View_167_74}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/161f/2bcc/922f7908c686d290b5e6fdcb15bb9346"
            }}
            style={styles.ImageBackground_167_75}
          />
        </View>
      </View>
      <View style={styles.View_167_80}>
        <View style={styles.View_167_81}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9789/23a6/d335c5defee02da3ddc25700315cfd2f"
            }}
            style={styles.ImageBackground_167_82}
          />
        </View>
      </View>
      <View style={styles.View_167_85}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/133a/3ef5/3c3fa226e5c5223a6176702d92394fde"
          }}
          style={styles.ImageBackground_167_86}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e23d/2ccb/121a22412ce388d9601089f6c72e18a1"
          }}
          style={styles.ImageBackground_167_87}
        />
      </View>
      <View style={styles.View_167_88}>
        <Text style={styles.Text_167_88}>DISCOVER</Text>
      </View>
      <View style={styles.View_167_89}>
        <Text style={styles.Text_167_89}>START ROOM</Text>
      </View>
      <View style={styles.View_167_90}>
        <Text style={styles.Text_167_90}>ONLINE NOW</Text>
      </View>
      <View style={styles.View_167_91}>
        <Text style={styles.Text_167_91}>PROFILE</Text>
      </View>
      <View style={styles.View_167_92}>
        <View style={styles.View_167_93}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58f/6f93/94d3e283c03fda61935aafb9ed2cd369"
            }}
            style={styles.ImageBackground_167_94}
          />
        </View>
        <View style={styles.View_167_96}>
          <Text style={styles.Text_167_96}>HOME</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_167_67: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(31, 53, 65, 1)"
  },
  View_167_68: {
    width: wp("9%"),
    height: hp("48%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_167_69: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%")
  },
  ImageBackground_167_70: {
    width: wp("7%"),
    height: hp("40%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_73: {
    width: wp("9%"),
    height: hp("48%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_167_74: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%")
  },
  ImageBackground_167_75: {
    width: wp("7%"),
    height: hp("40%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_80: {
    width: wp("9%"),
    height: hp("48%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_167_81: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%")
  },
  ImageBackground_167_82: {
    width: wp("7%"),
    height: hp("40%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_85: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("12%")
  },
  ImageBackground_167_86: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_167_87: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_167_88: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_167_88: {
    color: "rgba(84, 101, 110, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_89: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_167_89: {
    color: "rgba(84, 101, 110, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_90: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_167_90: {
    color: "rgba(84, 101, 110, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_91: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_167_91: {
    color: "rgba(84, 101, 110, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_92: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("12%")
  },
  View_167_93: {
    width: wp("9%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_167_94: {
    width: wp("7%"),
    height: hp("40%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_167_96: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_167_96: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
