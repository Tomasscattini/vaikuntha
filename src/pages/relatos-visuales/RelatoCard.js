import React from 'react';
import { Link } from 'react-router-dom';

const RelatoCard = ({ id, item }) => {
    const { description, headerBg, thumbnail, title } = item;

    return (
        <Link className="w-[300px]" to={`/relatos-visuales/${id}`}>
            <div className="h-[300px] w-full mx-auto">
                <img
                    className="h-full object-cover"
                    src={thumbnail?.fields?.file?.url || headerBg?.fields?.file?.url}
                    alt={thumbnail?.fields?.title || headerBg?.fields?.title}
                />
            </div>
            <h3 className="font-primary text-orange text-xl font-semibold lowercase">{title}</h3>
            <p className="line-clamp-2 text-beige">{description}</p>
        </Link>
    );
};

export default RelatoCard;
