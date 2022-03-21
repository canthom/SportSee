import React from 'react';
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader';
import DashboardDaily from '../../components/dashboardDaily/DashboardDaily';
import DashboardSession from '../../components/dashboardSession/DashboardSession';
import DashboardRadar from '../../components/dashboardRadar/DashboardRadar';
import DashboardScore from '../../components/dashboardScore/DashboardScore';
import DashboardStats from '../../components/dashboardStats/DashboardStats';
import Error from '../../components/error/Error';
import DataModel from '../../functions/dataModel.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader';

function UserPage() {
  const [dataUser, setDataUser] = useState([]);
  const [dataActivity, setDataActivity] = useState([]);
  const [dataSessions, setDataSessions] = useState([]);
  const [dataPerf, setDataPerf] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const params = useParams();

  useEffect(() => {
    const promise1 = DataModel.getUser(params.id).then((response) => {
      setDataUser(response);
    });

    const promise2 = DataModel.getActivity(params.id).then((response) => {
      setDataActivity(response);
    });

    const promise3 = DataModel.getSessions(params.id).then((response) => {
      setDataSessions(response);
    });

    const promise4 = DataModel.getPerformance(params.id).then((response) => {
      setDataPerf(response);
    });

    Promise.all([promise1, promise2, promise3, promise4])
      .then(() => {
        setIsLoading(false);
      })
      .catch((reason) => {
        setHasError(true);
      });
  }, [params.id]);

  if (hasError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <DashboardHeader name={dataUser.firstName} />
      <DashboardDaily data={dataActivity.sessions} />
      <DashboardSession data={dataSessions.sessions} />
      <DashboardRadar data={dataPerf.data} />
      <DashboardScore data={dataUser.score} />
      <DashboardStats
        calorie={dataUser.stats.calorie}
        protein={dataUser.stats.protein}
        carbo={dataUser.stats.carbohydrate}
        lipid={dataUser.stats.lipid}
      />
    </>
  );
}

export default UserPage;
