import * as serviceFetch from './fetchData.js';
import * as serviceMock from './mockData.js';

const service =
  process.env.REACT_APP_MOCK === 'true' ? serviceMock : serviceFetch;

/**
 * Class to Data Modeling
 */
class DataModel {
  /**
   * @property { Function } getActivity Fetch or Mock Activity Data
   * @param { String } id User ID
   * @returns { Promise }
   */
  static getActivity(id) {
    return service.getActivity(id).then((result) => ({
      sessions: result.data.sessions,
    }));
  }

  /**
   * @property { Function } getPerformance Fetch or Mock Performance Data
   * @param { String } id User ID
   * @returns { Promise }
   */
  static getPerformance(id) {
    return service.getPerformance(id).then((result) => ({
      data: [
        {
          value: result.data.data[0].value,
          kind: result.data.kind[1],
        },
        {
          value: result.data.data[1].value,
          kind: result.data.kind[2],
        },
        {
          value: result.data.data[2].value,
          kind: result.data.kind[3],
        },
        {
          value: result.data.data[3].value,
          kind: result.data.kind[4],
        },
        {
          value: result.data.data[4].value,
          kind: result.data.kind[5],
        },
        {
          value: result.data.data[5].value,
          kind: result.data.kind[6],
        },
      ],
    }));
  }

  /**
   * @property { Function } getSessions Fetch or Mock Sessions Data
   * @param { String } id User ID
   * @returns { Promise }
   */
  static getSessions(id) {
    return service.getSessions(id).then((result) => ({
      sessions: result.data.sessions,
    }));
  }

  /**
   * @property { Function } getUser Fetch or Mock User Data
   * @param { String } id User ID
   * @returns { Promise }
   */
  static getUser(id) {
    return service.getUser(id).then((result) => ({
      id: result.data.id,
      firstName: result.data.userInfos.firstName,
      score: [
        {
          number: result.data.score * 100 || result.data.todayScore * 100,
          fill: 'red',
        },
        { number: 100, fill: 'transparent' },
      ],
      stats: {
        calorie: result.data.keyData.calorieCount,
        protein: result.data.keyData.proteinCount,
        carbohydrate: result.data.keyData.carbohydrateCount,
        lipid: result.data.keyData.lipidCount,
      },
    }));
  }
}

export default DataModel;
