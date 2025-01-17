import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContextInfo } from 'hooks/ContextProvider';
import contentfulService from 'services/ContentfulService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import arrowBack from 'assets/images/arrow-back-yellow.svg';

const RICHTEXT_OPTIONS = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            if (node.data?.target?.fields?.file?.contentType?.includes('image'))
                return (
                    <div className="max-w-full h-auto">
                        <img
                            className="h-full mx-auto my-12"
                            src={node.data?.target?.fields?.file?.url}
                            alt={node.data?.target?.fields?.file?.fileName}
                        />
                    </div>
                );
            if (node.data?.target?.fields?.file?.contentType?.includes('audio'))
                return (
                    <audio controls className="mx-auto my-12">
                        <source
                            src={node.data?.target?.fields?.file?.url}
                            type={node.data?.target?.fields?.file?.contentType}
                        />
                    </audio>
                );
        },
        [BLOCKS.PARAGRAPH]: (node, children) => <p className="text-green my-3">{children}</p>,
        [BLOCKS.HEADING_4]: (node, children) => (
            <h4 className="font-primary text-yellow text-3xl md:text-4xl my-16">{children}</h4>
        )
    }
};

const PostDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);

    useLayoutEffect(() => {
        setColorScheme('beige');
        setIsAppLogoVisible(true);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);

    const getPost = useCallback(async (id) => {
        const response = await contentfulService.getSinglePost(id);
        setPost(response?.fields);
        setLoading(false);
    }, []);

    useEffect(() => {
        getPost(id);
    }, [getPost, id]);

    if (loading) return <div>Cargando...</div>;

    return (
        <div>
            <div className="relative w-full h-96 overflow-hidden">
                <img
                    className="object-cover w-screen"
                    src={post?.headerBg?.fields?.file?.url}
                    alt={post?.headerBg?.fields?.title}
                />
                <div className="absolute bottom-0 left-0 w-screen">
                    <div
                        onClick={() => navigate(-1)}
                        className="relative cursor-pointer mb-32 h-6 w-5/6 xl:w-4/6 mx-auto"
                        style={{ transform: 'scale(0.03)', transformOrigin: 'left' }}
                    >
                        <svg
                            width="959"
                            height="816"
                            viewBox="0 0 959 816"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M480.177 704.129C386.601 608.299 285.827 521.182 166.49 445.048C186.07 426.348 205.03 408.605 223.502 391.321C252.92 363.794 281.096 337.428 308.558 310.204C361.852 255.991 414.132 200.512 466.435 145.009C478.083 132.649 489.731 120.288 501.392 107.939C513.515 95.061 524.122 81.0465 533.594 66.2743C544.202 49.6082 542.687 32.1847 530.184 17.0337C517.682 1.88277 501.013 -4.17753 482.828 3.01925C477.27 5.25301 471.586 7.33779 465.896 9.42494C432.03 21.8479 397.956 34.3467 388.874 78.774C387.829 83.2178 383.715 87.1198 379.648 90.9792C377.821 92.7121 376.003 94.4363 374.477 96.197C357.767 114.217 341.168 132.351 324.564 150.49C288.47 189.923 252.348 229.386 214.983 267.782C162.323 321.946 109.284 376.489 30.4835 393.534C12.2986 397.322 1.69065 412.852 0.175571 432.548C-1.33945 451.866 6.99503 466.638 23.2848 476.864C28.2636 480.085 33.6939 482.401 39.0529 484.685C40.6271 485.357 42.1949 486.025 43.7432 486.713C128.984 526.484 204.754 580.649 275.598 641.631C308.687 669.915 340.766 699.546 372.844 729.177C388.879 743.989 404.915 758.801 421.076 773.444C424.601 776.566 428.073 779.741 431.54 782.913C441.117 791.672 450.665 800.405 461.234 807.913C479.04 820.413 502.907 817.761 516.925 804.504C531.321 790.489 533.973 768.899 519.956 749.581C508.211 733.294 494.194 718.522 480.177 704.129Z"
                                fill="#E0D9D1"
                            />
                            <path
                                d="M488.587 454.882C479.469 449.191 469.554 443.002 458.203 436.335C463.077 432.579 467.188 429.368 470.771 426.569C480.558 418.924 486.401 414.359 493.057 410.2C629.822 328.385 756.357 232.554 881.756 134.831C901.456 119.301 921.156 103.393 938.205 84.8329C948.055 74.6058 954.495 59.4553 957.905 45.4409C961.693 30.2899 955.632 13.6238 940.099 7.56347C929.491 3.39709 915.474 2.63922 904.866 6.427C892.341 10.8264 881.328 19.1579 870.477 27.3672C869.184 28.3456 867.893 29.3221 866.602 30.2899C824.55 62.107 782.119 94.3027 740.445 126.877C640.808 204.904 538.52 278.386 430.169 343.156C428.358 344.233 426.553 345.317 424.752 346.399C398.666 362.076 373.241 377.355 338.866 362.474C321.818 354.899 304.769 367.019 295.298 384.064C285.827 401.109 288.1 418.912 299.844 433.684C307.421 443.532 316.892 453.001 327.5 458.682C347.709 469.542 367.88 480.477 388.05 491.412C458.635 529.675 529.22 567.939 601.408 602.995C673.524 637.954 746.625 670.352 819.716 702.746C847.994 715.279 876.27 727.811 904.487 740.49C905.823 741.159 907.16 741.991 908.497 742.823C911.706 744.82 914.916 746.817 918.125 746.55C919.749 746.42 921.495 746.324 923.293 746.224C931.983 745.745 941.884 745.198 945.024 740.49C951.085 731.4 956.389 714.355 951.843 707.158C941.614 690.871 927.218 674.583 910.548 665.114C862.435 637.842 813.184 612.843 763.176 588.602C724.533 570.042 685.701 551.955 646.869 533.869C608.038 515.783 569.206 497.696 530.564 479.137C516.819 472.503 503.816 464.387 488.587 454.882Z"
                                fill="#E0D9D1"
                            />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-primary text-beige mb-20 w-5/6 xl:w-4/6 mx-auto z-20">
                        {post?.title}
                    </h1>
                </div>
            </div>
            <div className="w-5/6 xl:w-4/6 mx-auto my-24 text-green text-lg">
                <div>{documentToReactComponents(post?.content, RICHTEXT_OPTIONS)}</div>
            </div>
        </div>
    );
};

export default PostDetailsPage;
