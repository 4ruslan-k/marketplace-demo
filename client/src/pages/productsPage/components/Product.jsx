import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { func, number, string } from 'prop-types';
import { productImagePlaceholder } from '../../../constants/placeholders';

export default function Product({
  handleOpenAddReviewModal,
  averageRating,
  thumbnailUrl,
  name,
  description,
}) {
  return (
    <Card classes={{ root: 'h-256 min-h-256 max-h-256' }}>
      <CardMedia className="h-160" image={thumbnailUrl || productImagePlaceholder} title={name} />
      <CardContent className="h-full">
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className="h-40 max-h-40 overflow-hidden"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className="h-52 max-h-52 overflow-hidden"
        >
          {description}
        </Typography>
        <Rating size="large" value={averageRating} precision={0.5} readOnly className="mt-20" />
      </CardContent>
      <CardActions className="flex justify-end p-12">
        <Button size="small" color="primary" onClick={handleOpenAddReviewModal} variant="contained">
          Add Review
        </Button>
      </CardActions>
    </Card>
  );
}

Product.propTypes = {
  handleOpenAddReviewModal: func.isRequired,
  averageRating: number,
  name: string.isRequired,
  description: string.isRequired,
  thumbnailUrl: string.isRequired,
};

Product.defaultProps = {
  averageRating: 0,
};
