import React, { useState, useCallback } from 'react';
import { useApiData } from '@/hooks/useApiData';
import { fetchJobMatches } from '@/api/job';
import DataState, { shouldRenderDataState } from '@/components/DataState';
import JobDetail from '../JobDetail';

interface JobFeedProps {
  workerId: string;
}

const JobFeed = ({
  workerId
}: JobFeedProps) => {
  const [jobIndex, setJobIndex] = useState(0);
  const result = useApiData(fetchJobMatches, workerId);
  const nextJob = useCallback(() => {
    setJobIndex(jobIndex + 1);
  }, [ setJobIndex, jobIndex ]);
  
  if (shouldRenderDataState(result)) {
    return <DataState {...result} />;
  }

  const { data } = result;
  const currentJob = data[jobIndex];
  return (
    <JobDetail job={currentJob} nextJob={nextJob} />
  );
};

export default JobFeed;