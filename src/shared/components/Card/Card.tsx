import classNames from "classnames";
import { FC } from "react";
import './Card.scss';


type CardProps = {
    className?: string
    title: string,
    type? : 'main_screen' | 'inner'
}


const Card: FC<CardProps> = ({
    className,
    title,
    type = 'main_screen',
    children,
}) => {

    const classes = classNames('card', className, type)
    return (
        <div className={classes}>
            <h1 className="title">
                {title}
            </h1>
            {children}
        </div>
    )
}

export default Card;