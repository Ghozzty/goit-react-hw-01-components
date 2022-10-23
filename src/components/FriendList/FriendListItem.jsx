import PropTypes from "prop-types";
import css from './FriendList.module.css'

export const FriendListItem =({ avatar, name, isOnline}) =>{
    return  (<li className={css.item} >
        {isOnline === true ? (
                <span className={css.statusTrue}></span>
            ) : (
                <span className={css.statusFalse}></span>
            )}
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
    )
    
}


FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  };