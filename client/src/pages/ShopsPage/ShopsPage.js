import React, { useEffect } from "react";
import "../ShopsPage/ShopsPage.scss";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { getShops } from "../../redux/features/shopsSlice";
import Shop from "../../components/Shop/Shop";

function ShopsPage({ pageClassName }) {
  const { shops, loading } = useSelector((state) => ({
    ...state.shops,
  }));

  const dispatch = useDispatch();

  const styles = {
    margin: "0 auto",
    display: "block",
  };

  useEffect(() => {
    dispatch(getShops());
  }, []);

  const shopsList = shops.map((shop, index) => (
    <Shop key={index} {...shop} className="shops__item" />
  ));

  return (
    <main className={pageClassName}>
      <div className="container">
        <h1>Choose the shop</h1>
        <ClipLoader
          loading={loading}
          size={150}
          cssOverride={styles}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <ul className="shops__list">{shopsList}</ul>
      </div>
    </main>
  );
}

export default ShopsPage;
