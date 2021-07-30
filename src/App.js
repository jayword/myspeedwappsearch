import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class WordSearch extends Component{
	constructor(){
		super();
		this.state = {
			word: "",
			queris: []
		}
		this.handleOnChange = this.handleOnChange.bind(this);
		this.getSearchWord = this.getSearchWord.bind(this);
		this.getApi = this.getApi.bind(this);
	}
	
	handleOnChange = event => {
		this.setState({word: event.target.value});
	}
	getSearchWord = () => {
		this.getApi(this.state.word);
	}
	getApi = wordInput => {
		var wordUrl = `http://hn.algolia.com/api/v1/search?query=${wordInput}&tags=story`;
		fetch(wordUrl)
			.then(response => {
				return response.json();
			})
			.then(jsonData => {
				console.log(jsonData.hits);
				this.setState({queris: jsonData.hits});
			})
	}
	
	render(){
		
		return(
			<div className="Main">
				<div className="Appdiv"><div className="App">
					<h2>Speedwapp Search</h2>
					<div><input type="text" name="search" placeholder="Enter search word" onChange={event => this.handleOnChange(event)} onInput={this.getSearchWord} value={this.state.word} /></div>
					
				</div></div>
				<div className="Displays">
					<span className="Spana"><h2>Search Results</h2></span>
					{
						this.state.queris ? (
						<div>
						{
							this.state.queris.filter(items => items.title.toLowerCase().includes(this.state.word)).map((item,index) => (
							<div key={index}>
								<span className="articleTitle"><h3>{item.title}</h3></span>
								<span className="articleUrl"><h4>Url: <i>{item.url ? item.url : "Not Applicable"}</i></h4></span>
								<span className="author"><h4>Author: <i>{item.author ? item.author : "Not Applicable"}</i></h4></span>
								<span className="score"><h4>Article score: <i>{item.relevancy_score ? item.relevancy_score : "0"}</i></h4></span>
								<hr></hr>
							</div>
						))}
						</div>
						) : (
						<p>Attempt a search </p>
						)
					}
				</div>
			</div>
		);
	}
}

