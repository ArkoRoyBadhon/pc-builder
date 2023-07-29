import RootLayout from "@/components/Layouts/RootLayout";
import { Divider, Menu } from "antd";
import Link from "next/link";

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
    getItem(
      "CPU / Processor",
      "1",
      null,
      null,
      "link",
      "/pc-builder/cpu"
    ),
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
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className="pageHeight content-body">
      <div style={{
        display: "flex",
        // justifyContent: "space-between"
      }}
      >
        <div className="">
          <Menu
            onClick={onClick}
            style={{
              width: 256,
            }}
            defaultSelectedKeys={["sub1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={categoryItems}
          />
        </div>
        <div style={{marginLeft: "50px", marginTop: "40px", width: "600px"}}>
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
