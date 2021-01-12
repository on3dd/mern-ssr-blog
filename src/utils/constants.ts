import { Route } from '@client';

export const FAVICON_URL =
  'data:image/x-icon;base64,AAABAAEAIB0AAAEAIAAcDwAAFgAAACgAAAAgAAAAOgAAAAEAIAAAAAAAgA4AAMMOAADDDgAAAAAAAAAAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////79/f/y6O3/7d7l//Pp7v/+/v7//////////////////////////////////v39//Po7f/t3uX/8+nu//79/v/////////////////////////////////////////////////////////////////////////////////7+Pr/1rTF/7Nzkv+sZoj/tHWU/8ugtf/u3+b///////////////////7//+zc4//KnbP/tHST/6xmiP+0dZT/2bjI//z6+////////////////////////////////////////////////////////////////////////////+DG0v+oXoL/xZSs/9u9y//KnbP/rmqM/69rjP/ZuMj/+/j6//r2+P/WtMT/rmmK/69sjf/LoLX/273L/8OQqf+oX4P/48zX///////////////////////////////////////////////////////////////////////9/Pz/voei/7uBnf/48fT///////7+/v/w5Or/xpau/6hfg//ImbD/xpat/6hfg//ImrH/8ubs///+/v//////9u7y/7h8mf/Cjaf//v3+//////////////////////////////////////////////////////////////////r2+P+vbI3/z6a6///////////////////////7+Pn/z6a6/6FSeP+iU3r/0q2///z5+///////////////////////y5+0/7Nykf/8+fr/////////////////////////////////////////////////////////////////9e3x/65pi//VscP///////////////////////r3+f/HmK//pFh9/6VZfv/Ln7T//Pn6///////////////////////Rqb3/sG2O//jx9P/////////////////////////////////////////////////////////////////48vX/rWmK/9Ksv////////////////////v7/06/B/6lhhP/Vs8T/1LDB/6phhf/Ws8T//////////////////////86kuf+wbY7/+vb4//////////////////////////////////////////////////////////////////z5+/+ycZH/yp6z//79/f/17fH/7uDn/9i2x/+oX4P/tHaU/9u9zP/bvMv/s3KR/6pihf/ausr/7uHn//bu8v/9/P3/xpeu/7V3lf/9/Pz/////////////////////////////////////////////////////////////////+fP2/7uBnv+ua4z/v4mj/7d6l/+wbY3/o1V7/6JTef+mW4D/pFh9/6RYff+mW3//oVJ5/6NWfP+wbo7/t3qY/7+Jo/+uaIr/voij//r19///////////////////////////////////////////////////////9Ozw/9i3x/+2eZf/o1Z8/55Ndf+0dZT/xpau/7Fujv+qYoX/38LQ/+/h6P/y5+z/8ubs/+/h6P/cv83/qWCE/7FxkP/Gla3/s3KS/55MdP+kV33/uHuZ/9q7yv/27vH//////////////////////////////////v7+/+TN2P+3e5j/qF+D/8KOqP/No7j/plyA/+DF0v/n0tz/q2SH/9Gpvf///f7///////r+///6/v////////79/f/OpLj/rGaI/+nW3//cvs3/p12B/8+muv/AjKX/qF6C/7l+m//m0dv///////////////////////7+/v/ew9D/rGWI/7uAnf/o1N3/+/n6//fx9P+5fZr/vYah/76Hov+1d5X/9+/z//f9//+v4P//acX//2vF//+04v//+v7///Xs8P+zc5L/wIul/7uBnv+7gp7/+fT3//v3+f/m0Nv/uHya/61oiv/hyNT/////////////////7+Lo/7Jykf/AiqT/9u7y/////////////////9Krvv+iU3r/pVp//9y/zf//////teL//0K2//82sf//NrH//0W3//+/5v///////9m5yf+lWX7/o1V7/9Wyw//////////////////17PD/vYWg/7V2lP/z6O3////////////ew9D/pluA/+rZ4f//////////////////////7Nvk/6lgg/+2eJb/9e3x//////96zP//NbH//ziy//84sv//NbH//4PP////////8+nu/7Nykv+rZIf/7uDn///////////////////////n09z/pVp+/+XP2v///////////+HH1P+nXYH/5M3Y///////////////////////n093/p1yA/7Fvj//y5+z//////4PP//82sf//OLL//ziy//82sf//itL////////w4+n/rmuL/6lgg//q2OH//////////////////////+DG0/+nXIH/59Pc////////////9Ovv/7l/nP+1dpX/7N3k/////////////v3+/8ygtf+kWH3/p12B/9OuwP//////y+v//1G8//82sf//NrH//1S9///Q7f////7+/9CovP+nXYH/pFh9/8+nu////v7////////////r2eL/s3KS/7yEn//38PP/////////////////6tjh/7V2lf+uaov/17XF//Tq7v/z6e7/tHOT/8iZsP/ImbD/r2uM//Dj6f/+////z+z//4/U//+Q1P//z+z///7////u3+b/rWiJ/8uetP/Ek6v/tniW//Xt8f/y6O3/1bHD/61oiv+3epj/7Nzk////////////////////////////7+Lo/8aWrf+pYYT/tHST/72Fof+kV33/38LQ/+rX4P+uaov/x5eu//z5+v//////////////////////+/f5/8SSq/+vbI3/69ri/9u8y/+kV33/vYei/7Nykv+qYoX/yJqw//Hl6////////////////////////////////////////Pr7/+nV3//HmK//qF+C/59Odf+oXoL/t3qY/61piv+lWH3/zqS4/93Bz//gxtP/4MbS/93Az//MoLX/pFd8/65qjP+2eZf/qF2B/59Ndf+pYYT/yZux/+rY4f/8+vv///////////////////////////////////////////////////////37/P+7gp7/t3qX/9Ktv//Gla3/uoCd/6lgg/+eTHT/o1Z8/6RXfP+kV33/o1V7/55MdP+qYoX/u4Ke/8aWrv/Trb//tHWU/7+Jo//+/f3/////////////////////////////////////////////////////////////////+/j5/7Btjf/No7j///////z5+//59Pb/59Pd/7Btjv+2eZf/6dfg/+jV3v+0dJP/snGQ/+nW4P/59Pb//Pr7///////Jm7H/s3KR//z6+//////////////////////////////////////////////////////////////////38PT/rmmK/9OuwP//////////////////////38TR/6phhf/Hl6//xZSs/6tkhv/hyNX//////////////////////8+muv+wbY7/+fT3//////////////////////////////////////////////////////////////////bu8v+uaYr/1LDC///////////////////////+/v7/0au9/6JTef+iVHr/1LHC////////////////////////////0Ki8/7Btjv/48vX/////////////////////////////////////////////////////////////////+/j5/7FvkP/Mobb///////////////////////Tr7//Ekqr/pFd8/6RXfP/Hl67/9u7y///////////////////////ImbD/tXWU//36+//////////////////////////////////////////////////////////////////+/f3/xJKr/7R1lP/x5ev//vz9//n09v/jzNf/t3uY/6xmiP/Yt8f/1bPE/6tkh/+6fpv/5c/a//n09//+/f3/7uDn/7Jxkf/ImbD//v7+///////////////////////////////////////////////////////////////////////p1t//rGeJ/7d6mP/JnLL/uoCd/6hegv+7gp7/59Pd///////+/v7/5dDa/7l/m/+oX4P/u4Of/8mcs/+1d5b/rmqL/+zb4/////////////////////////////////////////////////////////////////////////////38/f/iytb/uoCc/65pi/+7gp7/2rvK//Xt8f//////////////////////9Ovw/9m5yP+6gJz/rmmK/7yDnv/kzdj//v39////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=';

export const PLACEHOLDER_URL =
  'https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png';

export const ROUTES: Route[] = [
  { to: '/', name: 'home', emoji: '🏠' },
  { to: '/programming', name: 'programming', emoji: '⌨️' },
  { to: '/music', name: 'music', emoji: '🎵' },
  { to: '/other', name: 'other', emoji: '😵‍💫' },
  { to: '/login', name: 'login', emoji: '👥' },
];

export const COLORS = {
  black: 'rgba(0, 0, 0, 0.9)',
  cloud: 'rgba(229, 229, 229, 1)',
  white: 'rgba(255, 255, 255, 1)',
  gray: 'rgba(0, 0, 0, 0.68)',
  grayDarken: 'rgba(0, 0, 0, 0.84)',
  grayLighten: 'rgba(0, 0, 0, 0.54)',
  primary: 'rgba(41, 128, 185, 1.0)',
  primaryDarken: 'rgba(28, 115, 172, 1.0)',
  google: 'rgba(219, 68, 55, 1.0)',
  googleDarken: 'rgba(206, 55, 42, 1.0)',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderColor: 'rgba(0, 0, 0, 0.1)',
  shadowColor: 'rgba(0, 0, 0, 0.25)',
};

// For using with min-width media query
export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1366px',
  desktop: '1680px',
};
