import styles from '../../styles/UI/footer.module.css'

const FooterCom = () => {
  return (
    <div>
      <div
      className={`${styles["footer"]}`}
        style={{
          minHeight: "40vh",
          padding: "60px 60px 0 60px",
        }}
      >
        <div style={{ cursor: "pointer",  }} onClick={() => router.push("/")}>
          <span style={{ color: "blue", fontWeight: 800 }}>PC</span>
          <span style={{ color: "red", fontWeight: 800 }}>Builder</span>
        </div>
        <div>
            <p style={{fontWeight: "600"}}>Why you choose us</p>
            <ul style={{
                marginLeft: "20px"
            }}>
                <li>Original Product</li>
                <li>trusted Shop</li>
                <li>Best Market Price</li>
                <li>Cash On delivery</li>
                <li>Flexibility of Customization</li>
            </ul>
        </div>
        <div>
        <p style={{fontWeight: "600"}}>Categories</p>
            <p>CPU?Processor</p>
            <p>Motherboard</p>
            <p>Ram</p>
            <p>Power Supply</p>
            <p>Storage Device</p>
            <p>Monitor</p>
        </div>
      </div>
      <p style={{ textAlign: "center",color: "white", background: "gray", padding: "14px 0", marginTop: "20px" }}>
        PC-Builder House ©2023 Created by Arko Roy Badhon
      </p>
    </div>
  );
};

export default FooterCom;
