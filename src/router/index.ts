// import React from "react";
import { RouteObject } from "react-router-dom";

// 获取pages 下所有模块
const modules = import.meta.glob("@/pages/*/*.tsx");

console.log(modules);

import Layout from "@/pages/layout";

// 静态路由
const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: [{}],
  },
  {
    path: "*",
    element: "404",
  },
];

export default routes;
