import { LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  name: string;
  //   Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "HeavyComponent" */ "../01-lazyload/layout/LazyLayout"
    )
);
// const lazy2 = lazy(
//   () =>
//     import(
//       /* webpackChunkName: "HeavyComponent2" */ "../01-lazyload/pages/LazyPage2"
//     )
// );
// const lazy3 = lazy(
//   () =>
//     import(
//       /* webpackChunkName: "HeavyComponent1" */ "../01-lazyload/pages/LazyPage3"
//     )
// );

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "lazy layout",
  },
  {
    path: "no-lazy",
    to: "no-lazy",
    Component: NoLazy,
    name: "no lazy",
  },
];
