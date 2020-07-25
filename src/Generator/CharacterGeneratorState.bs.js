'use strict';


function defaultState(param) {
  return {
          characterType: undefined,
          descriptorType: undefined,
          focusType: undefined,
          weapons: /* [] */0,
          esoteries: /* [] */0,
          tricks: /* [] */0,
          extraStats: {
            might: 0,
            speed: 0,
            intellect: 0
          },
          extraEdges: {
            might: 0,
            speed: 0,
            intellect: 0
          }
        };
}

exports.defaultState = defaultState;
/* No side effect */
