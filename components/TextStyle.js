import React from "react";

export default function TextStyle(props) {
  let type = this.props.type;
  let style = null;

  switch (type) {
    case "bold":
      style = "fontWeight: 'bold'";
      break;
    case "gold":
      // code block
      break;
    case "brown":
      // code block
      break;
    case "green":
      // code block
      break;
    default:
    // code block
  }

  return <Text style={this.style}> {props.content} </Text>;
}
