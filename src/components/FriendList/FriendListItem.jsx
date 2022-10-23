import PropTypes from "prop-types";
import css from './FriendList.module.css'

export const FriendListItem =({id, avatar, name, isOnline}) =>{
    return  (<li key={id} className={css.item} >
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
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  };