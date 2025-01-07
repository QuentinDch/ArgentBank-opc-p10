// État initial
const initialState = {
  token: null, // Le token d'authentification (initialement null)
  isAuthenticated: false, // Indicateur si l'utilisateur est authentifié ou non
  user: null,
};

// Actions types
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT = "LOGOUT";

// Reducer
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // Lorsque la connexion réussit, on stocke le token et on met à jour isAuthenticated
      return {
        ...state,
        token: action.payload, // Le payload contient le token
        user: action.payload.user,
        isAuthenticated: true, // L'utilisateur est maintenant authentifié
      };
    case LOGIN_FAIL:
      // En cas d'échec de la connexion, on ne change pas l'état
      return {
        ...state,
        token: null,
        isAuthenticated: false, // L'utilisateur n'est pas authentifié
      };
    case LOGOUT:
      // Lorsque l'utilisateur se déconnecte, on réinitialise l'état
      return initialState; // Réinitialisation de l'état à l'état initial
    default:
      return state; // Retourne l'état inchangé pour les autres actions
  }
};
