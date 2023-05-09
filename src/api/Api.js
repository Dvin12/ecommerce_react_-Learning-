import axios from "axios";

export async function discountedData() {
  const prodcuts = await axios.get("http://localhost:3001/discounted");

  return prodcuts;
}
