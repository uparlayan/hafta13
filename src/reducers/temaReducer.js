export const temaIlkState = {
  color: "blue",
  fontSize: "14px",
  update: false,
};

export function temaReducerFonksiyonu(state, action) {
  switch (action.type) {
    case "renkDegistir": return { ...state, color: action.color };
    case "fontuArttir" : return { ...state, fontSize: `${parseInt(state.fontSize) + 1}px` };
    case "fontuAzalt"  : return { ...state, fontSize: `${parseInt(state.fontSize) - 1}px` };
    default: throw new Error();
  }
}
