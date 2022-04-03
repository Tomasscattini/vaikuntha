import React, { useLayoutEffect } from 'react';
import { useContextInfo } from 'hooks/ContextProvider';
import RelatoCard from './RelatoCard';

const RelatosVisualesPage = () => {
    const { getRelatos, isLoadingRelatos, relatosVisuales } = useContextInfo();

    useLayoutEffect(() => {
        getRelatos();
    }, [getRelatos]);

    return (
        <div className="bg-green min-h-screen">
            <div className="w-5/6 mx-auto">
                {isLoadingRelatos && <div>Cargando...</div>}

                {relatosVisuales && (
                    <div className="grid grid-cols-3 gap-8 justify-items-center">
                        {relatosVisuales.map((relato) => (
                            <RelatoCard id={relato?.sys?.id} item={relato?.fields} key={relato?.sys?.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RelatosVisualesPage;
