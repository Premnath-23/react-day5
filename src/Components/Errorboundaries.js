import React, { Component } from 'react'

export default class Errorboundaries extends Component {
    state={
        error:null,
    }

    static getDerivedStateFromError(error)
    {
        return {error:error};
    }

    componentDidCatch(error,info)
    {
        console.log(error,info);
    }

  render() {
    if(this.state.error)
  {
    return  <p style={{color:"red"}}>Something went Wrong</p>
  }
    return this.props.children
  }
}
