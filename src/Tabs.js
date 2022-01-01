import { render } from '@testing-library/react';
import React,{Component} from 'react';
const Tablist = ["Tab1","Tab2","Tab3","Tab4","Tab5"]
class Tabs extends Component{
    constructor(){
        super();
        this.state={
            toggleState:1
        }
        this.handleTabChange=this.handleTabChange.bind(this)
    }
    handleTabChange(index){
        console.log(index);
        this.setState({
            toggleState:index
        })
    }
    render(){
        let numberOftabs = Tablist.length;
        return(
           
            <div className="container">
                <div className="tabslist">
                {
                    Tablist.map((item,index)=>{
                        return(
                            <div 
                            className={this.state.toggleState===(index+1)?"tabs active-tabs":"tabs"}
                            onClick={()=>this.handleTabChange(index+1)}
                            key={item}>
                                <h2>{item}</h2>
                            </div>
                         )
                    })
                } 
                </div>
                <div className="content-tabs">
                    {
                      Tablist.map((item,index)=>{
                         return(
                            <div className={this.state.toggleState===(index+1)?"content active-content":"content"} key={item}>
                              <h2> Content {index+1}</h2>
                              <p>Lorem ipsum dolor Lorem ipsum dolor
                                 Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                              </p>
                            </div>
                         )
                      })

                    }
                    {/* <div 
                    className={this.state.toggleState===1?"content active-content":"content"}>
                        <h1>Content 1 </h1>
                        <p>Lorem ipsum dolor Lorem ipsum dolor
                            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                        </p>
                    </div>
                    <div className={this.state.toggleState===2?"content active-content":"content"}>
                        <h1>Content 2 </h1>
                        <p>Lorem ipsum dolor Lorem ipsum dolor
                            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                        </p>
                    </div>
                    <div className={this.state.toggleState===3?"content active-content":"content"}>
                        <h1>Content 3 </h1>
                        <p>Lorem ipsum dolor Lorem ipsum dolor
                            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                        </p>
                    </div>
                    <div className={this.state.toggleState===4?"content active-content":"content"}>
                        <h1>Content 4 </h1>
                        <p>Lorem ipsum dolor Lorem ipsum dolor
                            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                        </p>
                    </div>
                    <div className={this.state.toggleState===5?"content active-content":"content"}>
                        <h1>Content 5 </h1>
                        <p>Lorem ipsum dolor Lorem ipsum dolor
                            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
                        </p>
                    </div> */}
                </div>
            </div>
           
        )
    }
       

}
export default Tabs;