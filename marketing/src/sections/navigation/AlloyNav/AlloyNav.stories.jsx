import React from "react";
import AlloyNavHeader from "./AlloyNav";

export default {
  title: "UI Components/Navigations",
  component: AlloyNavHeader,
};

const AlloyNavTemplate = (args) => <AlloyNavHeader {...args} />;

export const AlloyNavigation = AlloyNavTemplate.bind({});
AlloyNavigation.args = {};
