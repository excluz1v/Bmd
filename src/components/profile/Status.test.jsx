import React from "react";
import { create } from "react-test-renderer";
import ProfileWithHucs from "./ProfileWithHucs";


describe("Status component", () => {
    test("status from state state sould be in ", () => {
      const component = create(<ProfileWithHucs status="asdfgh" />);
      const instance = component.getInstance();
      expect(instance.status).toBe("asdfgh");
    });
  });