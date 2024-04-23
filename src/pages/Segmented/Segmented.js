import React from 'react';
import SegmentedOutput from '../../components/SegmentComponents/SegmentedOutput';
import ImageMoments from '../../components/SegmentComponents/ImageMoments';
import ImageAnalytics from '../../components/SegmentComponents/ImageAnalytics';
import ExtraParams from '../../components/SegmentComponents/ExtraParams';
import RfParams from '../../components/SegmentComponents/RfParams';
import LoaderAnimation from '../../components/SegmentComponents/utils/LoaderAnimation2';
import MaskParams from '../../components/SegmentComponents/MaskParams';
import ImageParams from '../../components/SegmentComponents/ImageParams';

const Segmented = ({ data }) => {
    const [loading, setLoading] = React.useState(true);

    // Parsing data from props
    React.useEffect(() => {
        if (data) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [data]);

    // Rendering the appropriate components based on the data
    return (
        <>
            {loading ? (
                <LoaderAnimation />
            ) : (
                <main style={{ backgroundColor: "#fefedf" }}>
                    <SegmentedOutput data={data.segments} />
                    <ImageMoments data={data.image_moments} />
                    <ImageAnalytics data={data.image_analytics_parans} />
                    <ExtraParams data={data.image_extra_parans} />
                    <MaskParams data={data.mask_stats} />
                    <ImageParams data={data.image_stats} />
                    <RfParams data={data.random_forest_analytics} />
                </main>
            )}
        </>
    );
};

export default Segmented;
