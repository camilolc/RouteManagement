import { LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { lazy } from "react";

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  name: string;
  //   Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const lazy1 = lazy(
  () =>
    import(
      /* webpackChunkName: "HeavyComponent" */ "../01-lazyload/pages/LazyPage1"
    )
);
const lazy2 = lazy(
  () =>
    import(
      /* webpackChunkName: "HeavyComponent2" */ "../01-lazyload/pages/LazyPage2"
    )
);
const lazy3 = lazy(
  () =>
    import(
      /* webpackChunkName: "HeavyComponent1" */ "../01-lazyload/pages/LazyPage3"
    )
);

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: lazy1,
    name: "lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: lazy2,
    name: "lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: lazy3,
    name: "lazy-3",
  },
];
