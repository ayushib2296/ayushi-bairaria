//this file contains the table component consisting the list of all the cryptocurrencies
//Prime React Component Library is used for creating the table
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import React, { useState, useEffect } from "react";
import { Column } from "primereact/column";
import {
  getAllCryptoCurrencies,
  getOneCryptoCurrency,
} from "../ServiceCalls/axiosServiceCalls";
import {
  StyledImg,
  StyledTable,
  ContainerDiv,
  StyledName,
} from "./CryptoDataTable.styled";
import DetailedDescription from "../DescriptionDialogBox/DetailedDescription";

const CryptoDataTable = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [singleResponse, setSingleResponse] = useState({});

  useEffect(() => {
    //to get the list of all the crypto currencies on the initial load of the page
    getAllCryptoCurrencies().then((data) => {
      setCryptoCurrencies(data); //storing the response in a state hook
    });
  }, []);

  const header = (
    <label>CRYPTO CURRENCY CHART</label> //heading for the table
  );

  const footer = "Please click on each name to know more details";

  const imageBodyTemplate = (rowData) => {
    //template for image column
    return <StyledImg src={rowData.image} alt={rowData.name}></StyledImg>;
  };

  const nameBodyTemplate = (rowData) => {
    //template for name column
    return (
      <StyledName
        onClick={() => {
          onNameClick(rowData.id);
        }}
      >
        <b>{rowData.name}</b>
      </StyledName>
    );
  };

  const onNameClick = (id) => {
    //onClick event handler for clicking on name
    getOneCryptoCurrency(id).then((data) => {
      //axios call promise resolved
      setSingleResponse(data); // storing response of single crypto currency using state hook
    });
    setShowPopup(true); //to make the dialog box visible on clicking of name
  };

  const handleShowPopup = (val) => {
    //to get the show popup value from child to parent
    setShowPopup(val);
  };

  const formatCurrency = (value) => {
    //formatting prices and adding pound/eur sign before them
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "EUR",
    });
  };

  //templates for prices
  const priceHigh_24hTemplate = (rowData) => {
    return formatCurrency(rowData.high_24h);
  };

  const priceLow_24hTemplate = (rowData) => {
    return formatCurrency(rowData.low_24h);
  };

  const currentPriceTemplate = (rowData) => {
    return formatCurrency(rowData.current_price);
  };

  //rendering PrimeReact DataTable
  return(
    <div>
          <ContainerDiv>
              <StyledTable value={cryptoCurrencies} header={header} footer={footer}>
                  {/* below code contains the definitions of each column
                        header attribute contains the name of the column to be displayed
                        field attribute defines the response key attribute to be used
                   */}
                <Column header="Image" body = {imageBodyTemplate}></Column>
                <Column header="Name" body = {nameBodyTemplate}></Column>
                <Column header="Symbol" field= "symbol"></Column>
                <Column header="Current Price" field= "current_price" body = {currentPriceTemplate}></Column>
                <Column header="High 24 Hour Price" field= "high_24h" body = {priceHigh_24hTemplate}></Column>
                <Column header="Low 24 Hour Price" field= "low_24h" body = {priceLow_24hTemplate}></Column>
              </StyledTable>
          </ContainerDiv>
          { //to render the modal (dialog box/popup) if showPopup variable is true
                showPopup && 
                <DetailedDescription 
                    details={singleResponse}
                    showPopup={showPopup}
                    handleShowPopup={handleShowPopup}
                />
          }
          </div>
  )
};

export default CryptoDataTable;
