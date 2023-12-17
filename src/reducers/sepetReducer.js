export function sepetReducer(state, action) {
  switch (action.type) {
    case "add":
      const existingItem = state.find((item) => item.id === action.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { id: action.id, quantity: 1 }];

    case "remove":
      return state.filter((item) => item.id !== action.id);

    case "increment":
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );

    case "decrement":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      );

    default:
      throw new Error();
  }
}
