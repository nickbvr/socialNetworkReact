// import {profileReducer} from "./reducers/profileReducer";
// import {dialogReducer} from "./reducers/dialogReducer";
//
// export let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, like: 3, message: 'dolor sit amet'},
//                 {id: 2, like: 12, message: 'lorem ipsum'},
//                 {id: 3, like: 8, message: 'Джо Джо'},
//                 {id: 4, like: 19, message: 'test test'}
//             ],
//         },
//         dialogPage: {
//             dialogNames: [
//                 {id: 1, name: 'Andrew', img: 'https://i.pinimg.com/564x/04/a8/73/04a87347b071ec062a586e02c23f6221.jpg'},
//                 {id: 2, name: 'Dmitriy', img: 'https://i0.wp.com/urok-ua.com/wp-content/uploads/2017/07/Avatarka-10.jpg'},
//                 {id: 3, name: 'Maksym', img: 'http://ukrainianway.org/wp-content/uploads/2016/02/Avatarka-1-947x1024.jpg'},
//                 {id: 4, name: 'Sergei', img: 'https://pickaface.net/gallery/avatar/29498544_170510_0240_z76a8.png'},
//                 {id: 5, name: 'Vasya', img: 'https://img.faceyourmanga.com/mangatars/1/873/1873552/large_1751979.png'},
//                 {id: 6, name: 'Viktor', img: 'https://img1.picmix.com/output/stamp/normal/7/6/7/0/590767_38096.png'},
//                 {id: 7, name: 'Sasha', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gkRHdQUk3Hbppir3dcTYGue89IjixuQcnQ&usqp=CAU'},
//                 {id: 8, name: 'Zhenya', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQB2rmg_rnxlqsM8OpazcqXQ8L6snLGITEaw&usqp=CAU'},
//                 {id: 9, name: 'Igor', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQIOx_SCaYRInZ3jwT5QuwBVLGeBBk9T_IA&usqp=CAU'},
//                 {id: 10, name: 'Vadim', img: 'https://cs8.pikabu.ru/post_img/big/2017/04/19/10/1492620845122261992.png'},
//             ],
//             dialogMessages: [
//                 {id: 1, message: '1'},
//                 {id: 2, message: '2'},
//                 {id: 3, message: '3'},
//                 {id: 1, message: '4'},
//                 {id: 2, message: '5'},
//                 {id: 3, message: '6'},
//                 {id: 1, message: '7'},
//                 {id: 2, message: '8'},
//                 {id: 3, message: '9'},
//                 {id: 1, message: '10'},
//                 {id: 2, message: '11'},
//                 {id: 3, message: '12'},
//                 {id: 1, message: '13'},
//                 {id: 2, message: '14'},
//                 {id: 3, message: '15'},
//                 {id: 1, message: '16'},
//                 {id: 2, message: 'kak ti?'},
//                 {id: 3, message: 'potihon\'ky'},
//             ]
//         }
//     },
//     getState() {
//         return this._state;
//     },
//     dispatch(action) {
//         profileReducer(this._state.profilePage, action);
//         dialogReducer(this._state.dialogPage, action);
//     }
// }
//
// window.store = store