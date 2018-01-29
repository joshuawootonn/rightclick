import * as actions from "../actions/types";
import * as status from './status';
const initialState = {
  status: status.INIT
};
export const matchReducer = (state = initialState, action) => {
  switch (action.type) {    
    case actions.GET_MATCHES_REQUEST:
      return{
        status: status.LOADING
      }
    case actions.GET_MATCHES_SUCCESS:
      return {
        ...state,
        matches: action.payload.data.matches
      };
    case actions.GET_MATCHES_FAILURE:
      return {
        ...state,
        status: status.ERROR,
        error: "Failed retreiving matches data"
      };
    case actions.GET_MATCH_REQUEST:
      return state;
    case actions.GET_MATCH_SUCCESS:
      return {
        ...state,
        matches: state.matches.map((match,i) =>{
          return i === action.index ? Object.assign({},match,processMatchData({...action.payload.data})) : match
        })
      };
    case actions.GET_MATCH_FAILURE:
      return {
        ...state,
        status: status.ERROR,
        error: "Failed retreiving match data"
      };
    case actions.GET_DIVISION_SUCCESS_ALL:
      return {
        ...state,
        status: status.SUCCESS
      }
    default:
      return state;
  }
};

const getKDA = (data) => {
 
  return (data.stats.kills.toFixed(2)+data.stats.assists.toFixed(2))/(data.stats.deaths.toFixed(2))
}
const getPosData = (data,lane,pos,isWinner) => {
  const indexes = data.participants.filter((player) => (player.timeline.lane === lane && player.timeline.role ===pos && player.stats.win === isWinner)).map(a => a.participantId-1);
  
  let arr = [];
  indexes.forEach(i => {
    arr.push({
      ...data.participants[i],
      ...data.participantIdentities[i],
      ...getKDA(data.participants[i])
    })
  });
  return arr;
}
const processMatchData = (data) =>{
  let newData = {
    general: {
      gameType: data.gameType,
      gameId: data.gameId,
      gameCreation: data.gameCreation,
      gameDuration: data.gameDuration
    },
    goodTeam:[...getPosData(data,"TOP","SOLO",true),...getPosData(data,"JUNGLE","NONE",true),...getPosData(data,"MIDDLE","SOLO",true),...getPosData(data,"BOTTOM","DUO",true),...getPosData(data,"BOTTOM","DUO_CARRY",true),...getPosData(data,"BOTTOM","DUO_SUPPORT",true)],
    badTeam:[...getPosData(data,"TOP","SOLO",false),...getPosData(data,"JUNGLE","NONE",false),...getPosData(data,"MIDDLE","SOLO",false),...getPosData(data,"BOTTOM","DUO",false),...getPosData(data,"BOTTOM","DUO_CARRY",false),...getPosData(data,"BOTTOM","DUO_SUPPORT",false)]
    
  }
  console.log(data.participants.map((ele) => ele.timeline.lane));
  console.log(data.participants.map((ele) => ele.timeline.role))
  console.log(newData);
  return newData;
}