import * as actions from "../actions/types";
import * as status from "./status";
import moment from "moment";
const initialState = {
  status: status.INIT
};
export const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_MATCHES_REQUEST:
      return {
        status: status.LOADING
      };
    case actions.GET_MATCHES_SUCCESS:
      return {
        ...state,
        matches: action.payload.data.matches.slice(0, 11)
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
        matches: state.matches.map((match, i) => {
          return i === action.index
            ? Object.assign(
                {},
                processMatchData(match, { ...action.payload.data })
              )
            : match;
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
      };
    default:
      return state;
  }
};

const processMatchData = (match, data) => {
  let newData = {
    general: {
      gameCreation: getGameCreation(data.gameCreation),
      gameDuration: getGameDuration(data.gameDuration),
      gameMode: data.gameType
    },
    goodTeam: [
      ...getPlayerData(data, "TOP", "SOLO", true),
      ...getPlayerData(data, "JUNGLE", "NONE", true),
      ...getPlayerData(data, "MIDDLE", "SOLO", true),
      ...getPlayerData(data, "BOTTOM", "DUO", true),
      ...getPlayerData(data, "BOTTOM", "DUO_CARRY", true),
      ...getPlayerData(data, "BOTTOM", "DUO_SUPPORT", true)
    ],
    badTeam: [
      ...getPlayerData(data, "TOP", "SOLO", false),
      ...getPlayerData(data, "JUNGLE", "NONE", false),
      ...getPlayerData(data, "MIDDLE", "SOLO", false),
      ...getPlayerData(data, "BOTTOM", "DUO", false),
      ...getPlayerData(data, "BOTTOM", "DUO_CARRY", false),
      ...getPlayerData(data, "BOTTOM", "DUO_SUPPORT", false)
    ]
  };
  return newData;
};
const getGameCreation = time => {
  let timeOfGame = moment(new Date(time)).format("DD/MM/YYYY HH:mm:ss");
  let timeOfNow = moment(Date.now()).format("DD/MM/YYYY HH:mm:ss");
  const difference = moment(timeOfNow, "DD/MM/YYYY HH:mm:ss").diff(
    moment(timeOfGame, "DD/MM/YYYY HH:mm:ss")
  );
  let duration = moment.duration(difference);
  if (Math.floor(duration.asHours()) === 0) {
    return moment.utc(difference).format("mm") + " minutes ago";
  } else if (Math.floor(duration.asHours()) === 1) {
    return "an hour ago";
  } else if (Math.floor(duration.asHours()) < 24) {
    return Math.floor(duration.asHours()) + " hours ago";
  } else if (Math.floor(duration.asDays() > 0)) {
    return Math.floor(duration.asDays()) + " day ago";
  } else if (Math.floor(duration.asHours()) > 24) {
    return Math.floor(duration.asHours() / 24) + " days ago";
  } else {
    return "Time Error";
  }
};
const getGameDuration = time => {
  return `${(time / 60).toFixed(0)}m ${(time % 3600 % 60).toFixed(0)}s`;
};
const getPlayerData = (data, lane, pos, isWinner) => {
  const indexes = data.participants
    .filter(
      player =>
        player.timeline.lane === lane &&
        player.timeline.role === pos &&
        player.stats.win === isWinner
    )
    .map(a => a.participantId - 1);

  let arr = [];
  indexes.forEach(i => {
    arr.push({
      stats: {
        kda: getKDA(data.participants[i]),
        kills: data.participants[i].stats.kills,
        deaths: data.participants[i].stats.deaths,
        assists: data.participants[i].stats.assists,
        gold: data.participants[i].stats.goldEarned,
        damageDealt: data.participants[i].stats.totalDamageDealtToChampions,
        damageDealtMagic:
          data.participants[i].stats.magicDamageDealtToChampions,
        damageDealtPhysical:
          data.participants[i].stats.physicalDamageDealtToChampions,
        damageDealtTrue: data.participants[i].stats.trueDamageDealtToChampions,
        damageTaken: data.participants[i].stats.totalDamageTaken,
        damageTakenMagic: data.participants[i].stats.magicalDamageTaken,
        damageTakenPhysical: data.participants[i].stats.physicalDamageTaken,
        damageTakenTrue: data.participants[i].stats.trueDamageTaken,
        healing: data.participants[i].stats.totalHeal,
        level: data.participants[i].stats.champLevel,
        cs: data.participants[i].stats.totalMinionsKilled
      },
      items: {
        item0: data.participants[i].stats.item0,
        item1: data.participants[i].stats.item1,
        item2: data.participants[i].stats.item2,
        item3: data.participants[i].stats.item3,
        item4: data.participants[i].stats.item4,
        item5: data.participants[i].stats.item5,
        item6: data.participants[i].stats.item6
      },
      role: data.participants[i].timeline.role,
      lane: data.participants[i].timeline.lane,
      championId: data.participants[i].championId,
      spell1: data.participants[i].spell1,
      spell2: data.participants[i].spell2,
      win: data.participants[i].stats.win,
      account: {
        summonerName: data.participantIdentities[i].player.summonerName,
        profileIcon: data.participantIdentities[i].player.profileIcon
      }
    });
  });
  return arr;
};
const getKDA = data => {
  return (
    ((data.stats.kills + data.stats.assists).toFixed(2) /
    data.stats.deaths).toFixed(2)
  );
};
