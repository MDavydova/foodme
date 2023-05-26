import React, { useEffect } from "react";
import "../ShopsPage/ShopsPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { getShops } from "../../redux/features/shopsSlice";

function ShopsPage({ pageClassName }) {
  const { shops, loading } = useSelector((state) => ({ ...state.shops }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShops());
  }, []);
  console.log(shops, loading);
  return (
    <main className={pageClassName}>
      <div className="container">
        <h1>Choose the shop</h1>
      </div>
    </main>
  );
}

export default ShopsPage;
