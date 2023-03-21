// import React from "react";
import BlueSimple from "./BlueSimple";

export default {
  title: "UI Components/Navigations",
  component: BlueSimple,
};

const BlueSimpleTemplate = (args) => <BlueSimple {...args} />;

export const BlueSimpleNav = BlueSimpleTemplate.bind({});
BlueSimpleTemplate.args = {};
