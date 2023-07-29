import RootLayout from "@/components/Layouts/RootLayout";
import { Divider, Menu } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from '../../styles/pc-builder.module.css'

function getItem(label, key, icon, children, type, to) {
  return {
    key,
    icon,
    children,
    label: type === "link" ? <Link href={to}>{label}</Link> : label,
    type,
  };
}

const categoryItems = [
  getItem("Categories", "sub1", null, [
    getItem("CPU / Processor", "1", null, null, "link", "/pc-builder/cpu"),
    getItem("Motherboard", "2", null, null, "link", "/pc-builder/motherboard"),
    getItem("RAM", "3", null, null, "link", "/pc-builder/ram"),
    getItem(
      "Power Supply Unit",
      "4",
      null,
      null,
      "link",
      "/pc-builder/power-supply"
    ),
    getItem(
      "Storage Device",
      "5",
      null,
      null,
      "link",
      "/pc-builder/storage-device"
    ),
    getItem("Monitor", "6", null, null, "link", "/pc-builder/monitor"),
  ]),
];

const PCBuilder = () => {
  const { pcbuilder: pcdata } = useSelector((state) => state);
  console.log("pcdata",pcdata);
  return (
    <div className="pageHeight content-body">
      <div
        style={{
          display: "flex",
          // justifyContent: "space-between"
        }}
      >
        <div className={`${styles["pcBuilderNav"]}`}>
          {/* <Menu
            style={{
              width: 256,
            }}
            defaultSelectedKeys={["sub1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={categoryItems}
          /> */}
          <Link href="/pc-builder/cpu">CPU/Processor</Link>
          <Link href="/pc-builder/motherboard">MOTHERBOARD</Link>
          <Link href="/pc-builder/ram">RAM</Link>
          <Link href="/pc-builder/power-supply">POWER SUPPLY UNIT</Link>
          <Link href="/pc-builder/storage-device">STORAGE DEVICE</Link>
          <Link href="/pc-builder/MONITOR">MONITOR</Link>
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
