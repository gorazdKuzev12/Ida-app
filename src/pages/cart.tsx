import React, { useState } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import {
  FaTshirt,
  FaRuler,
  FaSortAmountUp,
  FaDollarSign,
  FaTags,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import { CheckoutSummary } from "@/components/Checkout";
import { ShippingDetails } from "@/components/ShippingDetails";
import { PaymentDetails } from "@/components/PaymentDetails";

// Page container
const CartContainer = styled.div`
  display: flex;
  min-height: 120vh;
  background-color: #ffffff;
`;

// Cart Header
const CartHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(180deg, #ffffff 70%, #f4f4f4 30%);
  padding-top: 12rem;
  width: 100%;
`;

const CartTitle = styled.h1`
  font-size: 1.5rem;
  color: #565555;
  margin: 0 auto;
`;

const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  color: gray;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #000;
  }
`;

// Product List & Item
const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex: 2; // 2/3 width
  border-right: 1px solid #e0e0e0;
  background-color: white;
`;

const ProductImage = styled.img`
  width: 140px;
  height: 240px;
  object-fit: cover;
  margin-right: 7rem;
`;

const ProductName = styled.span`
  flex: 2;
  font-size: 1.6rem;
  color: black;
  margin-left: 1.1rem;
  margin-bottom: 1.1rem;
`;

// Total & Checkout Button
const TotalSummary = styled.div``;

const TotalAmount = styled.span`
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: gray;
`;

const CheckoutButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: #8c8c8c;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6b6b6b;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10px;
`;

const ColorIndicator = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #2e294a; // placeholder color
  margin-right: 5px;
`;

const ProductDetailRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 5px;
`;
const ColumnHeader = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin-left: 5px;
`;
const fadeEnter = `
opacity: 0.01;
transform: scale(0.9);
`;

const fadeEnterActive = `
opacity: 1;
transform: scale(1);
transition: opacity 500ms ease-in, transform 500ms ease-in;
`;

const fadeExit = `
opacity: 1;
transform: scale(1);
`;

const fadeExitActive = `
opacity: 0.01;
transform: scale(0.9);
transition: opacity 500ms ease-in, transform 500ms ease-in;
`;

// Include these styles directly in your component for the CSSTransition classNames
const styles = {
  enter: "fade-enter",
  enterActive: "fade-enter-active",
  exit: "fade-exit",
  exitActive: "fade-exit-active",
};

const ProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 5rem;
  border-bottom: 1px solid #e0e0e0;
  color: gray;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: white;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  &.fade-enter {
    ${fadeEnter}
  }

  &.fade-enter-active {
    ${fadeEnterActive}
  }

  &.fade-exit {
    ${fadeExit}
  }

  &.fade-exit-active {
    ${fadeExitActive}
  }
`;

// For the remove icon
const RemoveIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #124e32;
  }
`;
const ColumnsContainer = styled.div`
  display: flex;
  flex: 1; // Take up the remaining space
  flex-direction: column; // stack items vertically
  justify-content: space-between; // evenly space out the items
`;

const TotalTitle = styled.h2`
  color: gray;
  margin-bottom: 20px;
`;

const PromoCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const PromoInput = styled.input`
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  margin-top: 10px;
`;

const LineItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: gray;
  margin-bottom: 10px;
`;

const TotalAmountBig = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: gray;
`;

const TotalSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  flex: 1; // 1/3 width
  border: 1px solid #dadada;
  color: gray;

  margin: 70px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
`;

interface TabProps {
  isSelected?: boolean;
}

const Tab = styled.div<TabProps>`
  padding: 20px 30px;
  margin: 2px;
  width: 100%;
  background-color: ${(props) => (props.isSelected ? "#004d40" : "#e0e0e0")};
  color: ${(props) => (props.isSelected ? "#fff" : "#333")};
  transition: background-color 0.3s ease;
`;

// For the product item transition animation (fade and scale)

// Main Cart Component
export default function Cart() {
  const [products, setProducts] = React.useState([
    {
      id: 1,
      name: "T-shirt",
      size: "M",
      color: "DarkBlue",
      quantity: 10,
      eachPrice: 60,
      totalPrice: 600,
      imageUrl: "/images/kids1.jpg",
    },
    {
      id: 2,
      name: "T-shirt",
      size: "M",
      color: "DarkBlue",
      quantity: 10,
      eachPrice: 60,
      totalPrice: 600,
      imageUrl: "/images/kids1.jpg",
    },
    {
      id: 3,
      name: "T-shirt",
      size: "M",
      color: "DarkBlue",
      quantity: 10,
      eachPrice: 60,
      totalPrice: 600,
      imageUrl: "/images/kids1.jpg",
    },
    // Add other products here...
  ]);

  const [selectedTab, setSelectedTab] = useState("Checkout Summary");
  const [checkoutData, setCheckoutData] = useState({
    subtotal: 300,
    shipping: 20,
    fee: 5,
  });

  const handleCheckout = () => {
    // logic for checking out
    setSelectedTab("Shipping Details");
  };

  const handleContinue = () => {
    // logic for checking out
    setSelectedTab("Payment");
  };
  const handleConfirm = () => {
    // logic for checking out
    setSelectedTab("Order Review");
  };

  const handleRemove = (productId: any) => {
    setProducts((prevProducts) =>
      prevProducts.filter((p) => p.id !== productId)
    );
  };

  return (
    <div>
      <Menu />
      <CartHeader>
        <CartTitle>My Cart</CartTitle>
      </CartHeader>
      <CartContainer>
        <TransitionGroup component={ProductList}>
          {products.map((product) => (
            <CSSTransition key={product.id} timeout={500} classNames={styles}>
              <ProductItem>
                <RemoveIcon onClick={() => handleRemove(product.id)}>
                  <FaTimes />
                </RemoveIcon>
                <ProductImage src={product.imageUrl} alt={product.name} />

                <ColumnsContainer>
                  {/* Add Product Name Here */}
                  <ProductName>Black ovesized T-shirt</ProductName>

                  <div style={{ display: "flex", width: "100%" }}>
                    <Column>
                      <ProductDetailRow>
                        <FaTshirt size={18} />
                        T-shirt
                      </ProductDetailRow>
                      <ProductDetailRow>
                        <FaRuler size={18} />
                        Size: {product.size}
                      </ProductDetailRow>
                      <ProductDetailRow>
                        <ColorIndicator
                          style={{ backgroundColor: product.color }}
                        ></ColorIndicator>
                        Color: {product.color}
                      </ProductDetailRow>
                    </Column>
                    <Column>
                      <ColumnHeader>Quantity</ColumnHeader>
                      <ProductDetailRow>
                        <FaSortAmountUp size={18} />
                        {product.quantity}
                      </ProductDetailRow>
                    </Column>
                    <Column>
                      <ColumnHeader>Each</ColumnHeader>
                      <ProductDetailRow>
                        <FaDollarSign size={18} />
                        {product.eachPrice}
                      </ProductDetailRow>
                    </Column>
                    <Column>
                      <ColumnHeader>Total</ColumnHeader>
                      <ProductDetailRow>
                        <FaDollarSign size={18} />
                        {product.totalPrice}
                      </ProductDetailRow>
                    </Column>
                  </div>
                </ColumnsContainer>
              </ProductItem>
            </CSSTransition>
          ))}
        </TransitionGroup>

        <TotalSummaryContainer>
          <Tabs>
            <Tab isSelected={selectedTab === "Checkout Summary"}>
              Checkout Summary
            </Tab>
            <Tab isSelected={selectedTab === "Shipping Details"}>
              Shipping Details
            </Tab>
            <Tab isSelected={selectedTab === "Payment"}>Payment</Tab>
          </Tabs>

          {selectedTab === "Checkout Summary" && (
            <CheckoutSummary {...checkoutData} onCheckout={handleCheckout} />
          )}
          {selectedTab === "Shipping Details" && (
            <ShippingDetails onContinue={handleContinue} />
          )}
          {selectedTab === "Payment" && (
            <PaymentDetails onConfirm={handleConfirm} />
          )}
          {selectedTab === "Order Review" && <div>Order Review Content</div>}
        </TotalSummaryContainer>
      </CartContainer>
      <Footer />
    </div>
  );
}
