import React from "react";
import "./LoadingSkeleton.css";
function LoadingSkeleton() {
  return (
    <div className="container loading-skeleton">
      <form className="full-w">
        <div className="form-group full-w">
          <label htmlFor="exampleFormControlInput1 full-w">Email address</label>
        </div>
        <div className="form-group full-w">
          <label htmlFor="exampleFormControlSelect1">Example select</label>
          <select className="form-control full-w" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export { LoadingSkeleton };
