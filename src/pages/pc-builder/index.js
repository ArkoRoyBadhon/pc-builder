import RootLayout from "@/components/Layouts/RootLayout";
import { Button, Divider, Menu, Modal } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/pc-builder.module.css";
import { useState } from "react";
import { DeleteFilled } from "@ant-design/icons";
import { removeFromPCBuilder } from "@/redux/features/pcBuilder/pcBuilderSlice";

function isCategoryIncluded(products, categoryToCheck) {
  return products.find((product) => product.category === categoryToCheck);
}

const PCBuilder = () => {
  const { pcbuilder: pcdata } = useSelector((state) => state);
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const products = pcdata.products || [];
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pageHeight content-body">
      <div
        className={`${styles["pc-builder-main"]}`}
      >
        <div className={`${styles["pcBuilderNav"]}`}>
          <Link
            href="/pc-builder/cpu"
            className={isCategoryIncluded(products, "CPU") ? "disabled" : ""}
          >
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
          <Link
            className={
              isCategoryIncluded(products, "MOTHERBOARD") ? "disabled" : ""
            }
            href="/pc-builder/motherboard"
          >
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
          <Link
            className={isCategoryIncluded(products, "RAM") ? "disabled" : ""}
            href="/pc-builder/ram"
          >
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
          <Link
            className={
              isCategoryIncluded(products, "POWER SUPPLY") ? "disabled" : ""
            }
            href="/pc-builder/power-supply"
          >
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
          <Link
            className={
              isCategoryIncluded(products, "STORAGE DEVICE") ? "disabled" : ""
            }
            href="/pc-builder/storage-device"
          >
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
          <Link
            className={
              isCategoryIncluded(products, "MONITOR") ? "disabled" : ""
            }
            href="/pc-builder/MONITOR"
          >
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
        <div className={`${styles["pcBuilderBody"]}`}>
          <h4 style={{ marginBottom: 10 }}>Your PC Parts</h4>
          {products?.map((product, i) => {
            return (
              <div
                key={product._id}
                style={{
                  padding: "10px 0",
                  display: "flex",
                  width: "50vw",
                }}
              >
                <div style={{ marginRight: 10 }}>{i + 1}.</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <b style={{ paddingRight: 5 }}>{product?.productName} </b>{" "}
                    {">"}
                    <b>({product?.price} BDT)</b>
                  </div>
                  <div>
                    <b>Category:</b> {product?.category}
                  </div>
                  <div
                    style={{
                      marginTop: 10,
                    }}
                  >
                    <div
                      className={`${styles["delBtn"]}`}
                      onClick={()=> dispatch(removeFromPCBuilder(product))}
                    >
                      <DeleteFilled className={`${styles["delBtnText"]}`} />{" "}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <Divider  />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <b>Total Price</b>
            <b>{pcdata?.total} BDT</b>
          </div>

          {pcdata.count === 6 ? (
            <>
              <Button
                type="primary"
                onClick={showModal}
                style={{
                  marginTop: "30px",
                  marginBottom: "30px",
                  fontWeight: 600,
                }}
              >
                Create PC
              </Button>
              <Modal
                title="Success"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p>PC Created Successfully</p>
              </Modal>
            </>
          ) : (
            <>
              <Button
                type="primary"
                onClick={showModal}
                style={{
                  marginTop: "30px",
                  marginBottom: "30px",
                  fontWeight: 600,
                }}
              >
                Create PC
              </Button>
              <Modal
                title="Warning"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p>Please Select at least 6 products</p>
              </Modal>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PCBuilder;

PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
