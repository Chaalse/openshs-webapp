import classNames from "classnames";
import { FC } from "react";
import './Card.scss';


type CardProps = {
    className?: string
    title: string,
    
}


const Card: FC<CardProps> = ({
    className,
    title,
    children
}) => {

    const classes = classNames('card', className)
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