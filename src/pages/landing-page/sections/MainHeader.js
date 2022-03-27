import React, { forwardRef } from 'react';

const MainHeader = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className="flex justify-center items-end h-screen bg-[url('assets/images/main-header.jpg')] bg-center bg-cover bg-no-repeat py-16"
        >
            <div className="text-center">
                <h1 className="text-8xl font-bold text-green">Vaikuntha</h1>
                <p className="text-3xl text-yellow font-secondary font-semibold">
                    Arte ceramico, relatos visuales y brujerias del bien
                </p>
            </div>
        </div>
    );
});

export default MainHeader;
