import RootLayout from "@/components/Layouts/RootLayout";
import { addtoPCBuilder } from "@/redux/features/pcBuilder/pcBuilderSlice";
import { Button, Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

function isCategoryIncluded(products, categoryToCheck) {
  return products.find((product) => product.category === categoryToCheck);
}

const SubCategory = ({ products }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { products: AllProduct } = useSelector((state) => state.pcbuilder);

  return (
    <div className="pageHeight content-body">
      <h2
        style={{
          paddingTop: "20px",
          textTransform: "capitalize",
        }}
      >
        {router?.query?.subcat}
      </h2>

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
                    {product?.productName && product?.productName.slice(0, 50)}
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    type="primary"
                    style={{ marginTop: 10 }}
                    onClick={() =>
                      router.push(
                        `/pc-builder/${router.query.subcat}/${product._id}`
                      )
                    }
                  >
                    Details
                  </Button>
                  <Button
                    type="primary"
                    style={{ marginTop: 10 }}
                    onClick={() => {
                      !isCategoryIncluded(AllProduct, product?.category) &&
                        dispatch(addtoPCBuilder(product));
                      router.push("/pc-builder");
                    }}
                  >
                    Add to PC Builder
                  </Button>
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

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://pc-builder-server-ashy.vercel.app/allproducts`);
//   const data = await res.json();

//   //   console.log(data?.data);
//   const paths = data?.map((item) => ({
//     params: { subcat: item.category },
//   }));
//   return { paths, fallback: false };
//   // return { paths, fallback: "blocking" };
// };

export const getServerSideProps = async (context) => {
  const { params } = context;
  // console.log("params", params);
  const res = await fetch(
    `https://pc-builder-server-ashy.vercel.app/allproducts?category=${params.subcat}`
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
    // revalidate: 10,
  };
};
