import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./Components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selected, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        console.log(json);
        setData(json); // Set the fetched data here
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
        setLoading(false);
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue === "") {
      setFilteredData(data); // Reset to the original data if search is cleared
    } else {
      const filter = data?.filter((food) =>
        food.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filter);
    }
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }
    const filter = data?.filter(
      (food) => food.type.toLowerCase() === type.toLowerCase()
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="search">
            <input onChange={searchFood} placeholder="Search food" />
          </div>
        </TopContainer>
        <FilterContainer>
          {filterBtns.map((value) => (
            <Button
              isSelected={selected === value.type}
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} /> {/* Pass the fetched data */}
    </>
  );
}

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px; /* Add some padding for responsiveness */
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .logo img {
    max-height: 60px;
    width: auto;
  }

  .search {
    input {
      background-color: transparent;
      border-radius: 5px;
      color: white;
      border: 1px solid red;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      width: 250px; /* Ensure the search bar has a reasonable width */
      
      @media (max-width: 768px) {
        width: 200px; /* Adjust search bar width for tablet and smaller screens */
      }

      @media (max-width: 480px) {
        width: 150px; /* Adjust for smaller mobile screens */
      }
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    flex-wrap: wrap; /* Allow the buttons to wrap on smaller screens */
    justify-content: space-evenly;
  }
`;

export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "blue" : "red")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "red")};

  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 10px;
  }
`;
