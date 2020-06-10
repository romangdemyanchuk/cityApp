import React, {Component} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles, makeStyles  } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Category from "../../data/category"
import Data from "../../data/data"
import cityImg1 from "../img/cityImg1.jpg"
import cityImg2 from "../img/cityImg2.jpg"
import cityImg3 from "../img/cityImg3.jpg"
import cityImg4 from "../img/cityImg4.jpg"
import cityImg5 from "../img/cityImg5.jpg"
import './main.css';

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
        value: [35, 200],
        isCheck: false,
        age: "",
        name: "hai",
        checkBox: [
            { Architecture:false},
            { Business:false},
            { Design:false},
            { Marketing:false},
            { Photography:false}
        ],
        data: [
		{
			id:1,
			name:'Affiliate Marketing - A Beginners Guide to Earning online1',
			city:1,
			category:2,
			price:50,
			cityName: 'London',
			nameOfCategory:'Architecture',
			img: cityImg1,
            isCheck:false
		},
        {
			id:2,
			name:'Affiliate Marketing - A Beginners Guide to Earning online2',
			city:4,
			category:1,
			price:100,
			cityName: 'Paris',
			nameOfCategory:'Business',
			img: cityImg2,
            isCheck:false
		},
        {
			id:3,
			name:'Affiliate Marketing - A Beginners Guide to Earning online3',
			city:5,
			category:1,
			price:1,
			cityName: 'New York',
			nameOfCategory:'Design',
			img: cityImg3,
            isCheck:false
		},
		{
			id:4,
			name:'Affiliate Marketing - A Beginners Guide to Earning online4',
			city:2,
			category:4,
			price:150,
			cityName: 'Tokio',
			nameOfCategory:'Marketing',
			img: cityImg4,
            isCheck:false
		},
		{
			id:5,
			name:'Affiliate Marketing - A Beginners Guide to Earning online5',
			city:3,
			category:5,
			price:200,
			cityName: 'Madrid',
			nameOfCategory:'Photography',
			img: cityImg5,
            isCheck:false
		}
    ]
    };
    changeCheckBox = name => {
        console.log('name', name);
        this.state.checkBox.map((item) => {
            const rezAfterFilter = this.state.checkBox(item => (item.cityName === this.state.age &&
                item.price >= this.state.value[0] && item.price <= this.state.value[1]));
            // console.log('rez', rezAfterFilter);
            this.setState({
                data: rezAfterFilter
            });
            // const priceRez = Data.filter(item => item.price >= this.state.value[0] && item.price <= this.state.value[1]);
            // console.log('rez', priceRez);
            // this.setState({
            //     data: priceRez
            // });
            // const categoryRez = Data.filter(item => item.nameOfCategory === this.state.age);
            // this.setState({
            //     data: categoryRez
            // });
        });
        this.setState({
            // [e.target.name]: e.target.checked,
            isCheck: !this.state.isCheck
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
     FilterButtonClick = () => {
         // const rez = [];
         Data.map((item) => {
             const rezAfterFilter = Data.filter(item => (item.cityName === this.state.age &&
                 item.price >= this.state.value[0] && item.price <= this.state.value[1]));
             // console.log('rez', rezAfterFilter);
             this.setState({
                 data: rezAfterFilter
             });
             // const priceRez = Data.filter(item => item.price >= this.state.value[0] && item.price <= this.state.value[1]);
             // console.log('rez', priceRez);
             // this.setState({
             //     data: priceRez
             // });
             // const categoryRez = Data.filter(item => item.nameOfCategory === this.state.age);
             // this.setState({
             //     data: categoryRez
             // });
         });


     };
    render() {
        console.log(this.state.data);
        if (this.state.data.length===0) {
        }
        const { classes } = this.props;
        const categories = Category.map((item) => {
            return (
                <div className="categories-block"
                     key={item.id}>
                    <div className="categories-dropdown">
                        <div className="check-box">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.showFavorite}
                                        onChange={() => this.changeCheckBox(item.name)}/>
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
                        <img src={item.img}/>
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
                    <div className="main-info">
                        <div className="card-wrapper">
                            {cardInfo}
                        </div>
                    </div>

                </div>
                <div className="background background-footer"/>
            </div>
        );
    }
};

export default withStyles(useStyles)(Main)