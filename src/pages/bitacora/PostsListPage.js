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
        setIsAppLogoVisible(false);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="bg-green min-h-screen">
            <div className="w-5/6 xl:w-4/6 mx-auto">
                <div className="py-20 min-h-[40vh]">
                    <h2 className="text-yellow text-4xl font-bold font-primary">
                        bitácora <span className="relative top-12 font-secondary text-8xl">relatos en movimiento</span>
                    </h2>

                    {/* <div className="text-beige text-lg">
                        <p className="mt-40">
                            Relatos Visuales es un proyecto donde eso que no tuvo lugar sale y se manifiesta con fuerza
                            animal.
                        </p>
                        <p className="mt-2">
                            Deseamos que conecten con estos relatos/historias al igual que nosotras y llevarlos a
                            recorrer vidas y territorios.
                        </p>
                    </div> */}
                </div>
                <div className="pb-40">
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
