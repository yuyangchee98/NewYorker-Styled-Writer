import './App.css';
import React from 'react';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.helpBoxRef= React.createRef();
        this.state = {
            curTime : new Date().toLocaleString()
        }
      }

    componentDidMount() {
        document.getElementById("heading").innerHTML = localStorage["title"] || "Title"; 
        document.getElementById("category").innerHTML = localStorage["category"] || "Category"; 
        document.getElementById("author").innerHTML = localStorage["author"] || "Author"; 
        document.getElementById("content").innerHTML = localStorage["text"] || "Just Write. This text will be saved automatically.";
        setInterval(() => {
            localStorage["title"] = document.getElementById("heading").innerHTML; // heading div
            localStorage["text"] = document.getElementById("content").innerHTML; // content div
        }, 1000);

    }

    openCloseForm() {
        if (this.helpBoxRef.current.style.display === "block"){
            this.helpBoxRef.current.style.display = "none";    
        }
        else {
            this.helpBoxRef.current.style.display = "block";
        }
        
    }

    render(){
        return (
            <div className="App">
                <div id="help">
                    <button className="help-btn" onClick={()=>this.openCloseForm()}>
                        <i className="fa fa-question-circle" aria-hidden="true"></i>
                    </button>
                </div>
                <div ref={this.helpBoxRef} className="help-box">
                    <div className="close-bar">
                        <button className="close-btn" onClick={()=>this.openCloseForm()}>
                            <i className="fa fa-times-circle" aria-hidden="true"></i>
                        </button>
                    </div>
                    <h1><em>FAKE IT TILL YOU MAKE IT</em> &nbsp; WRITER</h1>
                    <p>
                        Write like it's for The New Yorker. 
                        Use this app to begin. 
                    </p>

                    <h2>Getting Started</h2>
                    <p>Simply begin typing like below:</p>
                    <video className="ex-vid" controls autoPlay>
                        <source src="/videos/example.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                    <h2>Saving</h2>
                    <p>Simply CTRL+P (Windows) or CMD+P (Mac) to get a PDF of your writing.</p>
                </div>

                <header>
                    <h2 className="editable" contentEditable="true" id="category">Category</h2>
                    <h1 id="heading" className="editable" contentEditable="true">Title</h1>
                    <p>
                        By <span id="author" className="author-name editable" contentEditable="true">Author</span> 
                        <br></br> 
                        <time>{this.state.curTime}</time>
                    </p>
    
                </header>
    
                <hr></hr>
                <div className="main">
                    <div id="content" className="writing-para" contentEditable="true"></div>
                </div>
            </div>
        );
    }
}