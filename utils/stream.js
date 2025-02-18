export const stream = (a, substream)=>({current:a, next:substream}); 


export const CoFreeF = (x, next) => ({ 
  x ,
  next,
  map: g => CoFreeF( g(x), () => next().map(x => x.map(g))),
});
export const Identity = value => ({ 
  value,
  map: f => Identity(f(value))
});
