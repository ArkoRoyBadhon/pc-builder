import RootLayout from "@/components/Layouts/RootLayout";
import { GithubFilled, GoogleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { signIn } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  return (
    <div className="pageHeight">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "200px",
        }}
      >
        <Button style={{
            paddingLeft: "20px",
            paddingRight: "20px",
        }}
        onClick={()=> signIn("github", {
            callbackUrl: "/"
        })}
        > <GithubFilled />  Login With Github</Button>
        <Button style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            marginTop: "10px"
        }}
        onClick={()=> signIn("google", {
            callbackUrl: "/"
        })}
        > <GoogleOutlined />  Login With Google</Button>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
