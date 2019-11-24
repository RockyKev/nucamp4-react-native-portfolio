import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";

import * as Animatable from "react-native-animatable";
import { Card } from "react-native-elements";

function _1HowWetCard() {
  return (
    <Card
      style={styles.card}
      title="#1 - How wet should the bedding be?"
      image={require("../shared/images/worm-dirt.jpg")}
    >
      <Text style={styles.paragraph}>
        Worms need a moist environment. Too wet, and the bin becomes stinky and
        the worms might drown. Too dry, and the worms dehydrate, cannot breathe,
        can’t tunnel effectively, and will try to leave the bin. If they do
        leave the bin, they will dry out and die right outside the bin, usually
        within a foot or two. {"\n"} {"\n"}
        Water your bin weekly to re-hydrate your bin. Touch the bedding and test
        for sponge-ness. It should feel like a wet sponge - if you squeeze it,
        water comes out. To avoid water evaporating into the air, place a
        plastic trash bag (loosely) on the top of the surface. Don't seal it too
        tight as it may stop air flow. Another option is to use a piece of
        cardboard and provide daily sprays of water. The cardboard has better
        airflow, but requires more maintenance. {"\n"} {"\n"}
        Plastic bins rarely dry out, as water has no where to go.
      </Text>
    </Card>
  );
}

function _2FeedingCard() {
  return (
    <Card
      title="#2 - What is a good process for feeding?"
      image={require("../shared/images/worm3.jpg")}
    >
      <Text style={styles.paragraph}>
        Place the scraps in a shallow hole in which to bury them. Burying keeps
        pests from calling your worm bin home. Cut food scraps into pieces about
        1 inch square or run it through a food processor. Hypothetically, worms
        can consume a whole cabbage head in a month. But shred the cabbage into
        pieces and they can consume it in a fraction of the time. {"\n"} {"\n"}
        Let your food scraps break down to make it easier/faster for your worms
        to digest. Mold generates a lot of 'heat'. Compost decomposes fastest
        between 120-160˚F. Decomposition will occur at lower temperatures, but
        it takes much longer. {"\n"} {"\n"}Additionally, the more you add to
        your pile at one time, the more it will heat up. In other words, one
        “super-sized” meal is better than several smaller snacks.{"\n"} {"\n"}
        When burying, mark the spot so you can review it later. You can follow
        the 'baseball diamond' method: Identify a corner of your bin as first
        base, and go in a baseball diamond (second base, third base, fourth
        base...) Every week, add food scraps to a new base, while checking on
        the old base. {"\n"} {"\n"}A good process is (weekly): {"\n"}
        <Text style={styles.list}>
          {"\u2022"}Take the scraps to the worm bin.{"\n"}
          {"\u2022"}Gently use a trowel to create a hole to put the scraps into.
          {"\n"}
          {"\u2022"}Throw in a small handful of shredded paper.{"\n"}
          {"\u2022"}Add all the food scraps on top of the paper.{"\n"}
          {"\u2022"}Cover ALL of the food scraps with dirt and moist paper.
          Exposed food attracts fruit flies, but covered food scraps don’t. Add
          dirt and moist paper to the bin until the worms have made enough
          compost to use to cover the food scraps.{"\n"}
          {"\u2022"}Notice what the worms are eating and what they are not.
          Remove any scraps that your worms have not eaten for a while as they
          may not like that type of food (e.g., some worms will not tackle a
          whole potato or citrus rind, but may eat them if they are cut up).
          {"\n"}
          {"\u2022"}Put the lid back on the worm bin.{"\n"}
          {"\u2022"}Wash out the food scraps container for the coming week.
          {"\n"}
        </Text>
      </Text>
    </Card>
  );
}

function _3SmellCard() {
  return (
    <Card
      title="#3 - Is there a smell?"
      image={require("../shared/images/garden.jpg")}
    >
      <Text style={styles.paragraph}>
        A healthy worm bin has no foul odors. If you stick your face in your
        worm bin, it should have a earthy smell. Many vermicomposts are under
        kitchen sinks, in apartment buildings, schools, and office buildings and
        many would never know.{"\n"} {"\n"}
        If there is a bad odor, it is usually an indication of anaerobic
        microbes, which are working hard to break down your compost, but
        creating a smelly situation in the process. Overall - it's too much
        food! Having too much food in your worm bin can push the air out. Simply
        remove any large pieces of food that the worms haven't go to yet. {
          "\n"
        }{" "}
        {"\n"}A bad odor may also occur if the worm bin is too wet. Gently
        "fluff" the bedding to increase air circulation and increase the space
        for your worm bin to dry out.
      </Text>
    </Card>
  );
}

function _4ReproduceCard() {
  return (
    <Card
      title="#4 - What happens when worms reproduce/die?"
      image={require("../shared/images/worm-pregnant.jpg")}
    >
      <Text style={styles.paragraph}>
        If a worm dies in your bin, you probably will not notice it. Since the
        worm's body is about 90% water, it will shrivel up and become part of
        the compost rather quickly. New worms are born and others die all the
        time.{"\n"} {"\n"}
        Worms are hermaphrodites, which means they are both male and female at
        the same time. In order to mate, they still require two worms. The worms
        line up in opposite directions near their band (or clitellum), which
        contains some of the sexual organs. The worms are attached for about 15
        minutes while they exchange sperm cells. Several days later, eggs come
        in contact with the sperm cells and form a cocoon, or egg case. The
        cocoon separates from the worm, then fertilization takes place. Inside
        the cocoon, 2-5 baby worms may be found.{"\n"} {"\n"}
        The baby worms live in the egg case for at least 3 weeks, sometimes
        longer depending on the surrounding conditions. For example, in the
        winter time, baby worms may stay in the cocoon for many weeks until the
        temperature warms up again. When the baby worms eventually crawl out,
        they are the thickness of a piece of thread and possibly 1 cm 1/4" long.
        Usually the worms appear white, as they have not yet developed
        pigmentation, or do not have enough pigmentation (or blood) to be seen.
        {"\n"} {"\n"}A mature red wiggler (3 months old) can produce two to
        three cocoons per week. Each cocoon averages three hatchlings. Cocoons
        take up to 11 weeks to mature and hatch. Hatchlings require two to three
        months before they grow to be mature breeding worms.
      </Text>
    </Card>
  );
}

function _5WinterCard() {
  return (
    <Card
      title="#5 - Can my worms survive in the winter?"
      image={require("../shared/images/worm6.jpg")}
    >
      <Text style={styles.paragraph}>
        Just like people, composting worms have an ideal temperature range. The
        worm bin and bedding help regulate the temperature. When the air
        temperature is below 54 degrees Fahrenheit, worms slow down. Below
        freezing (32 degrees Fahrenheit) they can die. Above 84 degrees can cook
        the worms.{"\n"} {"\n"}
        The ideal temperature range for a worm bin is between 55-77°F.
        {"\n"}
        {"\n"}
        Bin location is the primary issue. You can mitigate some of the
        temperature hazards using ice, bin blankets, insulation, relocation, and
        moisture regulation. You can also bring your bin inside during the
        winter. You can store your bin in the closet or somewhere out of harms
        way, and none will be the wiser. (there's no smell!)
      </Text>
    </Card>
  );
}

function _6AnythingElseCard() {
  return (
    <Card
      title="#6 - Anything else I should know about worms?"
      image={require("../shared/images/worm5.jpg")}
    >
      <Text style={styles.paragraph}>
        Worms need moisture, air, food, darkness, and warm (but not hot)
        temperatures. Bedding, made of newspaper strips or leaves, will hold
        moisture and contain air spaces essential to worms. {"\n"}
        {"\n"}
        Redworms do best if the pH is around 7.0, but can tolerate levels from
        4.2 to 8.0 or higher. {"\n"}
        {"\n"}
        Worms will regulate their population to suit the environment (similar to
        wolves). If there is not enough food, the adults die off to make room
        for the babies. {"\n"}
        {"\n"}
        If you see your worms wriggling away (literally outside of your worm
        farm), check your soil pH. An optimal pH for your farm should be between
        6-7. ​There are a multitude of cheap and effective soil tester kits
        available these days for pH testing. You can source these from your
        local nursery or hardware store.{"\n"}
        {"\n"}
        Worms hide from light. If you find your worms are escaping, put a light
        on the top of your bin. Worms do not have teeth and cannot chew their
        food. They grind their food in their gizzard using muscle action and
        small bits of soil.
      </Text>
    </Card>
  );
}

function _7HowToCompostCard() {
  return (
    <Card
      title="#7 - How do I use the compost?"
      image={require("../shared/images/worm4.jpg")}
    >
      <Text style={styles.paragraph}>
        You can use your compost immediately, or you can store it and use it
        during the gardening season, or whenever. The compost can be directly
        mixed with your potting soil or garden soil as a soil amendment, which
        helps make nutrients available to plants. Or, the compost can be used as
        a top dressing for your indoor or outdoor plants.{"\n"} {"\n"}
        You can also make "compost tea" with your compost. Simply add 1-2" of
        compost to your water can or rain barrel. Allow compost and water to
        "steep" for a day, mixing occasionally. Then water plants as you
        normally would. The resulting "tea" helps make nutrients already in the
        soil available to plants.
      </Text>
    </Card>
  );
}

function _8HowMuchFoodCard() {
  return (
    <Card
      title="#8 - How much food should I give my worms?"
      image={require("../shared/images/worm3.jpg")}
    >
      <Text style={styles.paragraph}>
        Enthusiastic worm bin owners toss every available scrap into the bin.
        The worms cannot keep up. The bin starts to smell terrible! {"\n"}{" "}
        {"\n"}A rule of thumb: 1 lb of worms eats 0.5 lbs of food. However, that
        number change, depending on air temperature and other factors. A
        fool-proof method is to feed them every 2 to 3 days. Be conservative in
        the quantity. Following the 'Baseball Diamond' method should allow you
        to monitor your food distribution. They should start eating one feeding
        before you add another. An entire feeding should be completely gone in 1
        to 2 weeks.
      </Text>
    </Card>
  );
}

function _9DoIhaveHarvestCard() {
  return (
    <Card
      title="#9 - Do I have to harvest Worm Castings?"
      image={require("../shared/images/worm-harvest.jpg")}
    >
      <Text style={styles.paragraph}>
        Avid gardeners eagerly look forward to removing finished compost from
        their worm bin. Fresh “black gold” is the best organic fertilizer to
        make plants grow. Gardeners mark the days until the worm castings are
        ready for harvesting.{"\n"} {"\n"}
        However, non-gardeners typically focus on reducing trash and odor. For
        them, the worm castings are a side-effect. Their worm bin eventually
        fills up with worm castings. If there's too much worm casings, it can
        increase the pH levels and be toxic for the worms. {"\n"} {"\n"}
        Harvesting finished compost means separating worm castings from the
        worms. Good times to harvest compost are: at the start and end of the
        growing season; whenever it is getting full; as needed, if the worms
        have been in the bin for at least three months and there are extra worm
        castings inside. {"\n"} {"\n"}
        If you have more “black gold” than you need, donate it to a local
        gardening project or neighbor.
      </Text>
    </Card>
  );
}

function _10LeaveWormsCard() {
  return (
    <Card
      title="#10 - Can I leave my worms alone?"
      image={require("../shared/images/worm-bin2.jpg")}
    >
      <Text style={styles.paragraph}>
        If you need to go on vacation, don’t worry. Your worms can be left alone
        for about three to four weeks without any help. Before you leave,
        provide them with a freezer bag or two full of food scraps and
        distribute it evenly around the bin. If you’ll be gone longer, ask a
        friendly neighbor to feed the little guys once or twice and move things
        around. After such a long time without care there might be a slight
        smell to the bin. Follow the tips below to solve this.
      </Text>
    </Card>
  );
}

export default function QuestionsScreen() {
  return (
    <View style={styles.container}>
      {console.log("In Questions Screen")}

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.container}>
          <_1HowWetCard />
          <_2FeedingCard />
          <_3SmellCard />
          <_4ReproduceCard />
          <_5WinterCard />
          <_6AnythingElseCard />
          <_7HowToCompostCard />
          <_8HowMuchFoodCard />
          <_9DoIhaveHarvestCard />
          <_10LeaveWormsCard />
        </View>
      </ScrollView>
    </View>
  );
}

QuestionsScreen.navigationOptions = {
  title: "Common Questions Screen"
};

// const color_bkgd = "#f3d3bd";
const color_tan = "#F3D3BD";
const color_beige = "#fcfaf9";
const color_grey = "#77878b";
const color_weirdgrey = "#305252";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color_tan
  },
  card: {
    fontSize: 24,
    backgroundColor: color_grey
  },

  textGold: {
    fontWeight: "bold",
    color: "gold"
  },
  textBold: {
    fontWeight: "bold"
  },
  paragraph: {
    margin: 5,
    lineHeight: 16,
    backgroundColor: color_beige
  },
  list: {
    paddingLeft: 40
  }
});
