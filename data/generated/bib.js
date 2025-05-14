define({ entries : {
    "BagdasarianM.T.20253Aso": {
        "abstract": "3D Gaussian Splatting (3DGS) has emerged as a cutting\u2010edge technique for real\u2010time radiance field rendering, offering state\u2010of\u2010the\u2010art performance in terms of both quality and speed. 3DGS models a scene as a collection of three\u2010dimensional Gaussians, with additional attributes optimized to conform to the scene's geometric and visual properties. Despite its advantages in rendering speed and image fidelity, 3DGS is limited by its significant storage and memory demands. These high demands make 3DGS impractical for mobile devices or headsets, reducing its applicability in important areas of computer graphics. To address these challenges and advance the practicality of 3DGS, this state\u2010of\u2010the\u2010art report (STAR) provides a comprehensive and detailed examination of two complementary yet fundamentally distinct strategies: compression and compaction. Compression techniques focus on reducing the file size by encoding Gaussian attributes more efficiently. In contrast, compaction methods directly optimize the scene's structure by optimizing the number of Gaussian primitives. Notably, while methods in both categories aim to maintain or improve quality, each while minimizing its respective attributes\u2014file size for compression and the number of Gaussians for compaction\u2014compaction does not necessarily lead to smaller file sizes; it specifically targets improved efficiency during rendering, making it distinct from compression. We introduce the basic mathematical concepts underlying the analyzed methods, as well as key implementation details and design choices. Our report thoroughly discusses similarities and differences among the methods, as well as their respective advantages and disadvantages. We establish a consistent framework for comparing the surveyed methods based on key performance metrics and datasets. Specifically, since these methods have been developed in parallel and over a short period of time, currently, no comprehensive comparison exists. This survey, for the first time, presents a unified framework to evaluate 3DGS compression techniques. To facilitate the continuous monitoring of emerging methodologies, we maintain a dedicated website that will be regularly updated with new techniques and revisions of existing findings. Overall, this STAR provides an intuitive starting point for researchers interested in exploring the rapidly growing field of 3DGS compression. By comprehensively categorizing and evaluating existing compression and compaction strategies, our work advances the understanding and practical application of 3DGS in computationally constrained environments.",
        "author": "Bagdasarian, M. T. and Knoll, P. and Li, Y. and Barthel, F. and Hilsmann, A. and Eisert, P. and Morgenstern, W.",
        "doi": "10.1111/cgf.70078",
        "issn": "0167-7055",
        "journal": "Computer graphics forum",
        "keywords": "type:survey, topics: rendering",
        "language": "eng",
        "series": "CGF",
        "title": "3DGS.zip: A survey on 3D Gaussian Splatting Compression Methods",
        "type": "article",
        "url": "https://onlinelibrary-wiley-com.nottingham.idm.oclc.org/doi/full/10.1111/cgf.70078",
        "year": "2025"
    },
    "KerblBernhard20233GSf": {
        "abstract": "Radiance Field methods have recently revolutionized novel-view synthesis of scenes captured with multiple photos or videos. However, achieving high visual quality still requires neural networks that are costly to train and render, while recent faster methods inevitably trade off speed for quality. For unbounded and complete scenes (rather than isolated objects) and 1080p resolution rendering, no current method can achieve real-time display rates. We introduce three key elements that allow us to achieve state-of-the-art visual quality while maintaining competitive training times and importantly allow high-quality real-time (\u2265 30 fps) novel-view synthesis at 1080p resolution. First, starting from sparse points produced during camera calibration, we represent the scene with 3D Gaussians that preserve desirable properties of continuous volumetric radiance fields for scene optimization while avoiding unnecessary computation in empty space; Second, we perform interleaved optimization/density control of the 3D Gaussians, notably optimizing anisotropic covariance to achieve an accurate representation of the scene; Third, we develop a fast visibility-aware rendering algorithm that supports anisotropic splatting and both accelerates training and allows realtime rendering. We demonstrate state-of-the-art visual quality and real-time rendering on several established datasets.",
        "address": "New York, NY, USA",
        "author": "Kerbl, Bernhard and Kopanas, Georgios and Leimkuehler, Thomas and Drettakis, George",
        "copyright": "ACM",
        "doi": "10.1145/3592433",
        "issn": "0730-0301",
        "journal": "ACM transactions on graphics",
        "keywords": "type:technique, topics:Rendering, Computer graphics, Computer Science, Computing methodologies, Machine learning, Machine learning, topics:Point-based models, Rasterization, Shape modeling",
        "language": "eng",
        "number": "4",
        "pages": "1-14",
        "publisher": "ACM",
        "series": "ACM",
        "title": "3D Gaussian Splatting for Real-Time Radiance Field Rendering",
        "type": "article",
        "url": "https://dl-acm-org.nottingham.idm.oclc.org/doi/pdf/10.1145/3592433",
        "volume": "42",
        "year": "2023"
    }
}});