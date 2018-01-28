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
const processMatchData = (data) =>{
  
  let newData = {
    general: {
      gameType: data.gameType,
      gameId: data.gameId,
      gameCreation: data.gameCreation,
      gameDuration: data.gameDuration
    },
    goodTeam:{
      top:{
        ...data.participants[data.participants.find((ele) => (ele.timeline.lane === "TOP" && ele.stats.win)).participantId-1],
        ...data.participantIdentities[data.participants.find((ele) => (ele.timeline.lane === "TOP" && ele.stats.win)).participantId-1].player,
        ...getKDA(data.participants[data.participants.find((ele) => (ele.timeline.lane === "TOP" && ele.stats.win)).participantId-1])
      },
      jung:{
        ...data.participants[data.participants.find((ele) => (ele.timeline.lane === "JUNGLE" && ele.stats.win)).participantId-1],
        ...data.participantIdentities[data.participants.find((ele) => (ele.timeline.lane === "JUNGLE" && ele.stats.win)).participantId-1].player,
        ...getKDA(data.participants[data.participants.find((ele) => (ele.timeline.lane === "JUNGLE" && ele.stats.win)).participantId-1])
      },
      middle:{
        ...data.participants[data.participants.find((ele) => (ele.timeline.lane === "MIDDLE" && ele.stats.win)).participantId-1],
        ...data.participantIdentities[data.participants.find((ele) => (ele.timeline.lane === "MIDDLE" && ele.stats.win)).participantId-1].player,
        ...getKDA(data.participants[data.participants.find((ele) => (ele.timeline.lane === "MIDDLE" && ele.stats.win)).participantId-1])
      },
      bottom:{
        ...data.participants[data.participants.find((ele) => (ele.timeline.role === "DUO_CARRY" && ele.stats.win)).participantId-1],
        ...data.participantIdentities[data.participants.find((ele) => (ele.timeline.role === "DUO_CARRY" && ele.stats.win)).participantId-1].player,  
        ...getKDA(data.participants[data.participants.find((ele) => (ele.timeline.lane === "DUO_CARRY" && ele.stats.win)).participantId-1])
      },
      support:{
        ...data.participants[data.participants.find((ele) => (ele.timeline.role === "DUO_SUPPORT" && ele.stats.win)).participantId-1],
        ...data.participantIdentities[data.participants.find((ele) => (ele.timeline.role === "DUO_SUPPORT" && ele.stats.win)).participantId-1].player,
        ...getKDA(data.participants[data.participants.find((ele) => (ele.timeline.lane === "DUO_SUPPORT" && ele.stats.win)).participantId-1])
      }
    },
    badTeam:{
      top:{
        ...data.participants[data.participants.find((ele) => (ele.timeline.lane === "TOP" && !ele.stats.win)).participantId-1],
        ...data.participantIdentities[data.participants.find((ele) => (ele.timeline.lane === "TOP" && !ele.stats.win)).participantId-1].player,
        ...getKDA(data.participants[data.participants.find((ele) =>  (ele.timeline.lane === "TOP" && !ele.stats.win)).participantId-1])
      },
      jung:{
        ...data.participants[data.participants.find((ele) => (ele.timeline.lane === "JUNGLE" && !ele.stats.win)).participantId-1],
        ...data.participantIdentities[data.participants.find((ele) => (ele.timeline.lane === "JUNGLE" && !ele.stats.win)).participantId-1].player,
        ...getKDA(data.participants[data.participants.find((ele) => (ele.timeline.lane === "JUNGLE" && !ele.stats.win)).participantId-1])
      },
      middle:{
        ...data.participants[data.participants.find((ele) => (ele.timeline.lane === "MIDDLE" && !ele.stats.win)).participantId-1],
        ...data.participantIdentities[data.participants.find((ele) => (ele.timeline.lane === "MIDDLE" && !ele.stats.win)).participantId-1].player,
        ...getKDA(data.participants[data.participants.find((ele) => (ele.timeline.lane === "MIDDLE" && !ele.stats.win)).participantId-1])
      },
      bottom:{
        ...data.participants[data.participants.find((ele) => (ele.timeline.role === "DUO_CARRY" &&  !ele.stats.win)).participantId-1],
        ...data.participantIdentities[data.participants.find((ele) => (ele.timeline.role === "DUO_CARRY" && !ele.stats.win)).participantId-1].player,  
        ...getKDA(data.participants[data.participants.find((ele) => (ele.timeline.role === "DUO_CARRY" &&  !ele.stats.win)).participantId-1])
      },
      support:{
        ...data.participants[data.participants.find((ele) => (ele.timeline.role === "DUO_SUPPORT" && !ele.stats.win)).participantId-1],
        ...data.participantIdentities[data.participants.find((ele) => (ele.timeline.role === "DUO_SUPPORT" && !ele.stats.win)).participantId-1].player,  
        ...getKDA(data.participants[data.participants.find((ele) => (ele.timeline.role === "DUO_SUPPORT" && !ele.stats.win)).participantId-1])
      }
    }
  }
  return newData;
}