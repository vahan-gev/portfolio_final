import { proxy } from "valtio";
const state = proxy({
  homePage: true,
  color: "#546a96",
});
export default state;
