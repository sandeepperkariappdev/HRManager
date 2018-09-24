import React, {Component} from 'react';


class EmpRelated extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step1:{
                taskName:"Employee",
                taskActive: true,
                actionAssignedTo:"Akash",
              }
         }
    }
    render() { 
        return ( 
            <div>
                <h2>EmpRelated</h2>
            </div>
         );
    }
}
 
export default EmpRelated;