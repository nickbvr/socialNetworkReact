import React from 'react';
import { NavLink } from 'react-router-dom';
import { DialogNameItemStyles } from './DialogNameItem.styles';

export function DialogNameItem(props) {
        return (
            <DialogNameItemStyles>
                <img src={props.img} alt='profilePage' />
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </DialogNameItemStyles>
        )
}

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { DialogNameItemStyles } from './DialogName.styles';

// export function DialogName(props) {
//     let navigate = useNavigate()
//     let handleClick = () => navigate('/dialogs/' + props.id)
//     return (
//         <DialogNameItemStyles onClick={handleClick}>
//             <img src={props.img} alt='profilePage' />
//             <Link to>{props.name}</Link>
//         </DialogNameItemStyles>
//     )
// }