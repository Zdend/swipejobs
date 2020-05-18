import React, { useState, useCallback } from 'react';
import { RiCheckDoubleLine } from 'react-icons/ri';
import { useApiData } from '@/hooks/useApiData';
import { fetchJobMatches } from '@/api/job';
import DataState, { shouldRenderDataState } from '@/components/DataState';
import JobDetail from '../JobDetail';
import PageStatus from '@/components/PageStatus';

interface JobFeedProps {
  workerId: string;
}

const JobFeed = ({ workerId }: JobFeedProps) => {
  const [jobIndex, setJobIndex] = useState(0);
  const result = useApiData(fetchJobMatches, workerId);
  const nextJob = useCallback(() => setJobIndex(i => i + 1), []);
  if (shouldRenderDataState(result)) {
    return <DataState {...result} />;
  }

  const { data } = result;
  const currentJob = data[jobIndex];
  if (!currentJob) {
    return (
      <PageStatus IconComponent={RiCheckDoubleLine} data-testid="job-feed__all-seen">
        You have seen all positions, please come back later.
      </PageStatus>
    );
  }

  return <JobDetail job={currentJob} nextJob={nextJob} workerId={workerId} />;
};

export default JobFeed;
