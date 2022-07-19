import classNames from "classnames";
import { FC, ReactNode, useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import Icon from "../CustomIcon/Icon";
import './Card.scss';

type CardHeaderProps = {
    title: string,
    icon?: string,
    button?: { text: string, onClick: () => void },
    onIconClick?: () => void
}

type CardProps = {
    className?: string
    type?: 'main' | 'inner' | 'small'
    header: CardHeaderProps,
    children?: ReactNode
}


const Card: FC<CardProps> = (props: CardProps) => {
    const { className, header, type, children } = props;

    const [hovered, setHovered] = useState<boolean>(false);

    const classes = classNames(`card card--${type}`, className)
    return (
        <div className={classes}>
            <div className="card__header">
                <h1 className="card__header__title">
                    {header.title}
                </h1>
                <div className={'card__header__elements'}>
                    <span onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={header.onIconClick}>
                        <Icon icon={header.icon!} className={'icon'} outline={hovered} />
                    </span>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Card;