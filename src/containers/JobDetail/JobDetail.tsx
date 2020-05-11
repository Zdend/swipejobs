import React, { useCallback } from 'react';
import { Job } from '@/types/job';
import { useImage } from '@/hooks/useImage';
import {
  JobDetailWrapper,
  JobDetailBanner, 
  JobDetailSummary, 
  JobDetailNumeration, 
  JobDetailNumerationLabel, 
  JobDetailNumerationPanel, 
  JobDetailNumerationValue, 
  JobDetailInfoPanels,
  JobDetailActions
} from './JobDetail.styled';
import JobDetailInfoPanel from './JobDetailInfoPanel';
import Btn from '@/components/Btn';
import { RiCalendar2Line, RiToolsLine, RiMapPinLine, RiAccountCircleLine, RiLoader4Line } from 'react-icons/ri';
import { BtnColorType } from '@/shared/theme';
import { fetchRejectJob, fetchAcceptJob } from '@/api/job';
import useApiCallback from '@/hooks/useApiCallback';
import { displayDate, displayTime } from '@/shared/date';

interface JobDetailProps {
  workerId: string;
  job: Job;
  nextJob: Function;
}

const ICON_SIZE = 25;

const JobDetail = ({
  workerId,
  job,
  nextJob
}: JobDetailProps) => {
  const [jobImageLoaded, jobImageUrl] = useImage(job.jobTitle.imageUrl);
  const [rejectJob, { 
    loading: rejectLoading 
  }] = useApiCallback(fetchRejectJob, workerId, job.jobId);
  const [acceptJob, { 
    loading: acceptLoading 
  }] = useApiCallback(fetchAcceptJob, workerId, job.jobId);
  
  const onRejectJob = useCallback(() => {
    rejectJob(() => nextJob());
  }, [nextJob, rejectJob]);

  const onAcceptJob = useCallback(() => {
    acceptJob(() => nextJob());
  }, [nextJob, acceptJob]);

  const loading = rejectLoading || acceptLoading;
  return (
    <JobDetailWrapper>
      <JobDetailBanner 
        src={jobImageLoaded ? jobImageUrl : '/images/logo.png'} 
        contain={!jobImageLoaded}
      />
      <JobDetailSummary>
        <h1 className="text-lg">{job.jobTitle.name}</h1>
        <h2 className="text-sm">{job.company.name}</h2>
      </JobDetailSummary>
      <JobDetailNumeration>
        <JobDetailNumerationPanel>
          <JobDetailNumerationLabel>Distance</JobDetailNumerationLabel>
          <JobDetailNumerationValue>{Number(job.milesToTravel).toFixed(2)} miles</JobDetailNumerationValue>
        </JobDetailNumerationPanel>
        <JobDetailNumerationPanel>
          <JobDetailNumerationLabel className="text-right">Hourly Rate</JobDetailNumerationLabel>
          <JobDetailNumerationValue className="text-right">${Number(job.wagePerHourInCents / 100).toFixed(2)}</JobDetailNumerationValue>
        </JobDetailNumerationPanel>
      </JobDetailNumeration>
      <JobDetailInfoPanels>
        <JobDetailInfoPanel icon={<RiCalendar2Line size={ICON_SIZE} />} title="Shift Dates">
          {job.shifts.length ? job.shifts.map((shift, index) => (
            <div key={index} className="uppercase mt-1">{displayDate(shift.startDate)} - {displayTime(shift.endDate)}</div>
          )) : <div>To be determined.</div>}
        </JobDetailInfoPanel>
        <JobDetailInfoPanel icon={<RiMapPinLine size={ICON_SIZE} />} title="Location">
          <div>{job.company.address?.formattedAddress}</div>
          <div>{job.milesToTravel} miles from your job search location</div>
        </JobDetailInfoPanel>
        <JobDetailInfoPanel icon={<RiToolsLine size={ICON_SIZE} />} title="Requirements">
          {!job.requirements?.length 
            ? <div>No special requirements.</div>
            : <ul>
              {job.requirements?.map((requirement, index) => <li key={index}> - {requirement}</li>)}
            </ul>}
        </JobDetailInfoPanel>
        <JobDetailInfoPanel icon={<RiAccountCircleLine size={ICON_SIZE} />} title="Report To">
          {job.company.reportTo?.name} {job.company.reportTo?.phone}
        </JobDetailInfoPanel>
      </JobDetailInfoPanels>
      <JobDetailActions>
        <Btn color={BtnColorType.SECONDARY} disabled={loading} onClick={onRejectJob}>
          {rejectLoading && <RiLoader4Line className="spin mr-2" />}
          No Thanks
        </Btn>
        <Btn color={BtnColorType.PRIMARY} disabled={loading} onClick={onAcceptJob}>
          {acceptLoading && <RiLoader4Line className="spin mr-2" />}
          I'll Take it
        </Btn>
      </JobDetailActions>
    </JobDetailWrapper>
  );
};

export default JobDetail;
