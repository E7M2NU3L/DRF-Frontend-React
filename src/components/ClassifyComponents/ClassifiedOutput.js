import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SnackBar from './utils/SnackBar';

const ClassifiedOutput = ({ data, base64Image }) => {
    const [loading, setLoading] = React.useState(false);

    return (
        <main className="card-hold-op" style={{ paddingBottom: '2rem' }}>
            {loading ? (
                <React.Fragment>
                    <SnackBar />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography variant="h4" color="secondary" sx={{ textAlign: "center", padding: "20px" }}>
                        Classified Output
                    </Typography>
                    <Card sx={{ maxWidth: 345 }}>
                        {/* Display base64 image */}
                        <CardMedia
                            component="img"
                            alt="Classified Input Image"
                            height="140"
                            src={base64Image} // Use base64Image as the source
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Predictions
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The given input image has been classified as <Typography variant="h5" color="lightseagreen">"Tumor"</Typography>.
                                <Typography variant="p" style={{ paddingTop: "10px" }}>
                                    Used Algorithms:
                                </Typography>
                                <div className="d-flex" style={{ flexDirection: "column", paddingTop: "10px" }}>
                                    <Typography variant="p" color="green">
                                        1. LightGBM with VGGNET Weights
                                    </Typography>
                                    <Typography variant="p" color="green">
                                        2. XGBoost with VGGNET Weights
                                    </Typography>
                                    <Typography variant="p" color="green">
                                        3. CNN Classifier DeepNET Model
                                    </Typography>
                                </div>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="secondary" variant="contained">
                                View All Reports
                            </Button>
                            <Button size="small" color="primary" variant="contained">
                                View Statistics
                            </Button>
                        </CardActions>
                    </Card>
                </React.Fragment>
            )}
        </main>
    );
};

export default ClassifiedOutput;
