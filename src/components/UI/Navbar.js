import { Breadcrumb, Button, Drawer, Layout, Menu } from "antd";
const { Header } = Layout;
import { DownOutlined, MenuOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import styles from "../../styles/UI/Navbar.module.css";
import { useState } from "react";

const items = [
  {
    key: "1",
    label: (
      <Link
        // target="_blank"
        rel="noopener noreferrer"
        href="/"
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
        href="/"
      >
        Motherboard
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/">
        RAM
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/">
        Power Supply Unit
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/">
        Storage Device
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/">
        Monitor
      </Link>
    ),
  },
  {
    key: "7",
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="/">
        Others
      </Link>
    ),
  },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Header className={`${styles["header-style"]}`}>
        <div className="demo-logo">
          <span style={{ color: "white", fontWeight: 800 }}>PC</span>
          <span style={{ color: "red", fontWeight: 800 }}>Builder</span>
        </div>
        <div
          className={`${styles["desktopMenu"]}`}
        >
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
          <Link href="/">
            <p style={{ color: "white", fontWeight: 600 }}>PC Builder</p>
          </Link>
        </div>
        <div className={`${styles["hamburger"]}`}>
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={onClose}
            width={250}
            open={open}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
