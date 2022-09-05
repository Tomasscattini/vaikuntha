import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h2 className="text-[12rem]">404</h2>
            <p className="mb-8 font-medium">Página no encontrada</p>
            <Link to="/" className="underline">
                Volver al inicio
            </Link>
        </div>
    );
};

export default ErrorPage;
