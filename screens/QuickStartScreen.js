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

const DATA = [
  {
    id: "0",
    title: "First Item",
    description: "blah blah blah blah blah",
    image: "../shared/snakeworm.jpg"
  },
  {
    id: "1",
    title: "Second Item",
    description: "blah blah blah blah blah",
    image: "../shared/snakeworm.jpg"
  },
  {
    id: "2",
    title: "Third Item",
    description: "blah blah blah blah blah",
    image: "../shared/snakeworm.jpg"
  }
];

function VermicompostCard() {
  return (
    <Card
      title="What is Vermicomposting?"
      image={require("../shared/images/worm-compost.jpg")}
    >
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        <Text style={styles.textBold}>Vermicomposting</Text> is a bio-friendly
        method of using red worms to recycle food scraps and other organic
        material into a valuable soil amendment called vermicompost, or worm
        casts. {"\n"} {"\n"}
        Worms are eating nutrient-rich fruit and vegetable scraps, and turning
        them into nutrient-rich compost. The casts are rich in nutrients and
        growth promoting substances that worm compost is frequently called
        <Text style={styles.textGold}>'Black Gold'.</Text>
        {"\n"} {"\n"}
        <Text style={styles.textBold}>Vermicomposting</Text> can be done in
        small apartment, a regular-sized house, or even for major buildings.
        When done correctly, unlike regular composting, there's no smell and
        minimal maintenance. {"\n"} {"\n"}
        With a little effort, the recycling of vegetable scraps and brown
        material (like newspaper and cardboard) can produce incredibly rich
        Organic fertilizer that outperforms chemical fertilization every time.
        Not only is it priceless, but it is also profitable! It is so valuable
        and nutritional for gardening and crop growing that you can find people
        to buy from you fairly easily.
      </Text>
    </Card>
  );
}

function BlackGoldCard() {
  return (
    <Card title="Black Gold?" image={require("../shared/images/garden.jpg")}>
      <Text style={styles.paragraph}>
        Vermicomposting, or worm composting, turns kitchen scraps and other
        green waste into a rich, dark soil that smells like earth and feels like
        magic. Made of almost pure worm castings, it's a sort of super compost.{" "}
        {"\n"} {"\n"}
        The casts are rich in nutrients, growth promoting substances, beneficial
        soil micro flora and having properties of inhibiting pathogenic
        microbes. {"\n"} {"\n"}
        Vermicompost is stable, fine granular organic manure, which enriches
        soil quality by improving its physicochemical and biological properties.
        It is highly useful in raising seedlings and for crop production.
        Vermicompost is becoming popular as a major component of organic farming
        system.
      </Text>
    </Card>
  );
}
function UsingWormsCard() {
  return (
    <Card title="Using Worms" image={require("../shared/images/worm3.jpg")}>
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        The key of Vermicomposting is using red worms or red wigglers in the
        worm bin, as they can consume waste quickly. The scientific name for the
        two commonly used red worms are Eisenia foetida and Lumbricus rubellus.
        They should not be confused with fishing worms. Red Wigglers can be
        ordered from a worm farm, and are safe to mail online. {"\n"} {"\n"}
        You'll need about 1 pound of red worms. Worms can live for about one
        year in the worm bin. They can also reproduce at a rate of two to three
        cocoons per week, with each cocoon averaging three hatchlings.
      </Text>
    </Card>
  );
}

function WormBinCard() {
  return (
    <Card
      title="Setting up a Worm Bin"
      image={require("../shared/images/worm-bin.jpg")}
    >
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        You can start your own Vermicomposting by buying a professionally made
        Worm Bin, or build your own with a storage container or bucket. You can
        check out youtube videos to see how. {"\n"} {"\n"}
        Some key elements for your Worm Bin are: {"\n"}
        <Text style={styles.list}>
          {"\u2022"}Air holes: It can get stuffy and hot in the bin. Be sure to
          have good air flow so the worms can breathe.{"\n"}
          {"\u2022"}Wet bedding: worms need their bedding to be wet to be able
          to move around. If it's too dry, the worms will suffer and start to
          die. If it's too wet, the worms will drown. Professionally made worm
          bins have a spigot at the bottom to extract water. {"\n"}
          {"\u2022"}Spigot: While not necessary, having a spigot allows you to
          release the water at the bottom of your bin. Alternative options
          include using a turkey baster to suck water up every few days. You
          don't want the bottom of your bin to be soaking wet.{"\n"}
          {"\u2022"}Multiple tiers: Most modern worm bins follow a 2 or 3-tier
          system. Imagine two storage boxes that fit inside each other. The top
          storage box is the main bin. The bottom storage box (with the spigot)
          is where water leaks. When it's harvest time, you can add a third
          storage box filled with fresh "browns" and "greens", and stack it in
          your tier. The worms will then move to the new storage box, leaving
          the old one full of rich worm casings. {"\n"}
        </Text>
      </Text>
    </Card>
  );
}

function BrownGreenCard() {
  return (
    <Card
      title="Brown and Green Concept"
      image={require("../shared/images/worm6.jpg")}
    >
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        Worms combine "brown" and "green" to create worm casings. The "Brown" is
        things like newspaper, cardboard, peat moss and sawdust. The brown
        becomes the bedding. The "Green" is things like vegetable scraps. Avoid
        using cooked meals, meats, and oil, as it takes longer to break down and
        can attract pests and can smell.
      </Text>
    </Card>
  );
}

function BeddingCard() {
  return (
    <Card
      title="Setting up the bedding (The brown)"
      image={require("../shared/images/worm-bin2.jpg")}
    >
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        Worms need moisture to keep their skin wet enough to wriggle and burrow
        with ease. To create the right environment, line your bin with
        biodegradable bedding (brown). {"\n"} {"\n"}
        Recommended use: You can use peat moss, aged manure, sawdust, dried
        grass clippings, hay, garden loam, even shredded cardboard, moist
        newspaper strips, brown paper grocery bags, and most types of shredded
        leaves. {"\n"} {"\n"}
        Do not use: Sawdust from pressure-treated wood is toxic. So are plants
        heavily treated with pesticides and herbicides. Grass clippings from
        treated lawns are toxic. Additionally, green grass clippings generate
        too much heat as they break down. These high temperatures can kill your
        worms. Fertilizers and other chemical compounds might be suitable for
        soil. However, they are too strong to add to a worm bin. They contain
        chemical salts that cause harm to the worms.{"\n"} {"\n"}
        Do not use: Carbon paper and carbonless paper are off the menu. For
        example: checks (and the paper behind checks that makes a copy),
        wrapping paper and receipts. Avoid office paper that's colored or
        bleached white. {"\n"} {"\n"}
        When using paper products for bedding, soak them overnight or longer in
        a separate container and then pull them apart into small pieces. For
        other substances, add enough water to your bedding to make them slightly
        moist, like a wrung-out sponge. Peat moss makes a quick and easy
        bedding. Mix it with warm water before filling the bin.{"\n"} {"\n"}
        Fill your bin to about half to three-quarters the way full. As your
        worms consume the brown and green, the brown will start to shrink.
      </Text>
    </Card>
  );
}

function FeedingCard() {
  return (
    <Card
      title="How about feeding? (The green)"
      image={require("../shared/images/worm-dirt.jpg")}
    >
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        Red Wigglers should be considered vegetarians. Feed them raw fruit and
        vegetable scraps. Avoid using meats, oils and dairy products, which are
        more complex materials than fruits and vegetables. Thus, they take
        longer to break down and can attract pests. {"\n"} {"\n"}
        The ideal balance of worms to food scraps per week ratio is 1 lb of
        worms to .5 lbs of food scraps (2:1 ratio). For a fully established bin,
        that is about the food scraps from 2-3 people per week.{"\n"} {"\n"}
        You'll bury 'the green' deep in 'the brown', where the worms can get to
        it. If you leave it on the surface, pests can consume it and take over
        the bin. Be sure to add some fresh brown in to the green as well.
      </Text>
    </Card>
  );
}

function HarvestingCard() {
  return (
    <Card title="Using Worms" image={require("../shared/images/worm-cans.jpg")}>
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        After several months, worms need to be separated from their castings
        which, at high concentrations, create an unhealthy environment for them.
        When your bin is filled with worm casings (the black gold), it is time
        to remove the finished compost from the bin. This should take about 3-4
        months. {"\n"} {"\n"}
        Switch bins by putting the 'new compost' bin above/below the 'old
        compost' bin. The worms will crawl to from the old bin to the new bin,
        conveniently leaving their compost behind in one section. {"\n"} {"\n"}
        The Black Gold can now be used in your garden as rich organical
        fertilizer.
      </Text>
    </Card>
  );
}

function RepeatCycleCard() {
  return (
    <Card title="Using Worms" image={require("../shared/images/worm2.jpg")}>
      <Text style={styles.paragraph}>
        After harvesting and replacing the old bin section with the new bin
        section, you start the process again. {"\n"} {"\n"}Congratulations - you
        made a eco-friendly system for breaking down your wastes and producing
        high-quality fertilizer in your own home!
      </Text>
    </Card>
  );
}

export default function QuickStartScreen() {
  return (
    <View style={styles.container}>
      {console.log("here")}

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <VermicompostCard />
          <BlackGoldCard />
          <UsingWormsCard />
          <WormBinCard />
          <BrownGreenCard />
          <BeddingCard />
          <FeedingCard />
          <HarvestingCard />
          <RepeatCycleCard />
        </View>
      </ScrollView>
    </View>
  );
}

QuickStartScreen.navigationOptions = {
  title: "Quick Start Screen"
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
