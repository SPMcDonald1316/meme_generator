import React from 'react'

class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImgSrc: "http://i.imgflip.com/1bij.jpg",
      memeImages: []
    }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({ memeImages: memes})
      })
  }

  render() {
    return (
      <div>
        <form className="meme-form">
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
      </div>
    )
  }
}

export default MemeGenerator