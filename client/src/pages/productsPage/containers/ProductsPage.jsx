/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Snackbar from '../../../baseComponents/Snackbar';
import Product from '../components/Product';
import AddProductReviewModal from '../components/AddProductReviewModal';

import { addProductReviewRequest, getProductsRequest } from '../../../requests/productsRequests';

const useStyles = makeStyles({
  pageWrapper: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function ProductsPage() {
  const { pageWrapper } = useStyles();
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const handleCloseModal = () => setReviewModalOpen(false);
  const [isSnackbarOpen, setOpenSnackbar] = useState(false);
  const handleCloseSnackbar = () => setOpenSnackbar(false);
  const handleOpenSnackbar = () => setOpenSnackbar(true);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const { isLoadingProducts, products, fetchProductsError, refetchProducts } = getProductsRequest();
  const { isAddReviewLoading, addReviewError, addProductReview } = addProductReviewRequest({
    onSuccess: () => {
      handleOpenSnackbar();
      refetchProducts();
      handleCloseModal();
    },
    selectedProductId,
  });

  const handleOpenAddReviewModal = (id) => {
    setReviewModalOpen(true);
    setSelectedProductId(id);
  };
  const selectedProduct = products.find((p) => p._id === selectedProductId);

  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('md'));

  if (isLoadingProducts)
    return (
      <div className={pageWrapper}>
        <CircularProgress size={64} />
      </div>
    );

  if (fetchProductsError) {
    return (
      <div className={pageWrapper}>
        <Typography color="error" variant="h3" component="h3" gutterBottom>
          {fetchProductsError?.response?.data?.message || fetchProductsError?.message}
        </Typography>
      </div>
    );
  }
  return (
    <div className="p-8 sm:p-40">
      <Grid
        container
        justifyContent={largeScreen ? 'flex-start' : 'center'}
        spacing={largeScreen ? 6 : 2}
        direction={largeScreen ? 'row' : 'column'}
      >
        {products.map((productItem) => (
          <Grid key={productItem._id} item xs={12} md={6} xl={2} align="stretch">
            <Product
              name={productItem.name}
              description={productItem.description}
              averageRating={productItem.averageRating}
              thumbnailUrl={productItem.thumbnailUrl}
              handleOpenAddReviewModal={() => handleOpenAddReviewModal(productItem._id)}
            />
          </Grid>
        ))}
      </Grid>

      <AddProductReviewModal
        open={isReviewModalOpen}
        setOpen={setReviewModalOpen}
        isLoading={isAddReviewLoading}
        selectedProductId={selectedProductId}
        handleAddReview={addProductReview}
        handleCloseModal={handleCloseModal}
        product={selectedProduct}
        addReviewError={addReviewError}
      />
      <Snackbar
        isSnackbarOpen={isSnackbarOpen}
        handleCloseSnackbar={handleCloseSnackbar}
        message="Your review has been successfully submitted!"
      />
    </div>
  );
}
