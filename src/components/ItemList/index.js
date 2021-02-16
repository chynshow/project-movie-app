import React from 'react';
import ScrollToTop from 'react-scroll-up';
import PropTypes from 'prop-types';
import { ChevronUp } from '../SVGs';
import { TitleSecondary } from '../Title';

const ItemList = ({ children, title, showList }) => {
  return (
    <>
      {showList ? (
        <div className='border-t border-dashed my-5'>
          <TitleSecondary
            className='text-gray-500 uppercase italic text-center'
            title={title}
          />
          {children}
          <ScrollToTop showUnder={300}>
            <ChevronUp className='w-8 h-8 bg-gray-700 text-gray-50 rounded-full' />
          </ScrollToTop>
        </div>
      ) : null}
    </>
  );
};

export default React.memo(ItemList);

ItemList.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  showList: PropTypes.bool,
};
