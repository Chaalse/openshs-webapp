import { FC } from "react";
import 'material-icons/iconfont/material-icons.scss';

type Props  = {
    icon: string,
}

const Icon: FC<Props> = ({icon}) => {
    return (
        <span className={'material-icons icon'}>
            {icon}
        </span>
    )
}

export default Icon