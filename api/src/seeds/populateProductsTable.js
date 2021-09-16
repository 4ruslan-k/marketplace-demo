const { connectToDb } = require('../config/dbConnection');
const { ProductRepository } = require('../repositories');
const logger = require('../config/logger');

const products = [
  {
    name: 'Logitech BRIO Ultra HD',
    description: 'Webcam for Video Conferencing, Recording, and Streaming - Black',
    thumbnailUrl: 'https://m.media-amazon.com/images/I/615PHGxiucL._AC_UL320_.jpg',
  },
  {
    name: 'SAMSUNG: EVO Select 128GB',
    description:
      'ULTRA FAST READ WRITE SPEEDS: Up to 100MB S Read and 60MB S Write Speeds; UHS Speed Class U3 and Speed Class 10 (Performance May Vary Based on Host Device, Interface, Usage Conditions, and Other Factors)',
    thumbnailUrl: 'https://m.media-amazon.com/images/I/81axmUuRHrL._AC_UL320_.jpg',
  },
  {
    name: 'Amplim 64GB Micro SD Card',
    description:
      'A1 V30 PERFORMANCE: Load software apps and games faster with A1-rated performance. V30 rated for ultra-fast video recording. Photos, business files, games, home security, dash body cam, software, data',
    thumbnailUrl: 'https://m.media-amazon.com/images/I/71qdBaVu82L._AC_UY218_.jpg',
  },
  {
    name: 'Mario Kart 8 Deluxe (Nintendo Switch)',
    description:
      'Find a friendly frenzy with a mountain of microgames help out infamous game designer wario after he gets sucked into his latest creation in story mode go it alone or with a friend in 2-player cooperative play a first for the series',
    thumbnailUrl: 'https://m.media-amazon.com/images/I/81OtwJfV0uL._AC_SX926_SY695_.jpg',
  },
];

const seedProducts = async () => {
  logger.info('Seeding products...');
  await ProductRepository.createProducts({ products });
  logger.info('Seeding products is finished!');
  process.exit();
};

logger.info('Connecting to the DB...');
connectToDb(seedProducts);
