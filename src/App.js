import React from 'react'
import './App.css';
import { Header } from './Components/Header'
import { SearchBar } from './Components/SearchBar'
import { emojiList } from './resources/emojiList'   ///them fiel json
import { filterEmoji } from './Controllers/emojiUltis'
import { EmojiList } from './Components/EmojiList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    // this.createEmojis = this.createEmojis.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    this.setState({ searchText: event.target.value // lay gia tri nguoi dung nhap vao})
  }

  render() {
    let filteredEmojis = filterEmoji(this.state.searchText, emojiList)


    // kỹ thuật truyên biến Object
    // let emoji = {
    //   symbol:"#"
    //   title:'100'
    // }
    // <Emoji {...emoji//emojifile[0]}/>  

    return (
      <React.Fragment>
        <Header />
        <SearchBar onChange={this.handleInput} />
        <EmojiList emojis={filteredEmojis} />
      </React.Fragment>
      // truyển  props emoji <emoji symboy = "💯" title"100/>

    );
  }

}

export default App;
