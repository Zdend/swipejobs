import React from 'react';
import { Job } from '@/types/job';
import styled from '@emotion/styled';
import { SHADES, BORDER_RADIUS_MEDIUM } from '@/shared/theme';

const JobDetailWrapper = styled.div`
  background-color: ${SHADES.WHITE};
  border-radius: ${BORDER_RADIUS_MEDIUM};
  width: 100%;
`;

interface JobDetailProps {
  job: Job;
  nextJob: Function;
}

const JobDetail = ({
  job
}: JobDetailProps) => {
  return (
    <JobDetailWrapper>
      {job.jobId}
    </JobDetailWrapper>
  );
};

export default JobDetail;
