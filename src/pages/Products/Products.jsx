import { Link } from "react-router-dom";
import flowers from "../../Flowers.js";
import Card from "../../component/Card/Card";
import "./Products.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(flowers.products);
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function filterItems(category) {
    if (category === "All") {
      setFilteredProducts(flowers.products);
    } else {
      setFilteredProducts(
        flowers.products.filter((item) => item.categoryName === category)
      );
    }
  }

  return (
    <>
     
      <div className="mini-nav">
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="rgb(209, 164, 164)"
            indicatorColor="rgb(209, 164, 164)"
            aria-label="secondary tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#8a053f",
              },
              "& .MuiTab-root": {
                color: "#8a053f",
              },
              "& .Mui-selected": {
                color: "rgb(209, 164, 164)",
              },
            }}
          >
            <Tab value="one" label="All" onClick={() => filterItems("All")} />
            <Tab
              value="two"
              label="Bouquets"
              onClick={() => filterItems("Bouquets")}
            />
            <Tab
              value="three"
              label="Box Bouquets"
              onClick={() => filterItems("Box Bouquets")}
            />
            <Tab
              value="for"
              label="Balloon Bouquets"
              onClick={() => filterItems("Balloon Bouquets")}
            />
            <Tab
              value="five"
              label="Wedding Bouquets"
              onClick={() => filterItems("Wedding Bouquets")}
             
            />
          </Tabs>
        </Box>
      </div>
      <div className="cards">
        {filteredProducts.map((flower) => (
          <div key={flower.productId} className="smooth-animation">
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              duration={2.5}
              transition={2}
            >
              <Link to={`/product/${flower.productId}`}>
                <Box
                  sx={{
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Card flower={flower} />
                </Box>
              </Link>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </>
  );
}
