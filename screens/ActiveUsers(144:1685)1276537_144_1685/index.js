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
      <View style={styles.View_144_1688}>
        <Text style={styles.Text_144_1688}>Available to Chat</Text>
      </View>
      <View style={styles.View_144_1702}>
        <View style={styles.View_I144_1702_105_196} />
        <View style={styles.View_I144_1702_105_328}>
          <View style={styles.View_I144_1702_105_328_105_310}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d61/236a/7f27e9d9bb53832c48f84632e4111613"
              }}
              style={styles.ImageBackground_I144_1702_105_328_105_311}
            />
          </View>
        </View>
        <View style={styles.View_I144_1702_105_379}>
          <View style={styles.View_I144_1702_105_379_105_373}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/161f/2bcc/922f7908c686d290b5e6fdcb15bb9346"
              }}
              style={styles.ImageBackground_I144_1702_105_379_105_374}
            />
          </View>
        </View>
        <View style={styles.View_I144_1702_105_323}>
          <View style={styles.View_I144_1702_105_323_105_302}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9789/23a6/d335c5defee02da3ddc25700315cfd2f"
              }}
              style={styles.ImageBackground_I144_1702_105_323_105_303}
            />
          </View>
        </View>
        <View style={styles.View_I144_1702_105_320}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d58f/6f93/94d3e283c03fda61935aafb9ed2cd369"
            }}
            style={styles.ImageBackground_I144_1702_105_320_105_307}
          />
        </View>
        <View style={styles.View_I144_1702_105_390}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/133a/3ef5/3c3fa226e5c5223a6176702d92394fde"
            }}
            style={styles.ImageBackground_I144_1702_105_387}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e23d/2ccb/121a22412ce388d9601089f6c72e18a1"
            }}
            style={styles.ImageBackground_I144_1702_105_389}
          />
        </View>
      </View>
      <View style={styles.View_144_1703}>
        <Text style={styles.Text_144_1703}>Sort by: LISTENING NOW</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3821/f552/335eea430e7144f9620f2426dc349ec2"
        }}
        style={styles.ImageBackground_144_1704}
      />
      <View style={styles.View_144_1808}>
        <View style={styles.View_I144_1808_2_49} />
        <View style={styles.View_I144_1808_2_50}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5b8/fc23/70c4a1f542c0310add78b549f6f9c4e1"
            }}
            style={styles.ImageBackground_I144_1808_2_51}
          />
          <View style={styles.View_I144_1808_2_54}>
            <Text style={styles.Text_I144_1808_2_54}>
              Search by person or club name
            </Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aedf/cf3e/00e18158a42b9e4c46d0ed420d9f63cb"
        }}
        style={styles.ImageBackground_144_1858}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f395/088f/d6c629cf6493c65f55f5cb1d17ef2d04"
        }}
        style={styles.ImageBackground_144_1859}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30ba/02c1/de743a032b8600529e6e3a6ff5a6c0c8"
        }}
        style={styles.ImageBackground_144_1860}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30ba/02c1/de743a032b8600529e6e3a6ff5a6c0c8"
        }}
        style={styles.ImageBackground_144_1861}
      />
      <View style={styles.View_144_1863}>
        <Text style={styles.Text_144_1863}>Hope</Text>
      </View>
      <View style={styles.View_144_1871}>
        <Text style={styles.Text_144_1871}>Lily</Text>
      </View>
      <View style={styles.View_144_1875}>
        <Text style={styles.Text_144_1875}>Tobi</Text>
      </View>
      <View style={styles.View_144_1877}>
        <Text style={styles.Text_144_1877}>Ed</Text>
      </View>
      <View style={styles.View_144_1864}>
        <Text style={styles.Text_144_1864}>CH (unofficial) Hackathon</Text>
      </View>
      <View style={styles.View_144_1872}>
        <Text style={styles.Text_144_1872}>Latino Meet Up 🔥</Text>
      </View>
      <View style={styles.View_144_1876}>
        <Text style={styles.Text_144_1876}>Black Men Meditate</Text>
      </View>
      <View style={styles.View_144_1878}>
        <Text style={styles.Text_144_1878}>Startup Pitch Practice</Text>
      </View>
      <View style={styles.View_144_1833}>
        <View style={styles.View_144_1834}>
          <View style={styles.View_144_1835}>
            <View style={styles.View_144_1836} />
          </View>
          <View style={styles.View_144_1837}>
            <Text style={styles.Text_144_1837}>Cancel</Text>
          </View>
        </View>
        <View style={styles.View_144_1838}>
          <View style={styles.View_144_1839}>
            <View style={styles.View_144_1840} />
          </View>
          <View style={styles.View_144_1841}>
            <Text style={styles.Text_144_1841}>Z-A</Text>
          </View>
        </View>
        <View style={styles.View_144_1850}>
          <View style={styles.View_144_1851}>
            <View style={styles.View_144_1852} />
          </View>
          <View style={styles.View_144_1853}>
            <Text style={styles.Text_144_1853}>Speaking now</Text>
          </View>
        </View>
        <View style={styles.View_144_1854}>
          <View style={styles.View_144_1855}>
            <View style={styles.View_144_1856} />
          </View>
          <View style={styles.View_144_1857}>
            <Text style={styles.Text_144_1857}>Listening now</Text>
          </View>
        </View>
        <View style={styles.View_144_1842}>
          <View style={styles.View_144_1843}>
            <View style={styles.View_144_1844} />
          </View>
          <View style={styles.View_144_1845}>
            <Text style={styles.Text_144_1845}>A-Z</Text>
          </View>
        </View>
        <View style={styles.View_144_1846}>
          <View style={styles.View_144_1847}>
            <View style={styles.View_144_1848} />
          </View>
          <View style={styles.View_144_1849}>
            <Text style={styles.Text_144_1849}>All</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_157_1547}>
        <View style={styles.View_I157_1547_105_315}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9bc/6ab4/eeeb106d88ddfc5f396c970254198f49"
            }}
            style={styles.ImageBackground_I157_1547_105_316}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(1, 26, 40, 1)" },
  View_2: { height: hp("102%") },
  View_144_1688: {
    width: wp("70%"),
    minWidth: wp("70%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_144_1688: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_1702: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_1702_105_196: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(31, 53, 65, 1)"
  },
  View_I144_1702_105_328: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_1702_105_328_105_310: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I144_1702_105_328_105_311: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I144_1702_105_379: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_1702_105_379_105_373: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I144_1702_105_379_105_374: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I144_1702_105_323: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_1702_105_323_105_302: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I144_1702_105_323_105_303: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I144_1702_105_320: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I144_1702_105_320_105_307: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I144_1702_105_390: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I144_1702_105_387: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I144_1702_105_389: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_144_1703: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_144_1703: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_144_1704: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  View_144_1808: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I144_1808_2_49: {
    flexGrow: 1,
    width: wp("75%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(31, 53, 65, 1)"
  },
  View_I144_1808_2_50: {
    flexGrow: 1,
    width: wp("60%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  ImageBackground_I144_1808_2_51: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I144_1808_2_54: {
    width: wp("54%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I144_1808_2_54: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_144_1858: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("34%")
  },
  ImageBackground_144_1859: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("43%")
  },
  ImageBackground_144_1860: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("52%")
  },
  ImageBackground_144_1861: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("61%")
  },
  View_144_1863: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_144_1863: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_1871: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_144_1871: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_1875: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_144_1875: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_1877: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("60%"),
    justifyContent: "flex-start"
  },
  Text_144_1877: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_1864: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_144_1864: {
    color: "rgba(223, 225, 226, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_1872: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_144_1872: {
    color: "rgba(223, 225, 226, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_1876: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_144_1876: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_1878: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_144_1878: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_1833: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_1834: {
    width: wp("96%"),
    height: hp("8%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    backgroundColor: "rgba(69, 82, 89, 1)"
  },
  View_144_1835: {
    width: wp("96%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_1836: {
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
  View_144_1837: {
    flexGrow: 1,
    width: wp("90%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_144_1837: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_144_1838: {
    width: wp("96%"),
    height: hp("8%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(69, 82, 89, 1)"
  },
  View_144_1839: {
    width: wp("96%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_1840: {
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
  View_144_1841: {
    flexGrow: 1,
    width: wp("90%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_144_1841: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_144_1850: {
    width: wp("96%"),
    height: hp("8%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(69, 82, 89, 1)"
  },
  View_144_1851: {
    width: wp("96%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_1852: {
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
  View_144_1853: {
    flexGrow: 1,
    width: wp("90%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_144_1853: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_144_1854: {
    width: wp("96%"),
    height: hp("8%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(84, 101, 110, 1)"
  },
  View_144_1855: {
    width: wp("96%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_1856: {
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
  View_144_1857: {
    flexGrow: 1,
    width: wp("90%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_144_1857: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_144_1842: {
    width: wp("96%"),
    height: hp("8%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(69, 82, 89, 1)"
  },
  View_144_1843: {
    width: wp("96%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_1844: {
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
  View_144_1845: {
    flexGrow: 1,
    width: wp("90%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_144_1845: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_144_1846: {
    width: wp("96%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(69, 82, 89, 1)"
  },
  View_144_1847: {
    width: wp("96%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_1848: {
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
  View_144_1849: {
    flexGrow: 1,
    width: wp("90%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_144_1849: {
    color: "rgba(252, 248, 238, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_157_1547: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I157_1547_105_315: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I157_1547_105_316: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
