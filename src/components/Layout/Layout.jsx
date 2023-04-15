import style from './Layout.module.css';
import PropTypes from 'prop-types';

export const Layout = (props) => (
  <div className={style.container}>{props.children}</div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ])
};
