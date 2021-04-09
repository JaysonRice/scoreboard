import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import App from "../../src/App.vue";

describe("App.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("starts both teams with a score of zero", () => {
    const componentWrapper = mount(App, { localVue, vuetify });
    const scores = componentWrapper.findAll(".score");

    expect(scores.at(0).text()).toBe("0");
    expect(scores.at(1).text()).toBe("0");
  });
});
