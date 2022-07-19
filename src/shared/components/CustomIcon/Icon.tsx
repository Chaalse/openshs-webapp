import { FC } from "react";
import 'material-icons/iconfont/material-icons.scss';
import classNames from "classnames";

type Props = {
    icon: string,
    outline?: boolean,
    className?: string
}

const Icon: FC<Props> = (props: Props) => {

    const { icon, className, outline} = props;



    const classes = classNames(`material-icons${outline ? '-outlined' : ''}`, className, 'icon')

    return (
        <span className={classes}>
            {icon}
        </span>
    )
}

export default Icon