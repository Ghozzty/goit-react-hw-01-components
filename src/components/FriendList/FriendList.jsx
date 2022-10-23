import PropTypes from "prop-types";
import css from './FriendList.module.css'
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({id,isOnline, avatar, name})=> 
                <FriendListItem 
                key={id}
                avatar = {avatar}
                name = {name}
                isOnline = {isOnline}
                />
            )}
  
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
          id: PropTypes.number.isRequired,
          isOnline: PropTypes.bool.isRequired,
          name: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
  }))
  };
