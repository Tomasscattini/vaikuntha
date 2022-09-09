import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const PostCard = ({ className, id, item }) => {
    const { description, headerBg, thumbnail, title } = item;

    return (
        <Link className={clsx(className, 'max-w-[300px] overflow-hidden')} to={`/bitacora/${id}`}>
            <h3 className="font-primary text-beige text-2xl font-semibold">{title}</h3>
            <div className="h-[300px] w-full mx-auto mt-8 mb-4">
                <img
                    className="h-full object-cover"
                    src={thumbnail?.fields?.file?.url || headerBg?.fields?.file?.url}
                    alt={thumbnail?.fields?.title || headerBg?.fields?.title}
                />
            </div>
            <p className="line-clamp-2 text-beige">{description}</p>{' '}
            <span className="underline text-yellow">Leer más</span>
        </Link>
    );
};

export default PostCard;
