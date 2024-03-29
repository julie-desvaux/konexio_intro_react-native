import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import Svg, { Image } from "react-native-svg";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
		};
	}

	async componentDidMount() {
		const url = "http://restcountries.eu/rest/v2/all";
		const response = await fetch(url);
		let countries = await response.json();
		// console.log(countries);
		this.setState({ countries });
	}

	renderItem = ({ item }) => {
		console.log("flag", item.flag);
		return (
			<View style={styles.country}>
				<Text>{item.name}</Text>
				<Text>{item.capital}</Text>
				<Svg>
					<Image href={`${item.flag}`} style={styles.image} />
				</Svg>
			</View>
		);
	};

	render() {
		const { countries } = this.state;
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Exo 2</Text>
				<FlatList data={countries} renderItem={this.renderItem} keyExtractor={(countries) => countries.alpha3Code} />
			</View>
		);
	}
}

const win = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {},
	title: {
		paddingTop: 30,
		fontSize: 50,
		textDecorationLine: "underline",
		textAlign: "center",
	},
	country: {
		paddingTop: 20,
		marginHorizontal: 16,
	},
	image: {
		flex: 1,
		width: 150,
		resizeMode: "contain",
	},
});

export default App;
