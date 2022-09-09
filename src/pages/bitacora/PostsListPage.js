import React, { useLayoutEffect } from 'react';
import { useContextInfo } from 'hooks/ContextProvider';
import PostCard from './PostCard';

const PostsListPage = () => {
    const { getPosts, isLoadingPosts, posts, setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } =
        useContextInfo();

    useLayoutEffect(() => {
        getPosts();
    }, [getPosts]);

    useLayoutEffect(() => {
        setColorScheme('yellow');
        setIsAppLogoVisible(true);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="bg-green min-h-screen">
            <div className="w-5/6 xl:w-4/6 mx-auto">
                <div className="pt-36 pb-16 md:min-h-[40vh]">
                    <div className="md:pb-8">
                        <h2 className="text-yellow font-primary text-4xl md:text-6xl font-bold mt-24">Bitácora</h2>
                        <h3 className="text-yellow text-4xl sm:text-5xl md:text-8xl font-bold ml-12 md:ml-40">
                            relatos en movimiento
                        </h3>
                    </div>

                    <div className="text-beige text-sm md:text-lg mt-20">
                        {/* <p className="">
                            Relatos Visuales es un proyecto donde eso que no tuvo lugar sale y se manifiesta con fuerza
                            animal.
                        </p>
                        <p className="mt-2">
                            Deseamos que conecten con estos relatos/historias al igual que nosotras y llevarlos a
                            recorrer vidas y territorios.
                        </p> */}
                    </div>
                </div>
                <div className="pb-20">
                    {isLoadingPosts && <div>Cargando...</div>}

                    {posts && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {posts.map((relato) => (
                                <PostCard
                                    className="mb-20"
                                    id={relato?.sys?.id}
                                    item={relato?.fields}
                                    key={relato?.sys?.id}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostsListPage;
