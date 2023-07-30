import { Breadcrumb, Button, Drawer, Layout, Menu, Tooltip } from "antd";
const { Header } = Layout;
import {
  AppstoreOutlined,
  DownOutlined,
  MailOutlined,
  MenuOutlined,
  SettingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import styles from "../../styles/UI/Navbar.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function getItem(label, key, icon, children, type, to) {
  return {
    key,
    icon,
    children,
    label: type === "link" ? <Link href={to}>{label}</Link> : label,
    type,
  };
}

const items = [
  {
    key: "1",
    label: (
      <Link
        // target="_blank"
        rel="noopener noreferrer"
        href="/categories/cpu"
      >
        CPU/Processor
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        // target="_blank"
        rel="noopener noreferrer"
        href="/categories/motherboard"
      >
        Motherboard
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link rel="noopener noreferrer" href="/categories/ram">
        RAM
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link rel="noopener noreferrer" href="/categories/power-supply">
        Power Supply Unit
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link rel="noopener noreferrer" href="/categories/storage-device">
        Storage Device
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link rel="noopener noreferrer" href="/categories/monitor">
        Monitor
      </Link>
    ),
  },
  // {
  //   key: "7",
  //   label: (
  //     <Link rel="noopener noreferrer" href="/categories/others">
  //       Others
  //     </Link>
  //   ),
  // },
];

export const mobileItems = [
  getItem("Pc Builder", "xx", null, null, "link", "/pc-builder"),
  getItem("Categories", "sub1", <MailOutlined />, [
    getItem(
      "CPU / Processor",
      "1",
      <MailOutlined />,
      null,
      "link",
      "/categories/cpu"
    ),
    getItem("Motherboard", "2", null, null, "link", "/categories/motherboard"),
    getItem("RAM", "3", null, null, "link", "/categories/ram"),
    getItem(
      "Power Supply Unit",
      "4",
      null,
      null,
      "link",
      "/categories/power-supply"
    ),
    getItem(
      "Storage Device",
      "5",
      null,
      null,
      "link",
      "/categories/storage-device"
    ),
    getItem("Monitor", "6", null, null, "link", "/categories/monitor"),
    // getItem("Others", "7", null, null, "link", "/categories/others"),
  ]),
];

const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onClick = (e) => {
    // console.log("click ", e);
  };

  return (
    <>
      <Header className={`${styles["header-style"]}`}>
        <div style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
          <span style={{ color: "white", fontWeight: 800 }}>PC</span>
          <span style={{ color: "red", fontWeight: 800 }}>Builder</span>
        </div>

        {/* ============== Desktop Menu =============  */}
        <div className={`${styles["desktopMenu"]}`}>
          <Dropdown
            menu={{
              items,
            }}
          >
            <Space
              style={{
                color: "white",
                fontWeight: 600,
                margin: "0px 10px",
                cursor: "pointer",
                lineHeight: 0,
              }}
            >
              Categories
            </Space>
          </Dropdown>
          <Link href="/pc-builder">
            <p style={{ color: "white", fontWeight: 600, margin: "0px 10px" }}>
              PC Builder
            </p>
          </Link>

          {session?.user ? (
            <div style={{ cursor: "pointer" }} onClick={() => signOut()}>
              <p
                style={{ color: "white", fontWeight: 600, margin: "0px 10px" }}
              >
                <Tooltip placement="bottom" title={session?.user?.name}>
                  <Button>Log Out</Button>
                </Tooltip>
              </p>
            </div>
          ) : (
            <Link href="/login">
              <p
                style={{ color: "white", fontWeight: 600, margin: "0px 10px" }}
              >
                Login
              </p>
            </Link>
          )}
        </div>

        {/* ============== Mobile Menu =============  */}
        <div className={`${styles["hamburger"]}`}>
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer
            title="Close Menu"
            placement="right"
            onClose={onClose}
            width={300}
            open={open}
          >
            <Menu
              onClick={onClick}
              style={{
                width: 256,
              }}
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={mobileItems}
            />
            {session?.user ? (
              <div style={{ cursor: "pointer" }} onClick={() => signOut()}>
                <p
                  style={{
                    color: "white",
                    fontWeight: 600,
                    margin: "0px 20px",
                  }}
                >
                  <Tooltip title={session?.user?.name}>
                    <Button>Log Out</Button>
                  </Tooltip>
                </p>
              </div>
            ) : (
              <Link href="/login">
                <Button
                  style={{
                    color: "black",
                    fontWeight: 600,
                    margin: "10px 20px",
                  }}
                >
                  Login
                </Button>
              </Link>
            )}
          </Drawer>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
