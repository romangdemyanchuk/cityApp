import React, {Component} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles, makeStyles  } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import cardImage from "../img/cardImage.jpg"
import Category from "../../data/category"
import './main.css';
import {city} from "../../data/city";

const useStyles = theme => ({
    root: {
        width: 300,
    },
});
const useStyle = makeStyles(theme => ({
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
        value: [20, 37],
        isCheck: false,
        age: "",
        name: "hai"
    };
    changeCheckBox = e => {
        this.setState({
            [e.target.name]: e.target.checked
        });
    };

    valuetext = (value) => {
        return `${value}°C`;
    };
    handleChange = (event, newValue) => {
        console.log(newValue)
        this.setState({value: newValue});
    };
     handleChanges = event => {
         const name = event.target.name;
         this.setState({
             ...this.state,
             [name]: event.target.value
         });
     };
     ChangeShowFavorite = () => {
         this.setState({showFavorite: !this.state.showFavorite});
     };
    render() {
        console.log(Category);
        const { classes } = this.props;
        const clazz = this.props;
        const {isCheck} = this.state;
        const categories = Category.map((item) => {
            return (
                <div className="categories-block">
                    <div className="categories-dropdown">
                        <div className="check-box">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.showFavorite}
                                        onChange={this.changeCheckBox}/>
                                }
                                label={item.name}
                            />
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div>
                <div className="background"/>
                <div className="blocks-wrapper">
                    <div className="container">
                        <div className="city-block">
                            <div className="city-dropdown">
                                <div>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="age-native-simple">City</InputLabel>
                                        <Select
                                            native
                                            value={this.state.age}
                                            onChange={this.handleChanges}
                                            inputProps={{
                                                name: "age",
                                                id: "age-native-simple"
                                            }}
                                        >
                                            <option aria-label="None" value="" />
                                            <option>London</option>
                                            <option>Madrid</option>
                                            <option>New York</option>
                                            <option>Paris</option>
                                            <option>Tokio</option>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div className="categories-heading">
                            Categories
                        </div>
                        <div>{categories}</div>
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
                                    />
                                </div>
                                <div className="price-wrapper">
                                    <div className="price">
                                        {'$' + this.state.value[0] + '   -   ' + '$' + this.state.value[1]}
                                    </div>
                                    <div className="filter-button">
                                        Filter
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-info">
                        <div className="blocks-wrapper">
                            <div className="block">
                                <img src={cardImage}/>
                                <div className="city-name">
                                    London
                                </div>
                                <div className="card-heading">
                                    Affiliate Marketing - A Beginners Guide to Earning online
                                </div>
                                <div className="card-wrapper">
                                    <div className="card-category">
                                        Architechture
                                    </div>
                                    <div className="card-price">
                                        $115
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <img src={cardImage}/>
                                <div className="city-name">
                                    London
                                </div>
                                <div className="card-heading">
                                    Affiliate Marketing - A Beginners Guide to Earning online
                                </div>
                                <div className="card-wrapper">
                                    <div className="card-category">
                                        Architechture
                                    </div>
                                    <div className="card-price">
                                        $115
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <img src={cardImage}/>
                                <div className="city-name">
                                    London
                                </div>
                                <div className="card-heading">
                                    Affiliate Marketing - A Beginners Guide to Earning online
                                </div>
                                <div className="card-wrapper">
                                    <div className="card-category">
                                        Architechture
                                    </div>
                                    <div className="card-price">
                                        $115
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blocks-wrapper">
                            <div className="block">
                                <img src={cardImage}/>
                                <div className="city-name">
                                    London
                                </div>
                                <div className="card-heading">
                                    Affiliate Marketing - A Beginners Guide to Earning online
                                </div>
                                <div className="card-wrapper">
                                    <div className="card-category">
                                        Architechture
                                    </div>
                                    <div className="card-price">
                                        $115
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <img src={cardImage}/>
                                <div className="city-name">
                                    London
                                </div>
                                <div className="card-heading">
                                    Affiliate Marketing - A Beginners Guide to Earning online
                                </div>
                                <div className="card-wrapper">
                                    <div className="card-category">
                                        Architechture
                                    </div>
                                    <div className="card-price">
                                        $115
                                    </div>
                                </div>
                            </div>
                            <div className="block">
                                <img src={cardImage}/>
                                <div className="city-name">
                                    London
                                </div>
                                <div className="card-heading">
                                    Affiliate Marketing - A Beginners Guide to Earning online
                                </div>
                                <div className="card-wrapper">
                                    <div className="card-category">
                                        Architechture
                                    </div>
                                    <div className="card-price">
                                        $115
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="background background-footer"/>
            </div>
        );
    }
};

export default withStyles(useStyles)(Main)