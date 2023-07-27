import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const HomePage = () => {
  return (
    <div className="" style={{minHeight: "100vh"}}>
      <h1>This is Home page</h1>
    </div>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>{page}</RootLayout>
  )
}