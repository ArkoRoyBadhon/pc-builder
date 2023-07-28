import RootLayout from "@/components/Layouts/RootLayout";
import { Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductDetail = ({ productDetail }) => {
  const router = useRouter();
  return (
    <div className="pageHeight content-body">
      productDetail {router.query.productid}
    </div>
  );
};

export default ProductDetail;

ProductDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch(`http://localhost:5000/allproducts`);
//   const data = await res.json();

//   const paths = data?.map((item) => ({
//     params: { productid: item.category },
//   }));

//   return { paths, fallback: false };
// };

// export const getStaticProps = async (context) => {
//   const { params } = context;
//   console.log("params", params);
//   const res = await fetch(
//     `http://localhost:5000/allproducts?category=${params.subcat}`
//   );
//   const data = await res.json();

//   if (!data) {
//     return {
//       notFound: true, // Return a 404 page for paths not found
//     };
//   }

//   return {
//     props: {
//       productDetail: data,
//     },
//     revalidate: 10,
//   };
// };
