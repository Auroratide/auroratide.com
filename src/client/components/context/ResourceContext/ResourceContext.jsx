import React, { useReducer, useContext } from 'react';
import PropTypes from 'Client/utils/prop-types';
import Resource from './resource';
import reducer from './reducer';

export default {
  create: (api) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
      const [ state, dispatch ] = useReducer(reducer, {});
      const resource = new Resource(api, state, dispatch);

      return <Context.Provider value={resource}>
        {children}
      </Context.Provider>;
    };

    Provider.propTypes = {
      children: PropTypes.node
    };

    return {
      withProvider: Component => props => <Provider><Component {...props} /></Provider>,
      withResource: Component => props => {
        const resource = useContext(Context);
        return <Component resource={resource} {...props} />;
      }
    };
  }
};
