import React from "react";
import CardHeader from "./NormalCardHeader";

export default {
  title: "UI Components/Navigations",
  component: CardHeader,
};

const Template1 = (args) => <CardHeader {...args} />;

export const NormalCardNavigation = Template1.bind({});
NormalCardNavigation.args = {};
