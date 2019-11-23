import React, { Component } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";
import { Card } from "react-native-elements";
// import * as Colors from "../components/colors"; DOESNT WORK

// round 2

function _1HowWetCard() {
  return (
    // <Card
    //   title="#1 - How wet should the bedding be?"
    //   image={require("../shared/images/worm-bin2.jpg")}
    // >
    <React.Fragment>
      <Image style={{}} source={require("../raw-images/worm-bin.jpg")} />
      <Text>
        Worms need a moist environment. Too wet, and the bin becomes stinky and
        the worms might drown. Too dry, and the worms dehydrate, cannot breathe,
        can’t tunnel effectively, and will try to leave the bin. If they do
        leave the bin, they will dry out and die right outside the bin, usually
        within a foot or two.{" "}
      </Text>
      <Image style={{}} source={require("../raw-images/worm6.jpg")} />
      <Text>
        Water your bin weekly to re-hydrate your bin. Touch the bedding and test
        for sponge-ness. It should feel like a wet sponge - if you squeeze it,
        water comes out. To avoid water evaporating into the air, place a
        plastic trash bag (loosely) on the top of the surface. Don't seal it too
        tight as it may stop air flow. Another option is to use a piece of
        cardboard and provide daily sprays of water. The cardboard has better
        airflow, but requires more maintenance.{" "}
      </Text>
      <Text> Plastic bins rarely dry out, as water has no where to go.</Text>
    </React.Fragment>
  );
}
// const _1HowWetCard = `
// Worms need a moist environment. Too wet, and the bin becomes stinky and the worms might drown. Too dry, and the worms dehydrate, cannot breathe, can’t tunnel effectively, and will try to leave the bin. If they do leave the bin, they will dry out and die right outside the bin, usually within a foot or two.

// Water your bin weekly to re-hydrate your bin. Touch the bedding and test for sponge-ness. It should feel like a wet sponge - if you squeeze it, water comes out. To avoid water evaporating into the air, place a plastic trash bag (loosely) on the top of the surface. Don't seal it too tight as it may stop air flow. Another option is to use a piece of cardboard and provide daily sprays of water. The cardboard has better airflow, but requires more maintenance.

// Plastic bins rarely dry out, as water has no where to go.`;

const _2FeedingCard = `
Place the scraps in a shallow hole in which to bury them. Burying keeps pests from calling your worm bin home. Cut food scraps into pieces about 1 inch square or run it through a food processor. Hypothetically, worms can consume a whole cabbage head in a month. But shred the cabbage into pieces and they can consume it in a fraction of the time. 

Let your food scraps break down to make it easier/faster for your worms to digest. Mold generates a lot of 'heat'. Compost decomposes fastest between 120-160˚F. Decomposition will occur at lower temperatures, but it takes much longer. Additionally, the more you add to your pile at one time, the more it will heat up. In other words, one “super-sized” meal is better than several smaller snacks.

When burying, mark the spot so you can review it later. You can follow the 'baseball diamond' method: Identify a corner of your bin as first base, and go in a baseball diamond (second base, third base, fourth base...) Every week, add food scraps to a new base, while checking on the old base. 

A good process is (weekly): 
    * Take the scraps to the worm bin.
    * Gently use a trowel to create a hole to put the scraps into.
    * Throw in a small handful of shredded paper.
    * Add all the food scraps on top of the paper.
    * Cover ALL of the food scraps with dirt and moist paper. Exposed food attracts fruit flies, but covered food scraps don’t. Add dirt and moist paper to the bin until the worms have made enough compost to use to cover the food scraps.
    * Notice what the worms are eating and what they are not. Remove any scraps that your worms have not eaten for a while as they may not like that type of food (e.g., some worms will not tackle a whole potato or citrus rind, but may eat them if they are cut up).
    * Put the lid back on the worm bin.
    * Wash out the food scraps container for the coming week.`;

const _3SmellCard = `
A healthy worm bin has no foul odors. If you stick your face in your worm bin, it should have a earthy smell. Many vermicomposts are under kitchen sinks, in apartment buildings, schools, and office buildings and many would never know.

If there is a bad odor, it is usually an indication of anaerobic microbes, which are working hard to break down your compost, but creating a smelly situation in the process. Overall - it's too much food! Having too much food in your worm bin can push the air out. Simply remove any large pieces of food that the worms haven't go to yet. 

A bad odor may also occur if the worm bin is too wet. Gently "fluff" the bedding to increase air circulation and increase the space for your worm bin to dry out. 
`;

const _4ReproduceCard = `
If a worm dies in your bin, you probably will not notice it. Since the worm's body is about 90% water, it will shrivel up and become part of the compost rather quickly. New worms are born and others die all the time.

Worms are hermaphrodites, which means they are both male and female at the same time. In order to mate, they still require two worms. The worms line up in opposite directions near their band (or clitellum), which contains some of the sexual organs. The worms are attached for about 15 minutes while they exchange sperm cells. Several days later, eggs come in contact with the sperm cells and form a cocoon, or egg case. The cocoon separates from the worm, then fertilization takes place. Inside the cocoon, 2-5 baby worms may be found.

The baby worms live in the egg case for at least 3 weeks, sometimes longer depending on the surrounding conditions. For example, in the winter time, baby worms may stay in the cocoon for many weeks until the temperature warms up again. When the baby worms eventually crawl out, they are the thickness of a piece of thread and possibly 1 cm 1/4" long. Usually the worms appear white, as they have not yet developed pigmentation, or do not have enough pigmentation (or blood) to be seen.

A mature red wiggler (3 months old) can produce two to three cocoons per week. Each cocoon averages three hatchlings. Cocoons take up to 11 weeks to mature and hatch. Hatchlings require two to three months before they grow to be mature breeding worms.`;

const _5WinterCard = `
Just like people, composting worms have an ideal temperature range. The worm bin and bedding help regulate the temperature. When the air temperature is below 54 degrees Fahrenheit, worms slow down. Below freezing (32 degrees Fahrenheit) they can die. Above 84 degrees can cook the worms.

The ideal temperature range for a worm bin is between 55-77°F. 

Bin location is the primary issue. You can mitigate some of the temperature hazards using ice, bin blankets, insulation, relocation, and moisture regulation. You can also bring your bin inside during the winter. You can store your bin in the closet or somewhere out of harms way, and none will be the wiser. (there's no smell!)
`;

const _6AnythingElseCard = `
Worms need moisture, air, food, darkness, and warm (but not hot) temperatures. Bedding, made of newspaper strips or leaves, will hold moisture and contain air spaces essential to worms.

Redworms do best if the pH is around 7.0, but can tolerate levels from 4.2 to 8.0 or higher.

Worms will regulate their population to suit the environment (similar to wolves). If there is not enough food, the adults die off to make room for the babies.

If you see your worms wriggling away (literally outside of your worm farm), check your soil pH. An optimal pH for your farm should be between 6-7. ​There are a multitude of cheap and effective soil tester kits available these days for pH testing. You can source these from your local nursery or hardware store.

Worms hide from light. If you find your worms are escaping, put a light on the top of your bin.

Worms do not have teeth and cannot chew their food. They grind their food in their gizzard using muscle action and small bits of soil.`;

const _7HowToCompostCard = `
You can use your compost immediately, or you can store it and use it during the gardening season, or whenever. The compost can be directly mixed with your potting soil or garden soil as a soil amendment, which helps make nutrients available to plants. Or, the compost can be used as a top dressing for your indoor or outdoor plants.

You can also make "compost tea" with your compost. Simply add 1-2" of compost to your water can or rain barrel. Allow compost and water to "steep" for a day, mixing occasionally. Then water plants as you normally would. The resulting "tea" helps make nutrients already in the soil available to plants.`;

const _8HowMuchFoodCard = `
Enthusiastic worm bin owners toss every available scrap into the bin. The worms cannot keep up. The bin starts to smell terrible!

A rule of thumb: 1 lb of worms eats 0.5 lbs of food. However, that number change, depending on air temperature and other factors. A fool-proof method is to feed them every 2 to 3 days. Be conservative in the quantity. Following the 'Baseball Diamond' method should allow you to monitor your food distribution. They should start eating one feeding before you add another. An entire feeding should be completely gone in 1 to 2 weeks.`;

const _9DoIhaveHarvestCard = `
Avid gardeners eagerly look forward to removing finished compost from their worm bin. Fresh “black gold” is the best organic fertilizer to make plants grow. Gardeners mark the days until the worm castings are ready for harvesting.

However, non-gardeners typically focus on reducing trash and odor. For them, the worm castings are a side-effect. Their worm bin eventually fills up with worm castings. If there's too much worm casings, it can increase the pH levels and be toxic for the worms. 

Harvesting finished compost means separating worm castings from the worms. 

Good times to harvest compost are: at the start and end of the growing season; whenever it is getting full; as needed, if the worms have been in the bin for at least three months and there are extra worm castings inside
If you have more “black gold” than you need, donate it to a local gardening project or neighbor.`;

const _10LeaveWormsCard = `
If you need to go on vacation, don’t worry. Your worms can be left alone for about three to four weeks without any help. Before you leave, provide them with a freezer bag or two full of food scraps and distribute it evenly around the bin. If you’ll be gone longer, ask a friendly neighbor to feed the little guys once or twice and move things around. After such a long time without care there might be a slight smell to the bin. Follow the tips below to solve this.`;

const CONTENT = [
  { title: "#1 - How wet should the bedding be?", content: _1HowWetCard() },
  { title: "#2 - What is a good process for feeding?", content: _2FeedingCard },
  { title: "#3 - Is there a smell?", content: _3SmellCard },
  {
    title: "#4 - What happens when worms reproduce/die?",
    content: _4ReproduceCard
  },
  { title: "#5 - Can my worms survive in the winter?", content: _5WinterCard },
  {
    title: "#6 - Anything else I should know about worms?",
    content: _6AnythingElseCard
  },
  { title: "#7 - How do I use the compost?", content: _7HowToCompostCard },
  {
    title: "#8 - How much food should I give my worms?",
    content: _8HowMuchFoodCard
  },
  {
    title: "#9 - Do I have to harvest Worm Castings?",
    content: _9DoIhaveHarvestCard
  },
  { title: "#10 - Can I leave my worms alone?", content: _10LeaveWormsCard }
];

export default class QuestionsScreen extends Component {
  state = {
    activeSections: [],
    collapsed: true
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? "bounceIn" : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { activeSections } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
          {/* <Text style={styles.title}> Accordion Example </Text> */}

          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
          />
        </ScrollView>
      </View>
    );
  }
}

QuestionsScreen.navigationOptions = {
  title: "Common Questions"
};

// const color_bkgd = "#f3d3bd";
const color_tan = "#F3D3BD";
const color_beige = "#fcfaf9";
const color_grey = "#77878b";
const color_weirdgrey = "#305252";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color_beige,
    paddingTop: Constants.statusBarHeight
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 20
  },
  header: {
    backgroundColor: color_grey,
    padding: 10
  },
  headerText: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 2,
    marginBottom: 2
  },
  content: {
    padding: 20,
    backgroundColor: color_tan
  },
  active: {
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  inactive: {
    backgroundColor: "rgba(245, 252, 255, 1)"
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  selector: {
    backgroundColor: color_weirdgrey,
    padding: 10
  },
  activeSelector: {
    fontWeight: "bold"
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center"
  }
});
