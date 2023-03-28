import {Rights} from "../Services/SecurityHelper";
import {IDploma} from "../type";

interface IProps {
    userRights: Rights
    dploma?: IDploma
}

const AuthentifiedModification = (props: IProps) => {
    const {userRights,dploma} = props
    return (
        <div> this is the modification page here will be the forms for modify and delete{userRights}
          <div >{JSON.stringify(dploma)}</div>
        </div>)
}

export default AuthentifiedModification
