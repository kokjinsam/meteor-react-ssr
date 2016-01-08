import SSR from './components/ssr/ssr.jsx';

const {
  Router,
  Route,
  IndexRoute
} = ReactRouter;

//SSR routes
SSRroutes = (
  <Route path="/ssr" component={SSR}/>
);

ReactRouterSSR.Run(SSRroutes);
