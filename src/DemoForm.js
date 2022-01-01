import React,{Component} from 'react';

class DemoForm extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            errors:{}
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleinputChange=this.handleinputChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.validate()){
           console.log(this.state)
            this.setState({
                username:'',
                password:''
            })
            alert("Form submitted");
        }
    }
    handleinputChange(e){
        let username = this.state.username;
        let password = this.state.password;
        if(e.target.id==="username"){
            this.setState({
                username:e.target.value
            })
        }
        if(e.target.id==="password"){
            this.setState({
                password:e.target.value
            })
        }
    }
    validate(){
        let isValid = true;
        let validationerrors={};
        let userRegex=/^(?=.*[A-Za-z])(?=.*[0-9])[\w]{6,}$/
        let passwordRegex = /^(?=.*[\d])(?=.*[A-zAa-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/
        //let passwordRegex =/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#$^%&!()])(?=\\S+$).{8,20}$/

        if(!this.state.username){
            isValid=false;
            validationerrors['username']="Please enter a username"
        
        }
        if(this.state.username.length<6){
            isValid=false;
            validationerrors['username']="Please make sure to have username with atleast 6 characters."
        }
        if(!userRegex.test(this.state.username)){
            isValid=false;
            validationerrors['username']="Please make sure to use username with alphabets or numbers."
        }
        if(!this.state.password){
            isValid=false;
            validationerrors['password']="Please enter a password. It cannot be empty"
        }
        if(this.state.password.length<6){
            isValid=false;
            validationerrors['password']="Please make sure to have password with atleast 6 characters"
        } 
        if(!passwordRegex.test(this.state.password)){
            isValid=false;
            validationerrors['password']="Please make sure to have password with special characters like @!#$%& and numbers 0-9."
        }
  
        console.log(this.state)
        this.setState({
            errors:validationerrors
        })
        return isValid;
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label text="username">Username: </label>
                <input 
                    id="username"
                    type="text" 
                    value={this.state.username}
                    onChange={this.handleinputChange}
                />
                <div className="errors">{this.state.errors.username}</div>
                <label text="password">Password : </label>
                <input 
                    id="password"
                    type="password" 
                    value={this.state.password} 
                    onChange={this.handleinputChange}
                />
                <div className="errors">{this.state.errors.password}</div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
export default DemoForm