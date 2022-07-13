import { FC } from "react";
import 'material-icons/iconfont/material-icons.scss';
import classNames from "classnames";

type Props  = {
    icon: string,
    className?: string
}

const Icon: FC<Props> = (props : Props) => {

    const { icon, className } = props;

    const classes = classNames('material-icons icon', className)

    return (
        <span className={classes}>
            {icon}
        </span>
    )
}

export default Icon