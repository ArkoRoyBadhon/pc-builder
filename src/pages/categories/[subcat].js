import RootLayout from "@/components/Layouts/RootLayout";
import { Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const SubCategory = ({ products }) => {
  const router = useRouter();
    console.log(products);
  return (
    <div className="pageHeight content-body">
      <Row gutter={[16, 16]}>
          {products.map((product) => {
            return (
              <Col key={product._id} xs={24} sm={12} md={8} lg={6}>
                <Card
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
                      {product?.name.slice(0, 50)}...
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
                        <Rate allowHalf value={product?.rating} />
                      </span>
                      {product?.rating}
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
    </div>
  );
};

export default SubCategory;

SubCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/allproducts`);
  const data = await res.json();

  //   console.log(data?.data);
  const paths = data?.map((item) => ({
    params: { subcat: item.category },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log("params", params);
  const res = await fetch(
    `http://localhost:5000/allproducts?category=${params.subcat}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true, // Return a 404 page for paths not found
    };
  }

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};
