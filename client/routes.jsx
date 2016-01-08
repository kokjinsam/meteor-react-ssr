import Board from './components/board/board.jsx';

const {
  Router,
  Route
} = ReactRouter;

const createHistory = ReactRouter.history.createHistory;

const routes = [
  {
    path: '/',
    component: Board
  }
]

const router = (
  <Router routes={routes} history={createHistory()} />
);

Meteor.startup(function () {
  ReactDOM.render(router, document.getElementById("react-app"));
});
