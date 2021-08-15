import { App } from "../src/App";
describe("App run", () => {
  it("should return 'Décollage du Bombardier'", () => {
    expect(App.main1()).toBe("Décollage du Bombardier");
  });
  it("should return 'Atteérissage du Bombardier'", () => {
    expect(App.main2()).toBe("Attérissage du Bombardier");
  });
  it("should return 'Décollage du Boeing 747'", () => {
    expect(App.main3()).toBe("Décollage du Boeing 747");
  });
  it("should return 'Atteérissage du Boeing 747'", () => {
    expect(App.main4()).toBe("Attérissage du Boeing 747");
  });
});
