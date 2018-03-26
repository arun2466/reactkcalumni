import db from '../../db'

const PROFILE_FETCH_SUCCESS = 'PROFILE:PROFILE_FETCH_SUCCESS'

// fetch profile details
export const login = () => {
  console.log('asdasdasdasdasdas')
  console.log('asdasdasdasdasdas')
  return (dispatch, getState) => {


    console.log(db)


    db
      .auth()
      .createUserWithEmailAndPassword('con@abc.com', 'web@123')
      .then(authUser => {
        // Update User with values
        const profileRef = db
          .firestore()
          .collection('users')
          .doc(authUser.uid)


      })



  }
}


// ------- Reducer ---------
const initialState = {
  data: {},
  formSaveStatus: {
    isLoading: false,
    isSuccess: false,
    isFailed: false,
    message: ''
  },
  loaded: false
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}