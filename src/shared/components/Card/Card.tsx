import classNames from "classnames";
import { FC, ReactChild, ReactElement, ReactNode } from "react";
import Icon from "../CustomIcon/Icon";
import './Card.scss';

type CardHeaderProps = {
    title: string,
    icon?: string
}

type CardProps = {
    className?: string
    type?: 'main' | 'inner' | 'small'
    header: CardHeaderProps,
    children?: ReactNode
}


const Card: FC<CardProps> = (props: CardProps) => {
    const { className, header, type, children } = props;

    const classes = classNames(`card card--${type}`, className)
    return (
        <div className={classes}>
            <div className="card__header">
                <h1 className="card__header__title">
                    {header.title}
                </h1>
                <Icon icon={header.icon!} className={'card__header__icon'}/>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Card;