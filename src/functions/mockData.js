export function getUser(id) {
  if (id === '12') {
    return new Promise((resolve, reject) => {
      resolve({
        data: {
          id: 12,
          userInfos: { firstName: 'Mockarl', lastName: 'Dovineau', age: 31 },
          todayScore: 0.12,
          keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50,
          },
        },
      });
    });
  }

  if (id === '18') {
    return new Promise((resolve, reject) => {
      resolve({
        data: {
          id: 18,
          userInfos: { firstName: 'Mockilia', lastName: 'Ratorez', age: 34 },
          score: 0.3,
          keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120,
          },
        },
      });
    });
  }
}

export function getActivity(id) {
  if (id === '12') {
    return new Promise((resolve, reject) => {
      resolve({
        data: {
          userId: 12,
          sessions: [
            { day: '2020-07-01', kilogram: 80, calories: 240 },
            { day: '2020-07-02', kilogram: 80, calories: 220 },
            { day: '2020-07-03', kilogram: 81, calories: 280 },
            { day: '2020-07-04', kilogram: 81, calories: 290 },
            { day: '2020-07-05', kilogram: 80, calories: 160 },
            { day: '2020-07-06', kilogram: 78, calories: 162 },
            { day: '2020-07-07', kilogram: 76, calories: 390 },
          ],
        },
      });
    });
  }

  if (id === '18') {
    return new Promise((resolve, reject) => {
      resolve({
        data: {
          userId: 18,
          sessions: [
            { day: '2020-07-01', kilogram: 70, calories: 240 },
            { day: '2020-07-02', kilogram: 69, calories: 220 },
            { day: '2020-07-03', kilogram: 70, calories: 280 },
            { day: '2020-07-04', kilogram: 70, calories: 500 },
            { day: '2020-07-05', kilogram: 69, calories: 160 },
            { day: '2020-07-06', kilogram: 69, calories: 162 },
            { day: '2020-07-07', kilogram: 69, calories: 390 },
          ],
        },
      });
    });
  }
}

export function getSessions(id) {
  if (id === '12') {
    return new Promise((resolve, reject) => {
      resolve({
        data: {
          userId: 12,
          sessions: [
            { day: 1, sessionLength: 30 },
            { day: 2, sessionLength: 23 },
            { day: 3, sessionLength: 45 },
            { day: 4, sessionLength: 50 },
            { day: 5, sessionLength: 0 },
            { day: 6, sessionLength: 0 },
            { day: 7, sessionLength: 60 },
          ],
        },
      });
    });
  }

  if (id === '18') {
    return new Promise((resolve, reject) => {
      resolve({
        data: {
          userId: 18,
          sessions: [
            { day: 1, sessionLength: 30 },
            { day: 2, sessionLength: 40 },
            { day: 3, sessionLength: 50 },
            { day: 4, sessionLength: 30 },
            { day: 5, sessionLength: 30 },
            { day: 6, sessionLength: 50 },
            { day: 7, sessionLength: 50 },
          ],
        },
      });
    });
  }
}

export function getPerformance(id) {
  if (id === '12') {
    return new Promise((resolve, reject) => {
      resolve({
        data: {
          userId: 18,
          kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity',
          },
          data: [
            { value: 200, kind: 1 },
            { value: 240, kind: 2 },
            { value: 80, kind: 3 },
            { value: 80, kind: 4 },
            { value: 220, kind: 5 },
            { value: 110, kind: 6 },
          ],
        },
      });
    });
  }

  if (id === '18') {
    return new Promise((resolve, reject) => {
      resolve({
        data: {
          userId: 18,
          kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity',
          },
          data: [
            { value: 200, kind: 1 },
            { value: 240, kind: 2 },
            { value: 80, kind: 3 },
            { value: 80, kind: 4 },
            { value: 220, kind: 5 },
            { value: 110, kind: 6 },
          ],
        },
      });
    });
  }
}
