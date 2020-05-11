import React, { useState, useCallback } from 'react';
import { useApiData } from '@/hooks/useApiData';
import { fetchJobMatches } from '@/api/job';
import DataState, { shouldRenderDataState } from '@/components/DataState';
import JobDetail from '../JobDetail';
import { job } from '@/fixtures/job';

interface JobFeedProps {
  workerId: string;
}

const JobFeed = ({
  workerId
}: JobFeedProps) => {
  const [jobIndex, setJobIndex] = useState(0);
  // const result = useApiData(fetchJobMatches, workerId);
  const result = {
    loading: false,
    error: null,
    data: [job, job]
  }
  const nextJob = useCallback(() => {
    setJobIndex(jobIndex + 1);
  }, [ setJobIndex, jobIndex ]);
  
  if (shouldRenderDataState(result)) {
    return <DataState {...result} />;
  }

  const { data } = result;
  const currentJob = data[jobIndex];

  return (
    <JobDetail job={currentJob} nextJob={nextJob} workerId={workerId} />
  );
};

export default JobFeed;