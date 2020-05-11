import React from 'react';
import BasicLayout from '@/components/BasicLayout';
import { useApiData } from '@/hooks/useApiData';
import { fetchProfile } from '@/api/profile';
import { WORKER_ID } from '@/shared/constants';
import PageLoader from '@/components/PageLoader';
import JobFeed from '@/containers/JobFeed';

export default () => {
  const { data, loading } = useApiData(fetchProfile, WORKER_ID);
  const fullName = data?.firstName && data?.lastName ? `${data.firstName} ${data?.lastName}` : '';

  return (
    <BasicLayout title={loading ? <PageLoader /> : fullName}>
      <JobFeed workerId={WORKER_ID} />
    </BasicLayout>
  );
};
