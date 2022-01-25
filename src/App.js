import Home from "./components/Home/Home";
import TvSeries from "./components/TvSeries/TvSeries";
import EmployeeForm from "./components/EmployeeForm/EmployeeForm";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Styles from "./assets/styles.css";
import Login from "./components/Login/Login.js";
import Manage from "./components/Manage/Manage.js";
import { useState } from "react";
import useToken from "./components/useToken";
import ProductDetails from './components/ProductDetails/ProductDetails';

const App = () => {
  const { token, removeToken, setToken } = useToken();

  return (
    <BrowserRouter>
      <div className={Styles.App}>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/TvSeries" component={TvSeries} />
        <Route exact path="/EmployeeForm" component={EmployeeForm} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Login" render={props => <Login setToken={setToken} {...props} />} />
        <Route path="/productdetails/:id" component={ProductDetails} />
        <Route exact path="/Manage" component={Manage} />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
