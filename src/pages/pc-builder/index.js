import RootLayout from "@/components/Layouts/RootLayout";
import { Divider, Menu } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../../styles/pc-builder.module.css";

function isCategoryIncluded(products, categoryToCheck) {
  return products.find((product) => product.category === categoryToCheck);
}

const PCBuilder = () => {
  const { pcbuilder: pcdata } = useSelector((state) => state);

  console.log("pcdata", pcdata);
  const products = pcdata.products || [];
  return (
    <div className="pageHeight content-body">
      <div
        style={{
          display: "flex",
        }}
      >
        <div className={`${styles["pcBuilderNav"]}`}>
          <Link href="/pc-builder/cpu" className={isCategoryIncluded(products, "CPU") ? 'disabled' : ''}>
            CPU/Processor{" "}
            {isCategoryIncluded(products, "CPU") && (
              <span
                style={{
                  color: "green",
                  padding: "0 5px",
                  background: "orange",
                  borderRadius: "5px",
                }}
              >
                selected
              </span>
            )}{" "}
          </Link>
          <Link className={isCategoryIncluded(products, "CPU") ? 'disabled' : ''} href="/pc-builder/motherboard" >
            MOTHERBOARD{" "}
            {isCategoryIncluded(products, "MOTHERBOARD") && (
              <span
                style={{
                  color: "green",
                  padding: "0 5px",
                  background: "orange",
                  borderRadius: "5px",
                }}
              >
                selected
              </span>
            )}
          </Link>
          <Link className={isCategoryIncluded(products, "RAM") ? 'disabled' : ''} href="/pc-builder/ram">
            RAM{" "}
            {isCategoryIncluded(products, "RAM") && (
              <span
                style={{
                  color: "green",
                  padding: "0 5px",
                  background: "orange",
                  borderRadius: "5px",
                }}
              >
                selected
              </span>
            )}
          </Link>
          <Link className={isCategoryIncluded(products, "POWER SUPPLY") ? 'disabled' : ''} href="/pc-builder/power-supply">
            POWER SUPPLY UNIT{" "}
            {isCategoryIncluded(products, "POWER SUPPLY") && (
              <span
                style={{
                  color: "green",
                  padding: "0 5px",
                  background: "orange",
                  borderRadius: "5px",
                }}
              >
                selected
              </span>
            )}
          </Link>
          <Link className={isCategoryIncluded(products, "STORAGE DEVICE") ? 'disabled' : ''} href="/pc-builder/storage-device">
            STORAGE DEVICE{" "}
            {isCategoryIncluded(products, "STORAGE DEVICE") && (
              <span
                style={{
                  color: "green",
                  padding: "0 5px",
                  background: "orange",
                  borderRadius: "5px",
                }}
              >
                selected
              </span>
            )}
          </Link>
          <Link className={isCategoryIncluded(products, "MONITOR") ? 'disabled' : ''} href="/pc-builder/MONITOR">
            MONITOR{" "}
            {isCategoryIncluded(products, "MONITOR") && (
              <span
                style={{
                  color: "green",
                  padding: "0 5px",
                  background: "orange",
                  borderRadius: "5px",
                }}
              >
                selected
              </span>
            )}
          </Link>
        </div>
        <div style={{ marginLeft: "50px", marginTop: "40px", width: "600px" }}>
          <h4 className="">Your PC Parts</h4>

          <Divider />
        </div>
      </div>
    </div>
  );
};

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
