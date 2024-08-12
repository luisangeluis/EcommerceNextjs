const firstMayusc=(text)=>{
  const Mayusc = text[0].toUpperCase();
  const rest = text.slice(1);

  return `${Mayusc}${rest}`;
}

export default firstMayusc;