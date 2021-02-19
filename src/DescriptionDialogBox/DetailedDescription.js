// this file contains the dialog box component
// the dialog box appears on the click of the name with the details of that particular cryptocurrency

import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import React from "react";
import { Button } from "primereact/button";
import { StyledDialog } from "./DetailedDescription.styled";

const DetailedDescription = ({ details, showPopup, handleShowPopup }) => {
  //function for hiding the dialog box on click of cross button or okay button
  const onHide = () => {
    handleShowPopup(false);
  };

  const footerContent = () => {
    return (
      <div>
        <Button label="Okay" onClick={() => onHide()} />
      </div>
    );
  };

  return (
    <StyledDialog
      visible={showPopup}
      onHide={() => onHide()}
      header={details.name}
      style={{ width: "85vw" }}
      footer={footerContent}
    >
      {details && Object.keys(details).length > 0 && (
        <div>
          <p>
            <b>Name : </b>
            {details.name ? details.name : "No Information Available"}
          </p>
          <p>
            <b>Symbol : </b>
            {details.symbol ? details.symbol : "No Information Available"}
          </p>
          <p>
            <b>Hashing Algorithm : </b>
            {details.hashing_algorithm
              ? details.hashing_algorithm
              : "No Information Available"}
          </p>
          <p>
            <b>Description : </b>
            {details.description && details.description.en ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: details.description && details.description.en,
                }}
              ></div>
            ) : (
              "No Information Available"
            )}
          </p>
          {/* dangerouslySetInnerHTML attribute will read the HTML tags in the string and render them accordingly */}
          <p>
            <b>Market Cap in Euro : </b>
            {details.market_data &&
            details.market_data.market_cap &&
            details.market_data.market_cap.eur
              ? details.market_data.market_cap.eur
              : "No Information Available"}
          </p>
          <p>
            <b>Homepage : </b>
            {details.links &&
            details.links.homepage &&
            details.links.homepage[0] ? (
              <a href={details.links.homepage[0]}>
                {details.links.homepage[0]}
              </a>
            ) : (
              "No Information Available"
            )}
          </p>
          <p>
            <b>Genesis Date : </b>
            {details.genesis_date
              ? details.genesis_date
              : "No Information Available"}
          </p>
        </div>
      )}
    </StyledDialog>
  );
};

export default DetailedDescription;
