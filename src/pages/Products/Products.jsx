import { Link } from "react-router-dom";
import flowers from "../../Flowers.js";
import Card from "../../component/Card/Card";
import "./Products.css";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { InputLabel, NativeSelect } from "@mui/material";

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

  const handleSelectChange = (event) => {
    const category = event.target.value;
    filterItems(category);
  };

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
              label="Box Bouquet"
              onClick={() => filterItems("Box Bouquets")}
            />
            <Tab
              value="for"
              label="Balloon Bouquet"
              onClick={() => filterItems("Balloon Bouquets")}
            />
            <Tab
              value="five"
              label="Wedding Bouquet"
              onClick={() => filterItems("Wedding Bouquets")}
            />
          </Tabs>
        </Box>
      </div>
      <div className="filter-select">
        <Box sx={{ minWidth: 120 }} className="select-box">
          <FormControl fullWidth  >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Category
            </InputLabel>
            <NativeSelect
              defaultValue="All"
              inputProps={{
                name: "category",
                id: "uncontrolled-native",
              }}
              onChange={handleSelectChange}
           
            >
              
              <option value="All" className="custom-select">All</option>
        <option value="Bouquets" className="custom-select">Bouquet</option>
        <option value="Box Bouquets" className="custom-select">Box Bouquet</option>
        <option value="Balloon Bouquets" className="custom-select">Balloon Bouquet</option>
        <option value="Wedding Bouquets" className="custom-select">Wedding Bouquet</option>
     
            </NativeSelect>
          </FormControl>
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
