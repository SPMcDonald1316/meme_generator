import React from 'react'

class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImgSrc: "http://i.imgflip.com/1bij.jpg"
    }
  }

  

  render() {
    return <h1>MEME GENERATOR</h1>
  }
}

export default MemeGenerator