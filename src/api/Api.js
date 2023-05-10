import axios from "axios";

export async function productData() {
  const prodcuts = await axios.get("http://localhost:3001/electronics");

  return prodcuts;
}
