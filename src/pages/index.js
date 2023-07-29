/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-typos */
import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import { Card } from "antd";
const { Meta } = Card;
import { Col, Row } from "antd";
import { Rate } from "antd";
import { useRouter } from "next/router";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const HomePage = ({ products }) => {
  const router = useRouter();
  return (
    <div className="pageHeight">
      <div className="content-body">
        <h3 className="" style={{ paddingTop: "20px" }}>
          Our products
        </h3>

        <Row
          gutter={[16, 16]}
          style={{
            paddingBottom: 40,
          }}
        >
          {products.map((product) => {
            return (
              <Col key={product._id} xs={24} sm={12} md={8} lg={6}>
                <Card
                onClick={()=> router.push(`/categories/${product?.category}/${product._id}`)}
                  hoverable
                  cover={
                    <Image
                      style={{
                        height: 250,
                      }}
                      src={product?.image}
                      width={500}
                      height={500}
                      alt="cardImg"
                    />
                  }
                >
                  <div className="">
                    <h4 className="" style={{ color: "black" }}>
                      {product?.productName &&
                        product?.productName.slice(0, 50)}
                      ...
                    </h4>
                    <div className="">
                      <span style={{ fontWeight: 600 }}>Category: </span>
                      {product?.category}
                    </div>
                    <div className="">
                      {" "}
                      <span style={{ fontWeight: 600 }}>Price: </span>
                      {product?.price} BDT
                    </div>
                    <div className="">
                      <span style={{ fontWeight: 600 }}>Availability: </span>
                      {product?.status}
                    </div>
                    <div className="">
                      <span style={{ marginRight: "10px" }}>
                        <Rate allowHalf value={product?.averageRating} />
                      </span>
                      {product?.averageRating}
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/randomproducts");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};
