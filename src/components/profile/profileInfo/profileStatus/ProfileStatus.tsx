import React, {ChangeEvent} from 'react';
interface ProfileStatusProps {
    status: string;
    updateStatus: (status: string) => void;
}
interface ProfileStatusState {
    editMode: boolean;
    status: string;
}
class ProfileStatus extends React.Component<any, any>  {

    state:ProfileStatusState = {
       editMode: false,
        status: this.props.status
   }
   activatedEditMode = () => {
       this.setState({
          editMode: true
       })
   }
    deactivatedEditMode = () => {
        this.setState({
            editMode: false
        })
        console.log(this.props.updateStatus)
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (event:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status:event.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<ProfileStatusState>) {
        if (prevProps.status !== this.props.status && prevState.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render():JSX.Element {
       return   <div>
                    {!this.state.editMode &&
                        <div>
                            <span onDoubleClick={this.activatedEditMode}>{this.props.status || "No Status"}</span>
                        </div>
                    }
                    {this.state.editMode &&
                        <div>
                            <input  value={this.state.status}
                                    onBlur={this.deactivatedEditMode}
                                    autoFocus={true}
                                    onChange={this.onStatusChange}
                            />
                        </div>
                    }
                </div>
   };
   }

export default ProfileStatus


