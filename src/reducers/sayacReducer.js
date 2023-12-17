const ilkDurum = { sayi: 0 };

function reducer(eskiDurum, eylem) {
  switch (eylem.type) {
    case "increment": return { sayi: eskiDurum.sayi + 1 };
    case "decrement": return { sayi: eskiDurum.sayi - 1 };
    case "reset"    : return ilkDurum;
    default: throw new Error();
  }
}

export {ilkDurum, reducer}
