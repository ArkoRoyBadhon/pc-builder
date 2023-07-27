import { Breadcrumb, Button, Drawer, Layout, Menu } from "antd";
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

function getItem(label, key, icon, children, type, to) {
    return {
      key,
      icon,
      children,
      label: type === 'link' ? <Link href={to}>{label}</Link> : label, 
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

const mobileItems = [
  getItem("Pc Builder", "xx", null, null, "link", "/youtube"),
  getItem("Categories", "sub1", <MailOutlined />, [
    getItem("CPU / Processor", "1", <MailOutlined />, null, "link", "/cpu" ),
    getItem("Motherboard", "2", null, null, "link", "/motherboard"),
    getItem("RAM", "3", null, null, "link", "/ram"),
    getItem("Power Supply Unit", "4", null, null, "link", "/power-supply-unit"),
    getItem("Storage Device", "5", null, null, "link", "/storage-device"),
    getItem("Monitor", "6", null, null, "link", "/monitor"),
    getItem("Others", "7", null, null, "link", "/others"),
  ]),
];


// const mobileItems = [
//     getItem('Navigation One', 'sub1', <MailOutlined />, [
//       getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
//       getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
//     ]),
//     getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
//       getItem('Option 5', '5'),
//       getItem('Option 6', '6'),
//       getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
//     ]),
//     {
//       type: 'divider',
//     },
//     getItem('Navigation Three', 'sub4', <SettingOutlined />, [
//       getItem('Option 9', '9'),
//       getItem('Option 10', '10'),
//       getItem('Option 11', '11'),
//       getItem('Option 12', '12'),
//     ]),
//     getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
//     getItem('PC Builder', 'builder', null, null, 'link', '/builder'), // Example link item
//   ];
  

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <>
      <Header className={`${styles["header-style"]}`}>
        <div className="demo-logo">
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
          <Link href="/">
            <p style={{ color: "white", fontWeight: 600 }}>PC Builder</p>
          </Link>
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
          </Drawer>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
