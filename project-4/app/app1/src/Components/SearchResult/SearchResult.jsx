import React from "react";
import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

const SearchResult = ({ data: foods }) => {
  return (
    <>
      <FoodCardContainer>
        <FoodCard>
          {foods?.map((food) => (
            <Foodcarrds key={food.name}>
              <div className="food_image">
                <img src={BASE_URL + food.image} alt={food.name} />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{food.name}</h3>
                  <p>{food.text}</p>
                </div>
                <div>
                  <Button>${food.price.toFixed(2)}</Button>
                </div>
              </div>
            </Foodcarrds>
          ))}
        </FoodCard>
      </FoodCardContainer>
      {/* <FoodZoneText>Food Zone</FoodZoneText> */}
    </>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  background-image: url("/bg1.png");
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 210px);
`;

const FoodCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 10px;

  @media (max-width: 768px) {
    column-gap: 15px;
    row-gap: 20px;
  }
  
  @media (max-width: 480px) {
    column-gap: 10px;
    row-gap: 15px;
  }
`;

const Foodcarrds = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;
  border-image-source: radial-gradient(
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(88.69% 288.78% at 100.28% 112.58%, #98f9ff 0%, rgba(255, 255, 255, 0) 100%);
  background: url(".png"),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.68%,
      rgba(76, 144, 215, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1442px);
  border-radius: 20px;
  display: flex;
  padding: 8px;
  
  .food_info {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
    
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    
    button {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    width: 290px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 130px;
  }
`;

const FoodZoneText = styled.h1`
  position: absolute;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  margin: 0;
  text-align: center;
  letter-spacing: 2px;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
