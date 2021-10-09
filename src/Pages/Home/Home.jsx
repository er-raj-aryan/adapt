import React, { useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import Product from "../../Components/Products/Product.jsx";
import useStyle from "./style.js";

// language selector
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// redux
import { connect } from "react-redux";

// translation
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";

const languages = [
  {
    code: 'ar',
    name: 'Default (en)',
    dir: '',
    country_code: 'sa',
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
];

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

function Home({ products }) {
  const classes = useStyle();
const [searchTerm , setSearchTerm] = React.useState("")
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  // translation
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <div className={classes.root}>
      <img
        src="https://dsn0yv0bfu3gb.cloudfront.net/wp-content/uploads/2017/12/ecommerce-and-shopping-banner.jpg"
        alt=""
        className={classes.img}
      />
      
      <Grid className={classes.langauge}>
        <Box sx={{ minWidth: 120 }} >
          <FormControl fullWidth>
            <InputLabel>
            Language
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={name}
              label="Language"
              onChange={handleChange}
              placeholder="Default"
            >
              {languages.map(({ code, name, country_code }) => (
                <MenuItem
                  value={name}
                  key={country_code}
                  onClick={() => {
                    i18next.changeLanguage(code);
                  }}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <TextField type='text' placeholder="Search...." className={classes.searchInput} onChange={(event)=>{setSearchTerm(event.target.value)}} />
      <Grid container spacing={2} className={classes.container}>
        {products.filter((val)=> {
          if (searchTerm === ""){
            return val
          }else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).map((e) => {
          return (
            <Grid item className={classes.item} xs={12} sm={6} md={4} lg={3}>
              <Product product={e} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default connect(mapStateToProps)(Home);
