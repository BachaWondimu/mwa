type RouteType = {
  routes: {
    path: string;
    component: string;
  }[];
};

const routingConfig: RouteType = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: '12',
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
};
const createRoutes = (config: {
  routes: {
    path: string;
    component: string;
  }[];
}) => {};

createRoutes(routingConfig);
