import React from 'react';
import { List, Card, Skeleton } from 'antd';

import listingLoadingCardCover from '../../assets/listing-loading-card-cover.jpg';

export const HomeListingsSkeleton = () => {
  const emptyData = [{}, {}, {}, {}];

  return (
    <div className="home-listings-skeleton">
      <Skeleton paragraph={{ rows: 0 }} />
      <List
        grid={{ gutter: 8, xs: 1, sm: 2, lg: 4 }}
        dataSource={emptyData}
        renderItem={() => (
          <List.Item>
            <Card
              cover={
                <div
                  style={{ backgroundImage: listingLoadingCardCover }}
                  className="home-listings-skeleton__card-cover-img"
                ></div>
              }
              loading
            ></Card>
          </List.Item>
        )}
      ></List>
    </div>
  );
};
