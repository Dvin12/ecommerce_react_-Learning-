import { useEffect } from "react";
import { useLocation } from "react-router";

function Product() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.state.item);
  }, []);
  return <div>PRODCUT</div>;
}

export default Product;
