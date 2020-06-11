import React, {Component} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles, makeStyles  } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import EmptyCitiesList from "../EmptyCitiesList";
import Select from "@material-ui/core/Select";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import city from "../../data/city"
import Category from "../../data/category"
import filterIcon from "../img/filter-icon.png"
import Data from "../../data/data"
import './main.css';

const useStyles = theme => ({
    root: {
        width: 300,
    },
});
makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

 class Main extends Component {
    state = {
        value: [35, 200],
        isCheck: false,
        cityName: "",
        name: "hai",
        checkBox: [],
        categories: [],
        data: Data,
        menuIsOpen:false
    };

     onMenuClick = () => {
         this.setState(({menuIsOpen}) => {
             return {
                 menuIsOpen:!menuIsOpen
             };
         });
     };
    valuetext = (value) => {
        return `${value}`;
    };
    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    };
     handleChanges = event => {
         const name = event.target.name;
         this.setState({
             ...this.state,
             [name]: event.target.value
         });
     };
     toogleCategory = (id) => {
         if(this.state.categories.includes(id))
         {
             const idx = this.state.categories.findIndex((el) => el === id);
             const newArr = [
                 ...this.state.categories.slice(0, idx),
                 ...this.state.categories.slice(idx +1)
             ];
             this.setState({categories: newArr});
         }
         else
         {
             const newArr = [
                 ...this.state.categories,id
             ];
             this.setState({categories: newArr})
         }
     };
     FilterButtonClick = () => {
             const rezAfterFilter = Data.filter(item =>
                 (
                     ((this.state.cityName)
                         ? item.cityName === this.state.cityName
                         : true
                     )
                 )
             ).filter(item =>
                 (
                     ((this.state.categories.length)
                         ?  this.state.categories.includes(item.category)
                         :  true
                     )
                 )
             ).filter(item =>
                 (
                     ((this.state.value[0] !== this.state.value[1])
                         ?  item.price >= this.state.value[0] && item.price <= this.state.value[1]
                         :  true
                     )
                 )
             );
         this.setState({data: rezAfterFilter})
     };
    render() {
        const { classes } = this.props;
        const cities = city.map((item) => {
            return (
                    <option key={item.id}>{item.name}</option>
            );
        });
        const categories = Category.map((item) => {
            return (
                <div className="categories-block"
                     key={item.id}>
                    <div className="categories-dropdown">
                        <div className="check-box">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onChange={() =>this.toogleCategory(item.id)}
                                    />
                                }
                                label={item.name}
                            />
                        </div>
                    </div>
                </div>
            );
        });
        const cardInfo = this.state.data.map((item) => {
            return (
                <div className="block"
                key={item.id}>
                    <div className="city-img">
                        <img src={item.img} alt="city-img"/>
                    </div>
                    <div className="city-name">
                        {item.cityName}
                    </div>
                    <div className="city-text-wrapper">
                        <div className="card-heading">
                            {item.name}
                        </div>
                        <div className="card-info-wrapper">
                            <div className="card-category">
                                {item.nameOfCategory}
                            </div>
                            <div className="card-price">
                                { '$' + item.price}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="page-wrapper">
                {/*<div className="background"/>*/}
                <div className="blocks-wrapper">
                    <div className="filter-icon"
                         onClick={this.onMenuClick}>
                        <i className="fa fa-filter"></i>
                    </div>
                    <div className="container" style={{display: this.state.menuIsOpen ? 'none' : 'block'}}>
                        <div className="city-block">
                            <div className="city-dropdown">
                                <div>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="cityName-native-simple">City</InputLabel>
                                        <Select
                                            native
                                            value={this.state.cityName}
                                            onChange={this.handleChanges}
                                            inputProps={{
                                                name: "cityName",
                                                id: "cityName-native-simple"
                                            }}
                                        >
                                            <option aria-label="None" value="" />
                                            {cities}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div className="categories-heading">
                            Categories
                        </div>
                        <div>
                            {categories}
                        </div>
                        <div className="price-block">
                            <div className="price-heading">
                                Price
                            </div>
                            <div className="price-dropdown">
                                <div className={classes.root}>
                                    <Typography id="range-slider" gutterBottom>
                                    </Typography>
                                    <Slider
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        valueLabelDisplay="auto"
                                        aria-labelledby="range-slider"
                                        getAriaValueText={this.valuetext}
                                        min={0}
                                        max={250}
                                    />
                                </div>
                                <div className="price-wrapper">
                                    <div className="price">
                                        {'$' + this.state.value[0] + '   -   ' + '$' + this.state.value[1]}
                                    </div>
                                    <div className="filter-button"
                                         onClick={this.FilterButtonClick}>
                                        Filter
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.data.length === 0 ? <EmptyCitiesList/> :
                        <div className="main-info">
                            <div className="card-wrapper">
                                {cardInfo}
                            </div>
                        </div>
                    }
                </div>
                {/*<div className="background background-footer"/>*/}
            </div>
        );
    }
};
export default withStyles(useStyles)(Main)