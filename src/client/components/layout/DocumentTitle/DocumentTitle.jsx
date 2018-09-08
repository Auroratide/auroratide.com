import React from 'react';
import ReactDocumentTitle from 'react-document-title';
import PropTypes from 'Client/utils/prop-types';

const DocumentTitle = ({ title, children }) =>
  <ReactDocumentTitle title={`Auroratide${title ? ` - ${title}` : ''}`}>
    {children}
  </ReactDocumentTitle>;

DocumentTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default DocumentTitle;