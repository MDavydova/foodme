import React from "react";

function ProductButtonBox({
  incrementHandler,
  decrementHandler,
  productAmount,
  buttonDisabled,
}) {
  return (
    <div className="product__buttons flex">
      <button onClick={() => incrementHandler()}>+</button>
      <input readOnly value={productAmount} />
      <button disabled={buttonDisabled} onClick={() => decrementHandler()}>
        -
      </button>
    </div>
  );
}

export default ProductButtonBox;
