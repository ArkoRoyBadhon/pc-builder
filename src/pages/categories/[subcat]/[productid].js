/* eslint-disable jsx-a11y/alt-text */
import RootLayout from "@/components/Layouts/RootLayout";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, Col, Divider, Rate, Row } from "antd";
import { Image } from "antd";
import { useRouter } from "next/router";

const ProductDetail = ({ productDetail: pData }) => {
  const router = useRouter();
  return (
    <div className="pageHeight content-body">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "start",
          }}
        >
          <Image width={400} src={pData?.image} />
        </div>
        <div
          style={{
            fontSize: 22,
            lineHeight: 2,
            paddingTop: 30,
          }}
        >
          <h3 className="">
            <span style={{ color: "#1b82e3" }}>Product Name: </span>
            {pData?.productName}
          </h3>
          <p className="">
            <strong style={{ color: "#1b82e3" }}>Category: </strong>{" "}
            {pData?.category}
          </p>
          <p className="">
            <strong style={{ color: "#1b82e3" }}>Status: </strong>{" "}
            {pData?.status}
          </p>
          <p className="">
            <strong style={{ color: "#1b82e3" }}>Price: </strong> {pData?.price}{" "}
            BDT
          </p>
        </div>
      </div>
      <Divider style={{}} />
      <div className="">
        <p className="">
          <strong>Description: </strong>
          {pData?.description}
        </p>

        <div style={{ paddingTop: 20 }}>
          <strong>Key Features</strong>
          <br />
          <b>Brand</b>: {pData?.keyFeatures?.brand}
          <br />
          <b>Model</b>: {pData?.keyFeatures?.model}
          <br />
          <b>Specification</b>: {pData?.keyFeatures?.specification}
        </div>

        <div style={{ marginTop: 20 }}>
          <strong>Individual Rating </strong>
          <span style={{ marginRight: "10px", marginLeft: "10px" }}>
            <Rate allowHalf value={pData?.individualRating} />
          </span>
          {pData?.individualRating}
        </div>
        <div style={{ paddingBottom: 20 }}>
          <strong>Average Rating </strong>
          <span style={{ marginRight: "10px", marginLeft: "10px" }}>
            <Rate allowHalf value={pData?.averageRating} />
          </span>
          {pData?.averageRating}
        </div>

        <div style={{ paddingBottom: 20 }}>
          <strong>Review: </strong>
          <br />
          {pData?.reviews?.map((rev, i) => {
            return (
              <div key={i}>
                {" "}
                <ArrowRightOutlined /> {rev?.comment}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

ProductDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/allproducts`);
  const data = await res.json();

  const paths = data?.map((item) => ({
    params: { subcat: item.category, productid: String(item._id) },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/product/${params.productid}`);
  const data = await res.json();

  return {
    props: {
      productDetail: data,
    },
    revalidate: 10,
  };
};
