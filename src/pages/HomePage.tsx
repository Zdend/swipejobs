import React from 'react';
import BasicLayout from '@/components/BasicLayout';
import { useApiData } from '@/hooks/useApiData';
import { fetchProfile } from '@/api/profile';
import { WORKER_ID } from '@/shared/constants';
import JobFeed from '@/containers/JobFeed';

export default () => {
  const { data } = useApiData(fetchProfile, WORKER_ID);
  const fullName = data?.firstName && data?.lastName ? `${data.firstName} ${data?.lastName}` : '';

  return (
    <BasicLayout title={fullName}>
      <JobFeed workerId={WORKER_ID} />
    </BasicLayout>
  );
};
