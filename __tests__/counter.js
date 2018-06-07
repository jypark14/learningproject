// @ts-check
import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Learning_Project } from "../src/components/counter";

describe("Stateless Components Render", () => {
  const stringProp = "test";

  //   it("Counter render", () => {
  //     renderer.create(
  //       <Learning_Project
  //         count={80}
  //         count2={70}
  //         // onPress={emptyFunc}
  //       />
  it("Learning Project renders", () => {
    renderer.create(
      <Learning_Project
        actions={{
          counterIncrement: () => undefined,
          counterDecrement: () => undefined
        }}
      />
    );
  });
});
