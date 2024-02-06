import React from 'react';

class ProfileStatus extends React.Component<any, any>  {
   state = {
       editMode: false
   }
   activatedEditMode = () => {
       debugger
       console.log("this", this)
       this.setState({
          editMode: true
       })
   }
    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    render() {
       return   <div>
                    {!this.state.editMode &&
                        <div>
                            <span onDoubleClick={this.activatedEditMode}>{"hello"}</span>
                        </div>
                    }
                    {this.state.editMode &&
                        <div>
                            <input value={"hellow"} onBlur={this.deactivatedEditMode} autoFocus={true}/>
                        </div>
                    }
                </div>
   };
   }

export default ProfileStatus


