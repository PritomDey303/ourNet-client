import AOS from "aos";
import React, { useContext, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { UserContext } from "../../../../App";
import SingleProductInfo from "./SingleProductInfo/SingleProductInfo";
AOS.init();
export default function ProductInfo() {
  const [, , Product, setProduct, , , , , URL] = useContext(UserContext);

  useEffect(() => {
    fetch(`${URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [URL, setProduct]);

  const handleDeleteProduct = (id, e) => {
    const newArr = Product.filter((pd) => pd._id !== id);
    fetch(`${URL}/deleteproduct/${id}`, {
      method: "Delete",
    }).then((res) => {
      if (res.ok) {
        alert("Product successfully deleted.");

        setProduct(newArr);
      } else {
        alert("Something is wrong.Try again.");
      }
    });
  };
  return (
    <Container className="pt-5">
      <h1
        style={{ color: "brown" }}
        className="mt-3 mb-4 ml-1"
        data-aos="flip-up"
        data-aos-duration="1500"
      >
        Product Info:
      </h1>
      <Table striped data-aos="fade-up" data-aos-duration="1500">
        <thead className="text-light" style={{ backgroundColor: "brown" }}>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Product.map((singleProduct) => (
            <SingleProductInfo
              key={singleProduct._id}
              singleProduct={singleProduct}
              handleDeleteProduct={handleDeleteProduct}
            ></SingleProductInfo>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
