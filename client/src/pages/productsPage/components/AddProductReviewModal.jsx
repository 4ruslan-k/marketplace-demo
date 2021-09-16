import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { bool, func, shape, string } from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import { useFormik } from 'formik';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Typography } from '@material-ui/core';
import { productImagePlaceholder } from '../../../constants/placeholders';

export default function AddProductReviewModal({
  product,
  handleCloseModal,
  open,
  handleAddReview,
  isLoading,
  addReviewError,
}) {
  const validate = (values) => {
    const errors = {};
    if (!values.reviewerName) {
      errors.reviewerName = 'Name is Required';
    }
    if (!values.rating) {
      errors.rating = 'Rating is Required';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      rating: 0,
      reviewerName: '',
      reviewText: '',
    },
    onSubmit: handleAddReview,
    validate,
  });

  useEffect(() => {
    formik.resetForm();
  }, [open]);
  return (
    <div>
      <Dialog open={open} onClose={handleCloseModal} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle id="form-dialog-title">Add Review</DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          {product && (
            <DialogContent dividers>
              <img
                className="h-128 w-auto"
                src={product.thumbnailUrl || productImagePlaceholder}
                alt={product.name}
              />
              <Typography className="mt-12" gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography className="mb-6" variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
              <div className="flex flex-col">
                <TextField
                  autoFocus
                  id="reviewerName"
                  label="Your Name"
                  fullWidth
                  value={formik.values.reviewerName}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.reviewerName)}
                  helperText={formik.errors.reviewerName}
                  classes={{ root: 'mb-12' }}
                />
                <Typography color="textSecondary" className="mb-1">
                  Your Rating
                </Typography>
                <Rating
                  size="large"
                  className="-ml-1"
                  name="rating"
                  id="rating"
                  value={Number(formik.values.rating)}
                  onChange={formik.handleChange}
                />
                <FormHelperText className="mb-12" error>
                  {formik.errors.rating}
                </FormHelperText>
                <TextField
                  className="mb-16"
                  value={formik.values.reviewText}
                  id="reviewText"
                  aria-label="reviewField"
                  multiline
                  rows={3}
                  placeholder="Your Review"
                  onChange={formik.handleChange}
                  autoFocus
                  variant="outlined"
                />
              </div>
              <FormHelperText error>
                {addReviewError?.response?.data?.message || addReviewError?.message}
              </FormHelperText>
            </DialogContent>
          )}

          <DialogActions className="p-8">
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={isLoading || !formik.isValid}
            >
              Add Review
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

AddProductReviewModal.propTypes = {
  open: bool.isRequired,
  handleCloseModal: func.isRequired,
  handleAddReview: func.isRequired,
  isLoading: bool.isRequired,
  product: shape({
    name: string.isRequired,
    description: string.isRequired,
    thumbnailUrl: string,
  }),
  addReviewError: string,
};

AddProductReviewModal.defaultProps = {
  product: null,
  addReviewError: '',
};
