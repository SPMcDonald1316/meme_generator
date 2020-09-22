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
    return <h1>MEME GENERATOR</h1>
  }
}

export default MemeGenerator