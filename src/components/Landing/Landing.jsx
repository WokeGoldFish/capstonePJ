import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Stack } from '@mui/material'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 'auto', height: 'auto' }}
      variant="quilted"
      cols={3}
      rowHeight={500}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://m.media-amazon.com/images/I/81aG9ZXCZ-L._AC_SL1000_.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://m.media-amazon.com/images/I/81zBpsoIvVL._AC_SL1400_.jpg',
    title: 'Burger',
  },
  {
    img: 'https://m.media-amazon.com/images/S/aplus-media/sc/18f56062-dd6d-4fc0-95f3-7acc591960f9.__CR0,0,970,600_PT0_SX970_V1___.jpg',
    title: 'Camera',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81qFDGZuTLL._AC_SL1200_.jpg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://m.media-amazon.com/images/I/91EnXvRfmoL._AC_SL1500_.jpg',
    title: 'Camera',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71pK7Yf9NqL._AC_SL1200_.jpg',
    title: 'Camera',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81O1ddLjRsL._AC_SL1500_.jpg',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://m.media-amazon.com/images/I/81t4HaFtVgL._AC_SL1500_.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 1,
    cols: 2,
  },
  {
    img: 'https://m.media-amazon.com/images/I/81DVCrKTrNL._AC_SL1500_.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81sSrJAWKeL._AC_SL1500_.jpg',
    title: 'Fern',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81EqJ+ZJPIL._AC_SL1500_.jpg',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://m.media-amazon.com/images/I/9182MI5OSpL._AC_SL1500_.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://m.media-amazon.com/images/I/81opSmuVSQL._AC_SL1500_.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://m.media-amazon.com/images/I/91ZrcDJEVdL._AC_SL1500_.jpg',
    title: 'Bike',
    cols: 2,
  },
];
