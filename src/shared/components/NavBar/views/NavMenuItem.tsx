import classNames from "classnames";
import { FC } from "react";
import Icon from "../../CustomIcon/Icon";
import '../scss/NavMenuItem.scss';

type NavMenuItemProps = {
    text: string,
    icon?: string,
    className?: string,
    onClick: () => void
}


export const NavMenuItem: FC<NavMenuItemProps> = ({
    text,
    icon,
    className,
    onClick
}) => {

    const classes = classNames('nav_menut_item', className)

    return (

        <li className={classes} onClick={onClick}>
            <Icon icon={icon ?? ''} />
            <label>{text}</label>
        </li>
    )
}