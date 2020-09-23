import React from 'react'

class MemeGenerator extends React.Component {
  state = {
    topText: "",
    bottomText: "",
    randomImgSrc: "http://i.imgflip.com/1bij.jpg",
    memeImages: []
  }
  

  componentDidMount = () => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({ memeImages: memes})
      })
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const randomNum = Math.floor(Math.random() * this.state.memeImages.length)
    const source = this.state.memeImages[randomNum].url
    this.setState({
      randomImgSrc: source
    })
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />

          <input 
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          
          <button>Generate Meme</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImgSrc} alt="Random Meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator