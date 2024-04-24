import React from 'react';
import SegmentedOutput from '../../components/SegmentComponents/SegmentedOutput';
import ImageMoments from '../../components/SegmentComponents/ImageMoments';
import ImageAnalytics from '../../components/SegmentComponents/ImageAnalytics';
import ExtraParams from '../../components/SegmentComponents/ExtraParams';
import RfParams from '../../components/SegmentComponents/RfParams';
import LoaderAnimation from '../../components/SegmentComponents/utils/LoaderAnimation2';
import MaskParams from '../../components/SegmentComponents/MaskParams';
import ImageParams from '../../components/SegmentComponents/ImageParams';

const Segmented = ({ data, isLoading }) => {
    // Extract each data point from parse_instance array
    const parseInstance = data.data;
    const dlData = parseInstance[0];
    const sobelData = parseInstance[1];
    const statsData = parseInstance[2];
    const momentsData = parseInstance[3];
    const imageParams = parseInstance[5];
    const maskStatsData = parseInstance[6];

    const rf_parans_obj = parseInstance[4][0];
    const rf_params = rf_parans_obj.feature_importance;
    
    // Use input_data
    const inputData = data.input_data;
    
    // Display message
    const message = data.message;
    
    console.log("The Data has been segregated");
    const obj_data = {
        'segments': dlData,
        'sobelData': sobelData,
        'statsData': statsData,
        'momentsData': momentsData,
        'ImageParams': imageParams,
        'MaskParams': maskStatsData,
        'rf_params': rf_params,
        'input': inputData
    }
    console.log(obj_data);
    return (
        <>
            {isLoading ? (
                <LoaderAnimation />
            ) : (
                <main style={{ backgroundColor: "#fefedf" }}>
                    <SegmentedOutput data={dlData} input={inputData} message={message} />
                    <ImageMoments data={momentsData} />
                    <ImageAnalytics data={statsData} />
                    <ExtraParams data={sobelData} />
                    <MaskParams data={maskStatsData} />
                    <ImageParams data={imageParams} />
                    <RfParams data={rf_params} />
                </main>
            )}
        </>
    );
};

export default Segmented;
