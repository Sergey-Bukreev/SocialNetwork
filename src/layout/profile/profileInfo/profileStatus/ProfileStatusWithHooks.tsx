import React, {ChangeEvent, useEffect, useState} from 'react';

export type ProfileStatusWithHooksPropsType = {
    status:string |null,
    updateStatus:(statusText:string)=> void
}
export const ProfileStatusWithHooks:React.FC<ProfileStatusWithHooksPropsType> = (props:ProfileStatusWithHooksPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status || "")
    useEffect(() => {
        setStatus(props.status || "")
    }, [props.status]);
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (event:ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
        }


    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{ props.status || "No Status"}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input  value={status}
                            onBlur={deactivateEditMode}
                            autoFocus={true}
                            onChange={onStatusChange}
                    />
                </div>
            }
        </div>
    );
};

