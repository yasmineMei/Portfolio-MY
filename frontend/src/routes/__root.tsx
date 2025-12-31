import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null
  : React.lazy(() =>
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
      }))
    );

function RootComponent() {
  return (
    <>
      <React.Suspense fallback={null}>
        <TanStackRouterDevtools />
      </React.Suspense>
      <Outlet />
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
