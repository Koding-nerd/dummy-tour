import React, {Component} from "react";
//import $ from 'jquery';
// import './assets/js/jquery.iGuider';
import { Helmet } from "react-helmet";

class Tour extends Component {
    
    componentDidMount(){
            //Fire the script once the component loads?
    }
    render() {
        return (
            <div id="tour"> 
                <Helmet> 
            <script type="text/javascript" src="https://code.jquery.com/jquery-latest.min.js"/>
                {/* iGuider Core */}
                <link rel="stylesheet" href='./assets/css/iGuider.css'/>
                <script type="text/javascript" src="./assets/js/jquery.iGuider"/>
                <title>Yes sir</title>
            <script>
                    {`
                                function()
                                {
                                        iGuider({
                                            tourTitle:'intro.content',
                                            intro:{
                                                content:'let's start!'
                                            },
                                                                
                                            steps:[{
                                                title:'Step 1',				
                                                content:'Step 1 Description',	
                                                target:'.header'	
                                            },{
                                                title:'Step 2',
                                                content:'Step 2 Description',		
                                                target:'.table'
                                            },{
                                                title:'Step 3',		
                                                content:'Step 3 Description',		
                                                target:'.bottom'
                                            }]
                                        });
                                        return false;
                                   
                                    });
                                }
                        `}
                     </script>
                </Helmet>
            </div>
        );
      }
}

export default Tour;