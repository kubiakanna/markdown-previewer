import './App.css';
import React from 'react';
let marked = require("marked");

const initialState = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: initialState
    };
  }

  handleChange = (e) => {
    this.setState({ 
      text: e.target.value
     });
  }

  wipeClean = () => {
    this.setState({
      text: ''
    })
  }

render(){
  return (
    <div className="App">
      <div className="header">
        <h2>Markdown Previewer</h2>
      </div>

      <div className="editor">
        <h5 className="rounded">Editor</h5>
        <textarea 
          className="fields rounded" 
          id="editor" 
          value={this.state.text} 
          onChange={this.handleChange}
        >
        </textarea>
        <button className="button rounded" onClick={this.wipeClean}>Clear</button>
      </div>

      <div className="previewer">
        <h5 className="rounded">Previewer</h5>
        <div
          className="fields rounded"
          id="preview"
          dangerouslySetInnerHTML = {{ __html: marked(this.state.text, { breaks: true }) }}
        >
        </div>
      </div>



          
    </div>
  );}
}