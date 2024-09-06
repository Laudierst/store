import React from "react";
import "./styles.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

/**
 * @author
 * @function Products
 **/

export const ProductsLoading = (props) => {
  
  return (
    <section className="section">

      <div className="div">
        <SkeletonTheme baseColor="rgb(32, 32, 32)" highlightColor="#444" />
        <Skeleton borderRadius={20} baseColor="#e2f23034" height={150} width={"100%"} />
        <h5 className="h5"><Skeleton baseColor="#6af0ce34"/></h5>
        <h5 className="h5"><Skeleton baseColor="#6af0ce34"/></h5>
        <h5 className="h5"><Skeleton baseColor="#d1df7734"/></h5>
      </div>
      <div className="div">
        <SkeletonTheme baseColor="#202020" highlightColor="#444" />
        <Skeleton height={200} width={"100%"} />
        <h5 className="h5"><Skeleton/></h5>
      </div>
      <div className="div">
        <SkeletonTheme baseColor="#202020" highlightColor="#444" />
        <Skeleton height={200} width={"100%"} />
        <h5 className="h5"><Skeleton/></h5>
      </div>
      <div className="div">
        <SkeletonTheme baseColor="#202020" highlightColor="#444" />
        <Skeleton height={200} width={"100%"} />
        <h5 className="h5"><Skeleton/></h5>
      </div>
      <div className="div">
        <SkeletonTheme baseColor="#202020" highlightColor="#444" />
        <Skeleton height={200} width={"100%"} />
        <h5 className="h5"><Skeleton/></h5>
      </div>
      <div className="div">
        <SkeletonTheme baseColor="#202020" highlightColor="#444" />
        <Skeleton height={200} width={"100%"} />
        <h5 className="h5"><Skeleton/></h5>
      </div>
      <div className="div">
        <SkeletonTheme baseColor="#202020" highlightColor="#444" />
        <Skeleton height={200} width={"100%"} />
        <h5 className="h5"><Skeleton/></h5>
      </div>
      <div className="div">
        <SkeletonTheme baseColor="#202020" highlightColor="#444" />
        <Skeleton height={200} width={"100%"} />
        <h5 className="h5"><Skeleton/></h5>
      </div>
      <div className="div">
        <SkeletonTheme baseColor="#202020" highlightColor="#444" />
        <Skeleton height={200} width={"100%"} />
        <h5 className="h5"><Skeleton/></h5>
      </div>
      <div className="div">
        <SkeletonTheme baseColor="#202020" highlightColor="#444" />
        <Skeleton height={200} width={"100%"} />
        <h5 className="h5"><Skeleton/></h5>
      </div>
      <div className="div">
        <SkeletonTheme baseColor="#202020" highlightColor="#444" />
        <Skeleton height={200} width={"100%"} />
        <h5 className="h5"><Skeleton/></h5>
      </div>
      
    </section>
  );
};
