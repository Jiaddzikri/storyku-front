import { useState } from "react";
import Layout from "../components/layouts/Layout";
import { Outlet } from "react-router-dom";

const StoryManagement = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
export default StoryManagement;
